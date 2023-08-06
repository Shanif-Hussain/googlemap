import React from "react";
import Label from "../Label";

export default function Checkbox(props) {
    let { label, fieldInfo, groupname, value, onChange, masterData, isInline } = props;
    return (
        <div className="col-md-12 mt-3">
            {(masterData != undefined && JSON.parse(masterData).length > 0) &&
                <div className="form-group">
                    <Label label={label} fieldInfo={fieldInfo} />
                    <div className="checkbox-list">
                        {JSON.parse(masterData).map((item, index) => (
                            <div class={`form-check ${isInline && "form-check-inline"}`}>
                                <input className="form-check-input"
                                    type="checkbox"
                                    id={groupname + "_" + index}
                                    name={item.label}
                                    value={item.value}
                                    defaultChecked={value && value[item.label] == item.value}
                                    onChange={async (e) => {
                                        e.target.value = value.length === 0 ? item.value : value[item.label] == item.value ? null : item.value;
                                        await onChange(e)
                                    }}
                                />
                                <Label Htmlfor={groupname + "_" + index} label={item.label} className="form-check-label" />
                            </div>
                        ))}</div>
                </div>
            }
        </div>
    )
}