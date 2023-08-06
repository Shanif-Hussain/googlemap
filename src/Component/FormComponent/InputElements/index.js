import React, { useState } from 'react';

// import Range from './TextBox/Range';
// import Hidden from './TextBox/Hidden';
// import TextBox from './TextBox/TextBox';
// import Password from './TextBox/Password';
// import TextArea from './TextBox/TextArea';
// import CheckBox from './CheckBox/CheckBox';
import DropDown from './DropDown/DropDown';
// import CKEditor from './TextBox/RichTextBox';
// import Time12 from './DateTimePicker/Time12';
// import Time24 from './DateTimePicker/Time24';
// import CheckList from './CheckBox/CheckList';
// import RadioList from './RadioList/RadioList';
// import AutoComplete from './TextBox/AutoComplete';
// import DatePicker from './DateTimePicker/DatePicker';

export default function Index() {
    const [state, setState] = useState({});

    const handleChange = (evt) => {
        return new Promise((resolve) => {
            const value = evt.target.value;
            setState({
                ...state,
                [evt.target.name]: value
            });
            resolve();
        });
    }

    return (
        <>
            <br /><br />
            <DropDown
                name="areatype"
                label="Area Type"
                isMulti={false}
                editable={false}
                isLoading={true}
                isRtl={false}
                isSearchable={true}
                isClearable={true}
                value={state}
                noOptionsMessage="No values available"
                suggestionURL='https://fintrafficapi.astrautm.com/api/airspace/geojsonForDorRArea?guid=ccd8659a-3a04-49f8-93fa-cee3d85711a7'
                onChange={handleChange}
            />

            <DropDown
                name="areaselectiontype"
                label="Area Selection Type"
                isMulti={true}
                editable={false}
                isLoading={true}
                isRtl={false}
                isSearchable={true}
                isClearable={true}
                value={state}
                noOptionsMessage="No values available"
                suggestionURL='https://fintrafficapi.astrautm.com/api/airspace/geojsonForDorRAreaByAirSpaceDataID?AirSpaceDataID='
                parentField="areatype"
                onChange={handleChange}
            />

        </>)
}
