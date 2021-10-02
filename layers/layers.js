var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WaterCatchments_1 = new ol.format.GeoJSON();
var features_WaterCatchments_1 = format_WaterCatchments_1.readFeatures(json_WaterCatchments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterCatchments_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterCatchments_1.addFeatures(features_WaterCatchments_1);
var lyr_WaterCatchments_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterCatchments_1, 
                style: style_WaterCatchments_1,
                interactive: true,
                title: '<img src="styles/legend/WaterCatchments_1.png" /> Water Catchments'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_WaterCatchments_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WaterCatchments_1];
lyr_WaterCatchments_1.set('fieldAliases', {'Location': 'Location', 'N': 'N', 'E': 'E', 'Elevation': 'Elevation', });
lyr_WaterCatchments_1.set('fieldImages', {'Location': 'TextEdit', 'N': 'TextEdit', 'E': 'TextEdit', 'Elevation': 'TextEdit', });
lyr_WaterCatchments_1.set('fieldLabels', {'Location': 'inline label', 'N': 'no label', 'E': 'no label', 'Elevation': 'no label', });
lyr_WaterCatchments_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});