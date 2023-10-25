var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ElectricalWholesalersGB_1 = new ol.format.GeoJSON();
var features_ElectricalWholesalersGB_1 = format_ElectricalWholesalersGB_1.readFeatures(json_ElectricalWholesalersGB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricalWholesalersGB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricalWholesalersGB_1.addFeatures(features_ElectricalWholesalersGB_1);
var lyr_ElectricalWholesalersGB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectricalWholesalersGB_1, 
                style: style_ElectricalWholesalersGB_1,
                interactive: true,
                title: '<img src="styles/legend/ElectricalWholesalersGB_1.png" /> Electrical Wholesalers GB'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ElectricalWholesalersGB_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ElectricalWholesalersGB_1];
lyr_ElectricalWholesalersGB_1.set('fieldAliases', {'uniqueid': 'uniqueid', 'postcode': 'postcode', 'Local Name': 'Local Name', 'Competitor': 'Competitor', });
lyr_ElectricalWholesalersGB_1.set('fieldImages', {'uniqueid': 'TextEdit', 'postcode': 'TextEdit', 'Local Name': 'TextEdit', 'Competitor': 'TextEdit', });
lyr_ElectricalWholesalersGB_1.set('fieldLabels', {'uniqueid': 'no label', 'postcode': 'no label', 'Local Name': 'no label', 'Competitor': 'no label', });
lyr_ElectricalWholesalersGB_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});