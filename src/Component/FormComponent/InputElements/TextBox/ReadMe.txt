<TextBox
id="floatingInput"
name="floatingInput"
label="Email address"
value={state}
type="text"
style="sm"
pretext="pretext"
posttext="posttext"
tooltip="tooltip"
fieldInfo=""
helpblock="helpblock"
placeholder="placeholder"
icon="fa-envelope"
autoComplete="off"
editable={true}
onChange={handleChange}
/>

<CKEditor name="sd" value={state} onChange={handleChange} />

<AutoComplete
name="typeofaircraft"
label="TYPE OF AIRCRAFT"
value={state}
isRequired={true}
onChange={handleChange}
style={{
"colMd": "6",
"colLg": "6",
"offsetCol": ""
} || ""}
disable={false}
fieldInfo="Enter the type of aircraft to be used. If no such designator has been assigned, \n if formation flights comprised of more than one type, ZZZZ has to be used"
dropdownText="airport_ICAOCode"
dropdownValue="airport_ICAOCode" // must be always text
dependentField=""
dependentValue=""
webURL="configuration/masterdata/aircrafts"
/>

<Password
name="floatingInput"
value={state}
onChange={handleChange}
/>

<Hidden 
name="sdf" 
value={state} 
onChange={handleChange} />

<Range 
name="hhh" 
label="hhhhhh" 
max={5} 
step={0.5} 
disable="disabled" 
onChange={handleChange} 
value={state} />


<TextArea
rows={3}
cols={40}
name="asdf"
disabled={false}
maxlength={10}
placeholder="placeholder"
onChange={handleChange}
value={state}
/>