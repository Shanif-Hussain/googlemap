export function Toolbar(GMap, DMngr, OLlayer) {
    var toolbar = document.createElement("div");
    toolbar.id = "Toolbar";
    var toolbarHTML =
        '<ul class="list-group">' +
        '<li class="list-group-item" data-id="polygon" id="polygon" ><img data-id="polygon" className="icon" src="http://fcb8f955-default-astraastr-2ec1-1384496724.eu-north-1.elb.amazonaws.com/src/images/polygon-blue.svg"></span></li>' +
        '<li class="list-group-item" data-id="circle" id="circle"><img data-id="circle" className="icon" src="http://fcb8f955-default-astraastr-2ec1-1384496724.eu-north-1.elb.amazonaws.com/src/images/circle-blue.svg"></span></li>' +
        '<li class="list-group-item" data-id="polyline" id="polyline"><img data-id="polyline" style="width: 30px;height: 30px;" className="icon" src="data:image/png;base64,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"></span></li>' +
        '<li class="list-group-item" data-id="rectangle" id="rectangle"><img data-id="rectangle" style="width: 30px;height: 30px;" className="icon" src="https://cdn-icons-png.flaticon.com/512/33/33848.png"></span></li>' +
        '<li class="list-group-item" data-id="marker" id="marker"><img data-id="marker" style="width: 30px;height: 30px;" className="icon" src="https://www.pikpng.com/pngl/m/509-5093828_map-marker-car-icon-free-icon-download-svg.png"></span></li>' +
        "</ul>";
    toolbar.innerHTML = toolbarHTML;
    GMap.controls[window.google.maps.ControlPosition.TOP_CENTER].push(toolbar);
    toolbar.addEventListener('click', function (evt) {
        if (OLlayer.current != null) {
            OLlayer.current.overlay.setMap(null);
            OLlayer.current = null;
        }
        ToolbarItemClick(GMap, DMngr, evt);
    });
}

export function ToolbarItemClick(GMap, DMngr, evt) {
    switch (evt.target.getAttribute("data-id")) {
        case "circle":
            DMngr.setDrawingMode(window.google.maps.drawing.OverlayType.CIRCLE);
            break;
        case "polygon":
            DMngr.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON);
            break;
        case "polyline":
            DMngr.setDrawingMode(window.google.maps.drawing.OverlayType.POLYLINE);
            break;
        case "rectangle":
            DMngr.setDrawingMode(window.google.maps.drawing.OverlayType.RECTANGLE);
            break;
        case "marker":
            DMngr.setDrawingMode(window.google.maps.drawing.OverlayType.MARKER);
            break;
    }
}

//************************************* Load GeoJSON to the Google Map  ***************************************************
export function loadGeoJson(map, Url) {
    map.data.loadGeoJson(Url);
}
//loadGeoJson(map, "https://storage.googleapis.com/mapsdevsite/json/google.json");

//************************************* Overlay ***************************************************
export function onOverlayComplete(GMap, DMngr, OLlayer, evt) {
    if (OLlayer.current != null) {
        OLlayer.current = null;
    }

    evt.overlay.setMap(null);
    DMngr.setDrawingMode(null);

    switch (evt.type) {
        case "circle":
            bindCircleEvents(evt.overlay);
            // var c = getCircleCoordsnRadius(evt.overlay)
            // createCircleWithEvent(GMap, c[1].radius, c[0])
            break;
        case "polygon":
            bindPolygonEvents(evt.overlay);
            //createPolygonWithEvent(GMap, getShapeCoords(evt.overlay))
            break;
        case "polyline":
            bindPolylineEvents(evt.overlay);
            //createPolylineWithEvent(GMap, getShapeCoords(evt.overlay), circleSymbol(), 'polylinedotted', 2000)
            break;
        case "rectangle":
            bindRectangleEvents(evt.overlay);
            //createRectangleWithEvent(GMap, getRectangleCoords(evt.overlay));
            break;
        case "marker":
            bindMarkerEvents(evt.overlay);
            //createMarkerWithEvent(GMap, getMarkerCoords(evt.overlay))
            break;
    }

    OLlayer.current = evt;
    evt.overlay.setMap(GMap);
}

//************************************* Circle ***************************************************
export function circleOptions() {
    return {
        fillColor: `#FF0000`,
        strokeColor: "#FF0000",
        fillOpacity: 0.35,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        clickable: false,
        editable: true,
        draggable: true,
        zIndex: 1,
    }
};

export function getCircleCoordsnRadius(circle) {
    return [
        { 'lat': circle.center.lat(), 'lng': circle.center.lng() },
        { 'radius': circle.getRadius() }
    ];
}

export function bindCircleEvents(circle) {
    circle.addListener('center_changed', function () {
        let data = getCircleCoordsnRadius(this);
        console.log(data);
    });

    circle.addListener('radius_changed', function () {
        let data = getCircleCoordsnRadius(this);
        console.log(data);
    });

    let data = getCircleCoordsnRadius(circle);
    console.log(data);
}

export function createCircle(radius, coords) {
    return new window.google.maps.Circle({
        options: circleOptions(),
        center: coords,
        radius: radius
    });
}

export function createCircleWithEvent(GMap, radius, coords) {
    const CircleOverLay = createCircle(radius, coords);
    bindCircleEvents(CircleOverLay);
    CircleOverLay.setMap(GMap);
}

//************************************* Polygon ***************************************************
export function polygonOptions() {
    return {
        fillColor: "#00FF00",
        fillOpacity: 0.35,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "#00FF00",
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        zIndex: 1
    };
}

export function getShapeCoords(shape) {
    return getShapeCoords4mPath(shape.getPath());
}

export function getShapeCoords4mPath(path) {
    return path.getArray().map((coord) => { return { lat: coord.lat(), lng: coord.lng() }; })
}

export function bindPolygonEvents(polygon) {
    polygon.addListener('dragend', function (event) {
        let data = getShapeCoords(polygon);
        console.log(data);
    });

    polygon.getPath().addListener('insert_at', function (vertex) {
        let data = getShapeCoords4mPath(this);
        console.log(data);
    });

    polygon.getPath().addListener('remove_at', function (vertex) {
        let data = getShapeCoords4mPath(this);
        console.log(data);
    });

    let data = getShapeCoords(polygon);
    console.log(data);
}

export function createPolygon(polygonCoords) {
    return new window.google.maps.Polygon({
        paths: polygonCoords,
        options: polygonOptions()
    });
}

export function createPolygonWithEvent(GMap, polygonCoords) {
    const PolyOverLay = createPolygon(polygonCoords);
    bindPolygonEvents(PolyOverLay);
    PolyOverLay.setMap(GMap);
}

//************************************* Polyline ***************************************************
export function polylineOptions() {
    return {
        fillColor: "#00FF00",
        fillOpacity: 0.35,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "#00FF00",
        clickable: false,
        editable: true,
        draggable: false,
        geodesic: false,
        visible: true,
        zIndex: 1
    };
}

export function polygon_Options() {
    return {
        fillColor: "#00FF00",
        fillOpacity: 0,
        strokeOpacity: 0,
        strokeWeight: 0,
        strokeColor: "#00FF00",
        clickable: false,
        editable: true,
        draggable: false,
        geodesic: false,
        visible: true,
        zIndex: 1
    }
};

export function circle_Options() {
    return {
        fillColor: "#00FF00",
        fillOpacity: 0,
        strokeOpacity: 0,
        strokeWeight: 0,
        strokeColor: "#00FF00",
        clickable: false,
        editable: true,
        draggable: false,
        geodesic: false,
        visible: true,
        zIndex: 1
    }
};

export function circleSymbol() {
    return {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillOpacity: 1,
        scale: 2
    }
};

export function lineSymbol() {
    return {
        path: 'M 0,-1 0,1',
        strokeOpacity: 1,
        scale: 4,
    }
};

export function bindPolylineEvents(polyline) {
    polyline.getPath().addListener('insert_at', function (vertex) {
        let data = getShapeCoords4mPath(this);
        console.log(data);
    });

    polyline.getPath().addListener('remove_at', function (vertex) {
        let data = getShapeCoords4mPath(this);
        console.log(data);
    });

    let data = getShapeCoords(polyline);
    console.log(data);
}

export function GMMVCArray(path) {
    var aCoordinates = new window.google.maps.MVCArray([]);
    for (var i = 0; i < path.length; i++) {
        aCoordinates.push(new window.google.maps.LatLng(path[i]["lat"], path[i]["lng"]));
    }
    return aCoordinates;
}

// export function getPolylineCoords_GMMVCArray(polyline){
//   var aCoordinates = [];
//   polyline.forEach(function (element, index) {
//     aCoordinates.push({ lat: element.lat(), lng: element.lng() });
//   });
//   return aCoordinates;
// }

export function createPolygonDotted(PolylineCoords, symbol) {
    return new window.google.maps.Polyline({
        options: polygon_Options(),
        path: GMMVCArray(PolylineCoords),
        icons: [{
            icon: symbol,
            offset: '0',
            repeat: '20px'
        }],
    });
}

export function createCircleDotted(PolylineCoords, symbol, radius) {
    return new window.google.maps.Polyline({
        options: circle_Options(),
        path: drawCircle(PolylineCoords[0], radius / 1609.344, 1),
        icons: [{
            icon: symbol,
            offset: '0',
            repeat: '10px'
        }],
    });
}

export function createDottedPolyLine(PolylineCoords, symbol) {
    return new window.google.maps.Polyline({
        options: polylineOptions(),
        path: GMMVCArray(PolylineCoords),
        icons: [
            {
                icon: symbol,
                offset: "0",
                repeat: "20px",
            },
        ],
    });
}

export function createPolyLine(PolylineCoords) {
    return new window.google.maps.Polyline({
        options: polylineOptions(),
        path: GMMVCArray(PolylineCoords)
    });
}

export function createPolylineWithEvent(GMap, PolylineCoords, symbol, type, radius) {
    if (type === 'polygondotted') {
        const polyLineOverLay = createPolygonDotted(PolylineCoords, symbol)
        bindPolylineEvents(polyLineOverLay);
        polyLineOverLay.setMap(GMap);
    }
    else if (type === 'circledotted') {
        const polyLineOverLay = createCircleDotted(PolylineCoords, symbol, radius);
        bindPolylineEvents(polyLineOverLay);
        polyLineOverLay.setMap(GMap);
    }
    else if (type === 'polylinedotted') {
        const polyLineOverLay = createDottedPolyLine(PolylineCoords, symbol);
        bindPolylineEvents(polyLineOverLay);
        polyLineOverLay.setMap(GMap);
    }
    else {
        const polyLineOverLay = createPolyLine(PolylineCoords);
        bindPolylineEvents(polyLineOverLay);
        polyLineOverLay.setMap(GMap);
    }

    // if (type === 'polygondotted') {
    //     const polyLineOverLay = new window.google.maps.Polyline({
    //         options: polygon_Options(),
    //         path: GMMVCArray(PolylineCoords),
    //         icons: [{
    //             icon: symbol,
    //             offset: '0',
    //             repeat: '20px'
    //         }],
    //     });
    //     //bindPolylineEvents(polyLineOverLay);
    //     polyLineOverLay.setMap(GMap);
    // }
    // else if (type === 'circledotted') {
    //     const polyLineOverLay = new window.google.maps.Polyline({
    //         options: circle_Options(),
    //         path: drawCircle(PolylineCoords[0], radius / 1609.344, 1),
    //         icons: [{
    //             icon: symbol,
    //             offset: '0',
    //             repeat: '10px'
    //         }],
    //     });
    //     bindPolylineEvents(polyLineOverLay);
    //     polyLineOverLay.setMap(GMap);
    // }
    // else if (type === 'polylinedotted' && symbol !== undefined) {
    //     const polyLineOverLay = new window.google.maps.Polyline({
    //         options: polylineOptions(),
    //         path: GMMVCArray(PolylineCoords),
    //         icons: [
    //             {
    //                 icon: symbol,
    //                 offset: "0",
    //                 repeat: "20px",
    //             },
    //         ],
    //     });
    //     bindPolylineEvents(polyLineOverLay);
    //     polyLineOverLay.setMap(GMap);
    // }
    // else {
    //     const polyLineOverLay = new window.google.maps.Polyline({
    //         options: polylineOptions,
    //         path: GMMVCArray(PolylineCoords)
    //     });
    //     bindPolylineEvents(polyLineOverLay);
    //     polyLineOverLay.setMap(GMap);
    // }
}

export function drawCircle(point, radius, dir) {
    let d2r = Math.PI / 180; // degrees to radians
    let r2d = 180 / Math.PI; // radians to degrees
    let earthsradius = 3963; // 3963 is the radius of the earth in miles

    let points = 32;

    // find the raidus in lat/lon
    let rlat = (radius / earthsradius) * r2d;
    let rlng = rlat / Math.cos(point["lat"] * d2r);

    let start, end = 0
    let extp = new Array();
    if (dir === 1) {
        start = 0;
        end = points + 1; // one extra here makes sure we connect the path
    } else {
        start = points + 1;
        end = 0;
    }
    for (let i = start; (dir === 1 ? i < end : i > end); i = i + dir) {
        var theta = Math.PI * (i / (points / 2));
        let ey = point["lng"] + (rlng * Math.cos(theta)); // center a + radius x * cos(theta)
        let ex = point["lat"] + (rlat * Math.sin(theta)); // center b + radius y * sin(theta)
        extp.push(new window.google.maps.LatLng(ex, ey));
    }
    return extp;
}

//************************************* Reactangle ***************************************************
export function rectangleOptions() {
    return {
        draggable: true,
        editable: true,
        strokeColor: '#00FF00',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#00FF00',
        fillOpacity: 0.35
    };
}

export function getRectangleCoords(rectangle) {
    return [
        { center: { lat: rectangle.getBounds().getCenter().lat(), lng: rectangle.getBounds().getCenter().lng() } },
        {
            bounds: {
                north: rectangle.getBounds().getNorthEast().lat(),
                south: rectangle.getBounds().getSouthWest().lat(),
                east: rectangle.getBounds().getNorthEast().lng(),
                west: rectangle.getBounds().getSouthWest().lng(),
            }
        }
    ]

}

export function bindRectangleEvents(rectangle) {
    rectangle.addListener('bounds_changed', function (event) {
        let data = getRectangleCoords(this);
        console.log(data);
    });

    let data = getRectangleCoords(rectangle);
    console.log(data);
}

export function createRectangle(rectangleBounds) {
    return new window.google.maps.Rectangle({
        bounds: rectangleBounds[1].bounds,
        options: rectangleOptions()
    });
}

export function createRectangleWithEvent(GMap, rectangleBounds) {
    const rectangleOverLay = createRectangle(rectangleBounds);
    bindRectangleEvents(rectangleOverLay);
    rectangleOverLay.setMap(GMap);
}

//************************************* Marker ***************************************************
export function markerOptions() {
    return {
        icon: {
            url: 'https://img.icons8.com/office/480/000000/marker.png',
            scaledSize: new window.window.google.maps.Size(80, 80),
            origin: new window.window.google.maps.Point(0, 0),
            anchor: new window.window.google.maps.Point(32, 65),
            labelOrigin: new window.window.google.maps.Point(40, 33),
        },
        label: {
            text: "GO",
            color: "#eb3a44",
            fontSize: "16px",
            fontWeight: "bold"
        },
        draggable: true,
        animation: 1
    };
}

export function getMarkerCoords(marker) {
    return {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
    }
}

export function bindMarkerEvents(marker) {
    marker.addListener('dragend', function (event) {
        let data = getMarkerCoords(this);
        console.log(data);
    });

    let data = getMarkerCoords(marker);
    console.log(data);
}

export function createMarker(latlng) {
    return new window.google.maps.Marker({
        position: { lat: latlng.lat, lng: latlng.lng },
        options: markerOptions()
    });
}

export function createMarkerWithEvent(GMap, latlng) {
    const markerOverLay = createMarker(latlng);
    bindMarkerEvents(markerOverLay);
    markerOverLay.setMap(GMap);
}

//************************************* Info Window ***************************************************
export function createInfoWindow(iw_lat, iw_lng, openat) {
    const infoWindowOverLay = new window.google.maps.InfoWindow({
        position: { lat: iw_lat, lng: iw_lng },
        content: 'markerOptions'
    });
    infoWindowOverLay.open(openat);
}

