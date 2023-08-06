import React from 'react';

export default function TextArea(props) {
    let { name, value, placeholder, maxlength, disabled, onChange, cols, rows } = props;
    return (
        <>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <textarea
                    className="form-control"
                    rows={rows}
                    cols={cols}
                    name={name}
                    disabled={disabled}
                    maxlength={maxlength}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value[name] || ""}
                />
            </div>
        </>
    )
}