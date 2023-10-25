var size = 0;
var placement = 'point';

var style_ElectricalWholesalersGB_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "32.5px \'Calibri Light\', sans-serif";
    var labelFill = "#fff5f5";
    var bufferColor = "#090909";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Local Name") !== null && resolution > 0 && resolution < 79) {
        labelText = String(feature.get("Local Name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 14.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,0.5568627450980392)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
