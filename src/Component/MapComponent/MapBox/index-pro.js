import React, { useState, useEffect, useRef } from 'react';

import mapboxgl from "mapbox-gl";
import MapboxDrawPro from '@map.ir/mapbox-gl-draw-geospatial-tools';

import 'mapbox-gl/dist/mapbox-gl.css';
// import "./css/styles.css";

import { Toolbar, onDrawCreate, onDrawUpdate } from "./Utils";

export default function ReactMapBox(props) {
    mapboxgl.accessToken = "";      // Default Setting MapBox Access Token
    const MapBoxStyle = "mapbox://styles/mapbox/streets-v9";        // Default Setting MapBox Style
    const containerStyle = { width: '100vw', height: '100vh' };     // Default Setting MapBox Container Style
    const center = { lat: -26.766137, lng: 134.5458682 };           // Default Center position for Map to point on initial Load
    const { showDefaultToolBar } = props;

    const mapContainer = useRef(null);                            // Hold MapBox Container Reference
    let mapBox = useRef(null);                                    // Hold MapBox Reference

    const MapBox_GL = (mapContainer) => new mapboxgl.Map({
        container: mapContainer,
        style: MapBoxStyle,
        center: Object.values(center).reverse(),
        zoom: 10,
        options: {
            streetViewControl: false,
            mapTypeControl: false
        }
    });

    const draw = new MapboxDrawPro({                              // Hold DrawControl Reference
        userProperties: true,
        // aditional-tools
        union: true,
        copy: true,
        buffer: true,
        bufferSize: 0.5,
        bufferUnit: 'kilometers',
        bufferSteps: 64,
        length: true,
        lengthUnit: 'kilometers',
        showLength: true,
        area: true,
        showArea: true,

        // snap-mode
        snap: true,
        snapOptions: {
            snapPx: 15,
            snapToMidPoints: true,
        },
        guides: false,
    });

    useEffect(() => {
        mapBox.current = MapBox_GL(mapContainer.current);
        window.draw = draw;

        mapBox.current.once('load', () => {
            mapBox.current.resize();
            mapBox.current.addControl(draw, 'top-right');
            mapBox.current.on('draw.create', function (e) {
                console.log(e);
            });
            mapBox.current.on('draw.update', function (e) {
                console.log(e);
            });
        });
    }, []);



    return (
        <div style={containerStyle} ref={(el) => (mapContainer.current = el)} />
    )
}
