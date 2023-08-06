import React from "react";
import Label from "../Label";

export default function RadioList(props) {
    let { label, fieldInfo, groupname, value, onChange, masterData, isInline } = props;
    return (
        <div className="col-md-12 mt-3">
            {(masterData != undefined && JSON.parse(masterData).length > 0) &&
                <div className="form-group">
                    <Label label={label} fieldInfo={fieldInfo} />
                    <div className="Radio-list">
                        {JSON.parse(masterData).map((item, index) => (
                            <div class={`form-check ${isInline && "form-check-inline"}`}>
                                <input className="form-check-input"
                                    type="radio"
                                    id={groupname + "_" + index}
                                    name={groupname}
                                    value={item.value}
                                    defaultChecked={value && value[groupname] == item.value}
                                    onChange={async (e) => { await onChange(e) }}
                                />
                                <Label Htmlfor={groupname + "_" + index} label={item.label} className="form-check-label" />
                            </div>
                        ))}</div>
                </div>
            }
        </div>
    )
}