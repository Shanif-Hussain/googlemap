import React from 'react';

export default function Hidden(props) {
    let { name, value, onChange } = props;
    return (
        <>
            <input type="hidden" name={name} value={value[name] || ""} onChange={onchange} />
        </>
    )
}