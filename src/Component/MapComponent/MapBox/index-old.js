import React, { useState, useEffect, useRef } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import DrawControl from "react-mapbox-gl-draw";

import { CircleMode, DragCircleMode, DirectMode, SimpleSelectMode } from 'mapbox-gl-draw-circle';

import DrawRectangle from "mapbox-gl-draw-rectangle-restrict-area";

import 'mapbox-gl/dist/mapbox-gl.css';
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "./css/styles.css";

import { Toolbar, onDrawCreate, onDrawUpdate } from "./Utils";

export default function ReactMapBox(props) {
    const Map = ReactMapboxGl({
        accessToken: ""
    });                                                             // Default Setting MapBox Access Token
    const MapBoxStyle = "mapbox://styles/mapbox/streets-v9";        // Default Setting MapBox Style
    const containerStyle = { width: '100vw', height: '100vh' };     // Default Setting MapBox Container Style
    const center = { lat: -26.766137, lng: 134.5458682 };           // Default Center position for Map to point on initial Load
    const { showDefaultToolBar } = props;

    const mapBox = useRef(null);                                    // Hold MapBox Reference
    const drawControl = useRef(null);                               // Hold DrawControl Reference

    return (
        <Map
            ref={(map) => { mapBox.current = map; }}
            style={MapBoxStyle}
            containerStyle={containerStyle}
            center={Object.values(center).reverse()}
            zoom={[10]}
            options={{
                streetViewControl: false,
                mapTypeControl: false
            }}
        //onStyleLoad={(map) => {  }}
        >
            <DrawControl
                ref={(drawControl) => {
                    drawControl.current = drawControl;
                    Toolbar(mapBox.current, drawControl)
                }}
                displayControlsDefault={false}
                controls={Object.assign({
                    line_string: true,
                    point: true,
                    polygon: true
                })}
                modes={{
                    ...MapboxDraw.modes,
                    draw_rectangle: DrawRectangle,
                    draw_circle: CircleMode,
                    drag_circle: DragCircleMode,
                    direct_select: DirectMode,
                    simple_select: SimpleSelectMode
                }}
                userProperties={true}
                onDrawCreate={onDrawCreate}
                onDrawUpdate={onDrawUpdate}
            />
        </Map >
    )
}
