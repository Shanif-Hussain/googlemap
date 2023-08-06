import React from 'react';
import InputMask from "react-input-mask";

export default function MaskInput(props) {
    let { name, label, onChange, value, disable, mask } = props;

    return (
        <>
            <div class="form-group">
                <label for={name} class="form-label">{label}</label>
                <InputMask
                    className="form-control"
                    mask={mask}
                    name={name}
                    label={label}
                    value={value[name] || ""}
                    onChange={onChange}
                    disabled={disable}
                />
            </div>
        </>
    )
}