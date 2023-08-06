import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import Label from '../Label';

import './../../../../css/autocomplete.css';

export default function AutoComplete(props) {
    let { masterData, webURL, name, label, onChange, error, style, disable, fieldInfo, value, dropdownText, dropdownValue, dependentField, dependentValue } = props;
    let colWidth = "form-group col-md-" + style.colMd + " col-lg-" + style.colLg + " offset-" + style.offsetCol;

    const [fieldvalue, setFieldvalue] = useState(value[name] || "");
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [noSuggestions, setNoSuggestions] = useState(false);
    const [noSelectionmade, setNoSelectionmade] = useState(false);

    useEffect(() => {
        const input = document.getElementsByName(name)[0];
        if (input.parentElement.nextSibling.querySelector(".line") != null) {
            input.parentElement.nextSibling.querySelector(".line").remove();
        }
        if (!isLoading && fieldvalue != "" && input.parentElement.nextSibling.querySelectorAll(".react-autosuggest__suggestions-list").length === 1) {
            var markerDiv = document.createElement("div");
            markerDiv.innerHTML = `<div class="line"></div>`;
            input.parentElement.nextSibling.prepend(markerDiv.firstChild);
        }
    }, [isLoading])

    // Filter logic
    const getSuggestions = async (value) => {
        if (typeof (webURL) !== "undefined" && webURL != "") {
            if (value.trim().length > 2) {
                if (value.trim().toUpperCase().includes("ZZZ")) {
                    return [{ airportName: "", airport_ICAOCode: "", dependentvalue: "", dropdowntext: "ZZZZ", dropdownvalue: "ZZZZ" }]
                }
                else {
                    setIsLoading(true);
                    const inputValue = value.trim().toLowerCase();
                    let response = await fetch("https://fintrafficapi.astrautm.com/api/" + webURL + "/" + inputValue, {
                        method: "GET",
                        headers: {
                            "content-type": "application/json",
                            Authorization: "Bearer " + localStorage.getItem("token"),
                        },
                    });
                    let responseJson = await response.json();
                    let data = await responseJson.data;

                    // return data;

                    let datalist = getUniqueListBy(data, 'airport_ICAOCode');
                    let suggestionsJsonArray = [];
                    datalist.map((values) => {
                        suggestionsJsonArray.push({
                            dropdowntext: dropdownText.split(",").map((x) => values[x]).join(' - '),
                            dropdownvalue: values[dropdownValue],
                            dependentvalue: values[dependentValue]
                        })
                    })
                    return suggestionsJsonArray;
                }
            }
            return [];
        }
        else {
            return JSON.parse(masterData).map(data => {
                return {
                    dropdowntext: dropdownText.split(",").map((x) => data[x].toUpperCase()).join(' - '),
                    dropdownvalue: data[dropdownValue],
                    dependentvalue: data[dependentValue]
                };
            }).filter(data =>
                data.dropdowntext.includes(value.trim().toUpperCase())
            );
        }
    };

    const getUniqueListBy = (arr, key) => {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    // Trigger suggestions
    const getSuggestionValue = suggestion => suggestion.dropdownvalue;

    // Render Each Option
    const renderSuggestion = suggestion => (
        <div className="ellipsis">
            {suggestion.dropdowntext}
        </div>
    );

    // onFieldChange event handler
    const onFieldChanged = (event, { newValue }) => {
        setFieldvalue(newValue.trim().toUpperCase());
    };

    // Suggestion rerender when user types
    const onSuggestionsFetchRequested = ({ value }) => {
        getSuggestions(value)
            .then(data => {
                if (data.length === 0) {
                    setSuggestions([]);
                    setNoSuggestions(true);
                    setNoSelectionmade(false);
                    setIsLoading(false);
                }
                else {
                    setSuggestions(data);
                    setNoSuggestions(false);
                    setNoSelectionmade(true);
                    setIsLoading(false);
                }
            })
    };

    // Triggered on clear
    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const onSuggestionsBtnClearClick = async () => {
        setSuggestions([]);
        setFieldvalue('');
        await onChange({ target: { name: name, value: '' } });
        if (typeof (dependentField) !== "undefined" && dependentField != "") { await onChange({ target: { name: dependentField, value: '' } }); }
    };

    // Triggered on selection
    const onSuggestionSelected = async (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        setFieldvalue(suggestionValue);
        setNoSelectionmade(false);
        await onChange({ target: { name: name, value: suggestion.dropdownvalue } });
        if (typeof (dependentField) !== "undefined" && dependentField != "") { await onChange({ target: { name: dependentField, value: suggestion[dependentValue] } }); }
    };

    // Option props
    const inputProps = {
        name: name,
        placeholder: '',
        value: fieldvalue,
        autoComplete: 'off',
        disabled: disable,
        maxLength: 4,
        onChange: onFieldChanged,
        onBlur: (event, { newValue }) => {
            if (noSelectionmade) {
                const input = document.getElementsByName(name)[0];
                input.focus();
            }
        }
    };

    // Custom Style
    const renderInputComponent = inputProps => (
        <div className="bFaMkg">
            <input {...inputProps} />
            <div className="sc-dkzDqf kBFjuo clear-icon">
                {(!isLoading && fieldvalue != "") && <svg className='spinner' width="20" height="20" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={onSuggestionsBtnClearClick}>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.58 12 5 17.58 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>}
                {
                    isLoading &&
                    <img className='spinner' src="https://media.giphy.com/media/s4KqhlPU9Ypnq/giphy.gif" width="20" height="20" style={{ width: '20px !important' }} />
                }
            </div>
        </div>
    );

    return (
        <div className={colWidth}>
            <div className="form-group gEUWEF">
                <Label Htmlfor={name} label={label} fieldInfo={fieldInfo} />
                <div className="field">
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        onSuggestionSelected={onSuggestionSelected}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        renderInputComponent={renderInputComponent}
                    />
                    {
                        noSuggestions &&
                        <div className="no-suggestions">
                            <em className='required'>Record not found!</em>
                        </div>
                    }
                    {error && <div className="invalid-message">{error}</div>}
                </div>
            </div>
        </div>
    );
}