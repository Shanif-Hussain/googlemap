import React from 'react';
import MaskInput from "../TextBox/MaskedTextBox";

export default function Time12(props) {
    let { name, label, onChange, value, disable } = props;

    return (
        <>
            <MaskInput
                className="form-control"
                mask="99:99"
                name={name}
                label={label}
                value={value}
                onChange={onChange}
                disabled={disable}
            />
        </>
    )
}