import React from 'react';
import Label from '../Label';

import { AcceptArabicCharactersOnly, AcceptEnglishCharactersOnly, IsNumberKey, ConvertToEnglishdigit } from './../Util';

export default function TextBox(props) {
    let { register, validationProps, errors, id, name, label, subLabel, value, type, style, pretext, posttext, editable, fieldInfo, placeholder, autoComplete, tooltip, helpblock, icon, onChange } = props;

    const inputStyle = style.FC === 'sm' ? 'form-control form-control-sm' : style.FC === 'lg' ? 'form-control form-control-lg' : 'form-control';

    const onFieldChanged = (evt) => {
        return new Promise((resolve) => {
            if (evt.target.name === "floatingInput") {
                alert("Hello World!")
            }
            resolve();
        });
    }

    const handleKeyPress = (evt, type) => {
        switch (type) {
            case 'number':
                IsNumberKey(evt);
                break;

            default:
                break;
        }
    }

    const handleBlur = (evt, type) => {
        switch (type) {
            case 'email':
                if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(evt.target.value)) { alert("sdf") };
                break;

            default:
                break;
        }
    }

    return (
        <div className={
            (style.colSm ? ` col-sm-${style.colSm}` : "") +
            (style.colMd ? ` col-md-${style.colMd}` : "") +
            (style.colLg ? ` col-lg-${style.colLg}` : "") +
            (style.colXl ? ` col-xl-${style.colXl}` : "")
        } >
            <div className="form-group">
                <Label Htmlfor={name} label={label} fieldInfo={fieldInfo} />
                {subLabel && <Label Htmlfor={name} label={subLabel} />}
                <div className="input-group">
                    {(pretext !== undefined && pretext !== "") && <span className="input-group-text">{pretext}</span>}
                    {(icon !== undefined && icon !== "") && <span className="input-group-text"><i className={`fa ${icon}`}></i></span>}
                    <input
                        {...register(name)}
                        id={id}
                        name={name}
                        type={type == "number" ? "text" : type}
                        className={inputStyle}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        //value={value[name] || ""}
                        disabled={!editable}
                    // onKeyPress={(e) => handleKeyPress(e, type)}
                    // onBlur={(e) => handleBlur(e, type)}
                    // onPaste={(e) => e.preventDefault()}
                    // onChange={async (e) => {
                    //     await onChange(e);
                    //     //await onFieldChanged(e);
                    // }}//{(e) => { onChange(e).then(onFieldChanged(e)) }}
                    />
                    {(posttext !== undefined && posttext !== "") && <span className="input-group-text">{posttext}</span>}
                    {(tooltip !== undefined && tooltip !== "") && <div className="form-tooltip"><span className="tooltip-title">{tooltip}</span></div>}
                </div>
                {(helpblock !== undefined && helpblock !== "") && <span className="help-block">{helpblock}</span>}
                {errors[name] && errors[name].message}
                {/* <div className="valid-feedback||invalid-feedback">Looks good!</div> */}
            </div>
        </ div>
    )
}


//type = text, number, email, password, arabic text, perisan number,
