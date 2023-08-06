import React, { useEffect, useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { UncontrolledTooltip } from 'reactstrap';

import './../../../../css/Password.css';


export default function Password(props) {
    let { name, value, onChange } = props;
    const [tooltipOpen, settooltipOpen] = useState(false);

    const toggle = () => {
        settooltipOpen(!tooltipOpen);
    }

    return (
        <>
            <div class="form-group col-md-3">
                <label for={name}>Password:</label>
                <input type="password" id={name} name={name} value={value[name] || ""} onChange={onChange} autoComplete="off" />
                <PasswordStrengthBar password={value[name] || ""} />
                <UncontrolledTooltip placement="bottom" target={name} trigger="focus">
                    <div id="pr-box" class="light">
                        <i></i>
                        <div id="pr-box-inner">
                            <p>The minimum password length is 8 characters and must contain at least 1 lowercase letter, 1 capital letter 1 number and 1 special character.</p>
                            <ul>
                                <li class="pr-numcharacters"><span className={(value[name] && value[name].trim().length >= 8) && "pr-ok"}></span># of characters</li>
                                <li class="pr-useLowercase"><span className={(value[name] && value[name].trim().length >= 1 && /[a-z]/.test(value[name])) && "pr-ok"}></span>Lowercase letter</li>
                                <li class="pr-useUppercase"><span className={(value[name] && value[name].trim().length >= 1 && /[A-Z]/.test(value[name])) && "pr-ok"}></span>Capital letter</li>
                                <li class="pr-useNumbers"><span className={(value[name] && value[name].trim().length >= 1 && /[0-9]/.test(value[name])) && "pr-ok"}></span>Number</li>
                                <li class="pr-useSpecial"><span className={(value[name] && value[name].trim().length >= 1 && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value[name])) && "pr-ok"}></span>Special character</li>
                            </ul>
                        </div>
                    </div>
                </UncontrolledTooltip>
            </div >
            <div class="form-group col-md-3">
                <label for={name}>Confirm Password:</label>
                <input type="password" id="confirmpaswsord" name="confirmpassword" value={value["confirmpassword"] || ""} onChange={onChange} autoComplete="off" />
                {(value["confirmpassword"] && (value[name] != value["confirmpassword"]) && value["confirmpassword"].trim().length > 0) && <div className="invalid-message">Password and Confirm Password does not match.</div>}
            </div>
        </>
    )
}