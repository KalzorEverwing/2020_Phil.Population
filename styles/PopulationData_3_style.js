var size = 0;
var placement = 'point';

var style_PopulationData_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Population");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 18286.000000 && value <= 458974.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1446.4014, 1546.4014],
                  scale: 0.026272098464506465,
                  anchor: [19, 19],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Yellow_Xmas_ball_glowing.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 458974.000000 && value <= 1133450.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1446.4014, 1546.4014],
                  scale: 0.026272098464506465,
                  anchor: [19, 19],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Blue_Xmas_ball_glowing.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1133450.000000 && value <= 2328096.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1446.4014, 1546.4014],
                  scale: 0.026272098464506465,
                  anchor: [19, 19],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Green_Xmas_ball_glowing.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2328096.000000 && value <= 3822937.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1446.4014, 1546.4014],
                  scale: 0.026272098464506465,
                  anchor: [19, 19],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Orange_Xmas_ball_glowing.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3822937.000000 && value <= 5309212.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1446.4014, 1546.4014],
                  scale: 0.026272098464506465,
                  anchor: [19, 19],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Red_Xmas_ball_glowingV2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
