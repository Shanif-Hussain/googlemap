<Time24 value={state} name="time" onChange={handleChange} />
<Time12 value={state} name="time" onChange={handleChange} />


<DatePicker
    name="sdf"
    dateFormat="DD-MM-YYYY"
    value={state}
    placeholder="placeholder"
    disablePastDt={false}
    disableFutureDt={false}
    disableWeekEnds={false}
    onChange={handleChange}
/>