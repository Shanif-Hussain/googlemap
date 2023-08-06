import React from "react";
import ReactDOM from "react-dom";
// import ReactGoogleMap from './Component/MapComponent/GoogleMap';
import ReactMapBox from "./Component/MapComponent/MapBox/index-pro";
import Index from "./Component/FormComponent/InputElements";
import DynamicForm from "./Component/FormComponent/DynamicForm";

import myData from "./form.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";

import calculator from "./Component/iife.js";

ReactDOM.render(
  <React.StrictMode>
    {/* <ReactGoogleMap showDefaultToolBar={true} /> */}
    {/* <ReactMapBox showDefaultToolBar={true} /> */}

    <div className="container">
      <>{calculator.add(10, 50)}</>
      <DynamicForm template={myData} />
      {/* <React.Fragment><Index /></React.Fragment>*/}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
