import React, { useState } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import "react-datetime/css/react-datetime.css";
import "./custom.css";

export default function DatePicker(props) {
    let { name, label, dateFormat, placeholder, disable, onChange, value, disablePastDt, disableFutureDt, disableWeekEnds } = props;

    const [startDate, setStartDate] = useState(new Date());

    // disable past dates
    const disablePastDate = current => {
        const yesterday = moment().subtract(1, 'day');
        return current.isAfter(yesterday);
    };

    // disable future dates
    const disableFutureDate = current => {
        const today = moment();
        return current.isBefore(today)
    }

    // disable weekends
    const disableWeekends = current => {
        return current.day() !== 0 && current.day() !== 6;
    }

    const isValidDate = current => {
        if (disablePastDt == true) {
            return disablePastDate(current);
        }
        else if (disableFutureDt == true) {
            return disableFutureDate(current);
        }
        else if (disableWeekEnds == true) {
            return disableWeekends(current);
        }
        else {
            return true;
        }
    }

    return (
        <>
            <div class="form-group col-md-3">
                <label for={name} class="form-label">{label}</label>
                <Datetime
                    name={name}
                    dateFormat={dateFormat}
                    timeFormat={false}
                    isValidDate={isValidDate}
                    selected={value[name] || ""}
                    onChange={async (moment) => {
                        let evt = { target: { name: name, value: moment != "" && moment.format("DD-MM-YYYY") } };
                        await onChange(evt);
                    }}
                    placeholderText={placeholder}
                />
            </div>
        </>
    )
}
//  // disable the list of custom dates
//  const customDates = ['2020-04-08', '2020-04-04', '2020-04-02'];
//  const disableCustomDt = current => {
//      return !customDates.includes(current.format('YYYY-MM-DD'));
//  }