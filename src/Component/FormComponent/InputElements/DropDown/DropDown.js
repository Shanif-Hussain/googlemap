import React, { useEffect, useState } from 'react';

import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import Label from '../Label';

export default function DropDown(props) {
    let { onChange, name, value, isMulti, editable, isSearchable, fieldInfo,
        isClearable, isLoading, isRtl, noOptionsMessage, suggestionURL, masterData, label, parentField } = props;

    const animatedComponents = makeAnimated();

    const [options, setOptions] = useState([]);
    const [actualValue, setActualValue] = useState(null);
    const [loading, setLoading] = useState(isLoading);

    useEffect(() => {
        if (value[parentField]) {
            if (value[name] != "") {
                let selectedValue = isMulti && value[name] ? value[name].includes("[") ? { ...value, [name]: JSON.parse(value[name].replace(/\\/g, "")) } : value : value;
                setActualValue(selectedValue[name]);
            }
            setLoading(true);
        }

        if (Object.keys(value).length > 0 && value[name] != "") {
            let selectedValue = isMulti && value[name] ? value[name].includes("[") ? { ...value, [name]: JSON.parse(value[name].replace(/\\/g, "")) } : value : value;
            setActualValue(selectedValue[name]);
        }

        loadOptions();
    }, [value[parentField]])

    const loadOptions = async () => {
        if (suggestionURL) {
            let URL = suggestionURL;
            if ((suggestionURL !== "" && suggestionURL !== null && suggestionURL.indexOf("=") > 0) && (parentField !== "" && parentField !== null)) {
                if (suggestionURL.split("=").pop() === "" && (value[parentField] !== undefined && value[parentField] !== "")) {
                    URL = URL + value[parentField];
                }
                else if (suggestionURL.split("=").pop() !== "" && (value[parentField] === undefined || value[parentField] === "")) {
                    URL += "";
                }
                else {
                    URL = "";
                }
            }

            if (URL !== "") {
                let response = await fetch(URL);
                let res_data = await response.json().then(data => ({
                    data: data,
                    status: response.status
                }));
                let options = await res_data.data.data.map((item) => {
                    return { 'label': item.dropdowntext, 'value': item.dropdownvalue }
                });
                setOptions(options);
                setLoading(false);
                if (value[parentField] !== "" && value[parentField] !== undefined) {// clearing cascading dropdown value when parent field value is changed 
                    let evt = { target: { name: name, value: '' } };
                    await onChange(evt);
                }
            }
            else {
                setOptions([]);
                if (value[parentField] === "") {// clearing cascading dropdown value when parent field is cleared 
                    let evt = { target: { name: name, value: '' } };
                    await onChange(evt);
                }
            }
        }
        if (masterData) {
            if (JSON.parse(masterData).length !== 0) {
                let options = await JSON.parse(masterData).map((item) => {
                    return { 'label': item.name, 'value': item.id }
                });
                setOptions(options);
                setLoading(false);
            }
        }
    };

    const handleInputChange = characterEntered => {
        console.log(characterEntered);
    };

    return (
        <div className="col-md-12 mb-3">
            <div className="form-group">
                <Label Htmlfor={name} label={label} fieldInfo={fieldInfo} />
                <Select
                    components={animatedComponents}
                    options={options}
                    name={name}
                    isMulti={isMulti}
                    isDisabled={editable}
                    isLoading={loading}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    isClearable={isClearable}
                    noOptionsMessage={() => noOptionsMessage}
                    value={
                        options.map(option => {
                            let selectedValue = isMulti && value[name] ? value[name].includes("[") ? { ...value, [name]: JSON.parse(value[name].replace(/\\/g, "")) } : value : value;
                            //if (value[name] && Object.keys(value[name]).length === 0 && Object.getPrototypeOf(value[name]) === Object.prototype) { return null; }
                            if (typeof selectedValue[name] === "number" && option.value === selectedValue[name]) { return option }
                            else if (typeof selectedValue[name] === "string" && option.value.toString() === selectedValue[name]) { return option }
                            else if (typeof selectedValue[name] === "object") { return (selectedValue[name].filter((val) => val.label === option.label))[0] }
                            else if (actualValue) {
                                return (typeof actualValue === "object") ?
                                    (actualValue.filter((val) => val.label === option.label))[0] :
                                    (JSON.parse(actualValue).filter((val) => val.label === option.label))[0];
                            }
                            else { return null; }
                        })}
                    onChange={async (e) => {
                        console.log(e);
                        let evt = { target: { name: name, value: e === null ? '' : (isMulti === false) ? e.value : e } };

                        console.log(evt);
                        await onChange(evt);
                    }}
                //onInputChange={handleInputChange}
                />
            </div>
        </div>
    );
}










// const groupedOptions = [
//     {
//         label: "Group 1",
//         options: [
//             { label: "Group 1, option 1", value: "value_1" },
//             { label: "Group 1, option 2", value: "value_2" }
//         ]
//     }
// ];


// const deepSearch = (options, value, tempObj = {}) => {
//     if (options && value != null) {
//       options.find((node) => {
//         if (node.value === value) {
//           tempObj.found = node;
//           return node;
//         }
//         return deepSearch(node.options, value, tempObj);
//       });
//       if (tempObj.found) {
//         return tempObj.found;
//       }
//     }
//     return undefined;
//   };