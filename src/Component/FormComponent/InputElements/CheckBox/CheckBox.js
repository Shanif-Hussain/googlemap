import React from "react";
import Label from "../Label";

export default function Checkbox(props) {
    let { name, label, fieldInfo, fieldLabel, value, onChange } = props;
    return (
        <div className="form-group">
            <Label Htmlfor={name} label={label} fieldInfo={fieldInfo} />
            <div className="checkbox-list">
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        name={name}
                        id={name}
                        value={value && value[name]}
                        defaultChecked={value && value[name] === "true" ? true : false}
                        onChange={async (e) => { e.target.value = e.target.checked; await onChange(e) }}
                    />
                    <Label Htmlfor={name} label={fieldLabel} className="form-check-label" />
                </div>
            </div>
        </div>
    )
}