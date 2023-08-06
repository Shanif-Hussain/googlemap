export function Toolbar(MapBox, DCtrl, OLlayer) {
    var toolbar = document.createElement("div");
    toolbar.id = "Toolbar";
    toolbar.classList.add("col-md-12");
    var toolbarHTML =
        '<ul class="list-group">' +
        '<li class="list-group-item" data-id="polygon" id="polygon" ><img data-id="polygon" className="icon" src="http://fcb8f955-default-astraastr-2ec1-1384496724.eu-north-1.elb.amazonaws.com/src/images/polygon-blue.svg"></span></li>' +
        '<li class="list-group-item" data-id="circle" id="circle"><img data-id="circle" className="icon" src="http://fcb8f955-default-astraastr-2ec1-1384496724.eu-north-1.elb.amazonaws.com/src/images/circle-blue.svg"></span></li>' +
        '<li class="list-group-item" data-id="polyline" id="polyline"><img data-id="polyline" style="width: 30px;height: 30px;" className="icon" src="data:image/png;base64,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"></span></li>' +
        '<li class="list-group-item" data-id="rectangle" id="rectangle"><img data-id="rectangle" style="width: 30px;height: 30px;" className="icon" src="https://cdn-icons-png.flaticon.com/512/33/33848.png"></span></li>' +
        '<li class="list-group-item" data-id="marker" id="marker"><img data-id="marker" style="width: 30px;height: 30px;" className="icon" src="https://www.pikpng.com/pngl/m/509-5093828_map-marker-car-icon-free-icon-download-svg.png"></span></li>' +
        "</ul>";
    toolbar.innerHTML = toolbarHTML;
    document.body.appendChild(toolbar);
    toolbar.addEventListener('click', function (evt) {
        ToolbarItemClick(MapBox, DCtrl, evt);
    });
}

export function ToolbarItemClick(MapBox, DCtrl, evt) {
    DCtrl.draw.deleteAll().getAll();
    switch (evt.target.getAttribute("data-id")) {
        case "circle":
            DCtrl.draw.changeMode('draw_circle');
            break;
        case "polygon":
            DCtrl.draw.changeMode('draw_polygon');
            break;
        case "polyline":
            DCtrl.draw.changeMode('draw_line_string');
            break;
        case "rectangle":
            DCtrl.draw.changeMode('draw_rectangle');
            break;
        case "marker":
            DCtrl.draw.changeMode('draw_point');
            break;
    }
}

export function onDrawCreate({ features }) {
    console.log(features);
};

export function onDrawUpdate({ features }) {
    console.log(features);
};