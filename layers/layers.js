ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([108.062767, 4.505754, 135.396778, 20.584584]);
var wms_layers = [];


        var lyr_ESRIBasemap_0 = new ol.layer.Tile({
            'title': 'ESRI Basemap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_red_outline_1 = new ol.format.GeoJSON();
var features_red_outline_1 = format_red_outline_1.readFeatures(json_red_outline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_red_outline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_outline_1.addFeatures(features_red_outline_1);
var lyr_red_outline_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_outline_1, 
                style: style_red_outline_1,
                popuplayertitle: "red_outline",
                interactive: true,
                title: '<img src="styles/legend/red_outline_1.png" /> red_outline'
            });
var format_christmasHat_2 = new ol.format.GeoJSON();
var features_christmasHat_2 = format_christmasHat_2.readFeatures(json_christmasHat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_christmasHat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_christmasHat_2.addFeatures(features_christmasHat_2);
var lyr_christmasHat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_christmasHat_2, 
                style: style_christmasHat_2,
                popuplayertitle: "christmas Hat",
                interactive: true,
    title: 'christmas Hat<br />\
    <img src="styles/legend/christmasHat_2_0.png" /> Black_outline<br />\
    <img src="styles/legend/christmasHat_2_1.png" /> red_outline<br />\
    <img src="styles/legend/christmasHat_2_2.png" /> White_hat<br />'
        });
var format_PopulationData_3 = new ol.format.GeoJSON();
var features_PopulationData_3 = format_PopulationData_3.readFeatures(json_PopulationData_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PopulationData_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationData_3.addFeatures(features_PopulationData_3);
var lyr_PopulationData_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationData_3, 
                style: style_PopulationData_3,
                popuplayertitle: "Population Data",
                interactive: true,
    title: 'Population Data<br />\
    <img src="styles/legend/PopulationData_3_0.png" /> 18286 - 458974<br />\
    <img src="styles/legend/PopulationData_3_1.png" /> 458974 - 1133450<br />\
    <img src="styles/legend/PopulationData_3_2.png" /> 1133450 - 2328096<br />\
    <img src="styles/legend/PopulationData_3_3.png" /> 2328096 - 3822937<br />\
    <img src="styles/legend/PopulationData_3_4.png" /> 3822937 - 5309212<br />'
        });

lyr_ESRIBasemap_0.setVisible(true);lyr_red_outline_1.setVisible(true);lyr_christmasHat_2.setVisible(true);lyr_PopulationData_3.setVisible(true);
var layersList = [lyr_ESRIBasemap_0,lyr_red_outline_1,lyr_christmasHat_2,lyr_PopulationData_3];
lyr_red_outline_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_christmasHat_2.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'layer': 'layer', 'path': 'path', });
lyr_PopulationData_3.set('fieldAliases', {'Provinces': 'Province: ', 'Region': 'Region: ', 'ADM0_EN': 'ADM0_EN', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Population': 'Population: ', 'field_7': 'field_7', 'Pop': 'Population:', });
lyr_red_outline_1.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_christmasHat_2.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PopulationData_3.set('fieldImages', {'Provinces': 'TextEdit', 'Region': 'TextEdit', 'ADM0_EN': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Population': 'TextEdit', 'field_7': 'TextEdit', 'Pop': 'TextEdit', });
lyr_red_outline_1.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_christmasHat_2.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PopulationData_3.set('fieldLabels', {'Provinces': 'inline label - always visible', 'Region': 'hidden field', 'ADM0_EN': 'hidden field', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Population': 'hidden field', 'field_7': 'hidden field', 'Pop': 'inline label - always visible', });
lyr_PopulationData_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});