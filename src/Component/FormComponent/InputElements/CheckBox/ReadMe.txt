<CheckBox
label="sdf"
name="toppings"
fieldLabel="toppings"
fieldInfo=""
value={state}
onChange={handleChange}
/>

<CheckList
label="sdf sdf"
groupname="nonveg"
value={state}
fieldInfo=""
onChange={handleChange}
isInline={false}
masterData='[{"label":"Chicken","value":1.2},{"label":"Mutton","value":2.0},{"label":"Beef","value":3.0}]'
/>