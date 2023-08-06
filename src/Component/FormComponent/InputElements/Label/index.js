import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'reactstrap';

export default function Label(props) {
    let { Htmlfor, label, fieldInfo, className } = props;
    const [tooltipOpen, settooltipOpen] = useState(false);

    const toggle = () => {
        settooltipOpen(!tooltipOpen);
    }

    return (
        <>
            <label htmlFor={Htmlfor} className={(className == undefined || className == '') ? "form-label" : className}>{label}
                {(fieldInfo !== undefined && fieldInfo !== "") &&
                    <>&nbsp;
                        <span id={`${label.replace(/[0-9 ]/gm, '')}-Tooltip`}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                        </span>
                        <Tooltip placement="right" isOpen={tooltipOpen} target={`${label.replace(/[0-9 ]/gm, '')}-Tooltip`} toggle={toggle}>
                            {fieldInfo}
                        </Tooltip></>
                }
            </label>
        </>
    )
}

