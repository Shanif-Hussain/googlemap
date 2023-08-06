import React from 'react';

export default function Range(props) {
    let { name, label, max, step, disable, onChange, value } = props;

    return (
        <>
            <div class="form-group col-md-3">
                <label for={name} class="form-label">{label}</label>
                <input
                    type="range"
                    class="form-range"
                    id={name}
                    name={name}
                    min="0"
                    max={max}
                    step={step}
                    disable={disable}
                    value={value[name] || 0}
                    onChange={onChange}
                />
            </div>
        </>
    )
}