import React from 'react';

export default function Time12(props) {
    let { name, label, onChange, value } = props;

    return (
        <>
            <div class="form-group col-md-3">
                <label for={name} class="form-label">{label}</label>
                <input type="time" />
            </div>
        </>
    )
}