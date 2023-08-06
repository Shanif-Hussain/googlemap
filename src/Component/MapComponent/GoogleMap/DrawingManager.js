import React, { useState, useRef } from "react";
import { DrawingManager } from "@react-google-maps/api";

import { Toolbar, onOverlayComplete, circleOptions, polygonOptions, polylineOptions, rectangleOptions, markerOptions } from "./Utils";
import './css/toolbar.css';

const DrawingManagerComponent = (props) => {
  const { Map, showDefaultToolBar } = props;
  const [DMngr, setDMngr] = useState(null);                  // Hold Drawing Manager Reference
  const OLlayer = useRef(null);                              // Hold OverLay Reference

  //On Drawing Manager Load
  const onLoad = (drawingManager) => {
    setDMngr(drawingManager);
    Toolbar(Map, drawingManager, OLlayer);
  };

  return (
    <DrawingManager
      options={{
        drawingControl: (showDefaultToolBar == true) ? false : true,//true | false
        drawingControlOptions: {
          position: window.google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ['polygon', 'circle', 'polyline'],//, 'rectangle', 'marker'
        },
        circleOptions: circleOptions(),
        polygonOptions: polygonOptions(),
        polylineOptions: polylineOptions(),
        rectangleOptions: rectangleOptions(),
        markerOptions: markerOptions(),
      }}
      onLoad={onLoad}
      onOverlayComplete={(evt) => onOverlayComplete(Map, DMngr, OLlayer, evt)}
    />
  );
};

export default DrawingManagerComponent;
