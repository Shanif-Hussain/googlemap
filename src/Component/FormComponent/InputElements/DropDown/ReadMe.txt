
//master Data
<DropDown
name="areatype1"
label="Area Type"
isMulti={false}
editable={false}
isLoading={true}
isRtl={false}
isSearchable={true}
isClearable={true}
value={state}
defaultValue=""
noOptionsMessage="No values available"
masterData='[{"id":1,"name":"I (IFR flight)","parentId":null},{"id":2,"name":"V (VFR flight)","parentId":null},{"id":3,"name":"Y (IFR then VFR)","parentId":null},{"id":4,"name":"Z (VFR then IFR)","parentId":null}]'
onChange={handleChange}
/>

// API
<DropDown
name="areatype"
label="Area Type"
isMulti={false}
editable={false}
isLoading={true}
isRtl={false}
isSearchable={true}
isClearable={true}
value={state}
noOptionsMessage="No values available"
suggestionURL='https://fintrafficapi.astrautm.com/api/airspace/geojsonForDorRArea?guid=ccd8659a-3a04-49f8-93fa-cee3d85711a7'
onChange={handleChange}
/>

//Cascading dropdown
<DropDown
name="areaselectiontype"
label="Area Selection Type"
isMulti={true}
editable={false}
isLoading={true}
isRtl={false}
isSearchable={true}
isClearable={true}
value={state}
noOptionsMessage="No values available"
suggestionURL='https://fintrafficapi.astrautm.com/api/airspace/geojsonForDorRAreaByAirSpaceDataID?AirSpaceDataID='
parentField="areatype"
onChange={handleChange}
/>



// Json for optgroup 
const options = [
    {
      label: "Group 1",
      options: [
        { label: "Group 1, option 1", value: "value_1" },
        { label: "Group 1, option 2", value: "value_2" }
      ]
    },
    { label: "A root option", value: "value_3" },
    { label: "Another root option", value: "value_4" }
  ];

  
// const groupedOptions = [
//     {
//         label: "Group 1",
//         options: [
//             { label: "Group 1, option 1", value: "value_1" },
//             { label: "Group 1, option 2", value: "value_2" }
//         ]
//     }
// ];


// const deepSearch = (options, value, tempObj = {}) => {
//     if (options && value != null) {
//       options.find((node) => {
//         if (node.value === value) {
//           tempObj.found = node;
//           return node;
//         }
//         return deepSearch(node.options, value, tempObj);
//       });
//       if (tempObj.found) {
//         return tempObj.found;
//       }
//     }
//     return undefined;
//   };