ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:6708").setExtent([429693.160027, 4681295.524318, 443844.793003, 4691320.067518]);
var wms_layers = [];

var lyr_OpenStreetMap = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a> &nbsp&nbsp ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        
var lyr_GoogleStrade = new ol.layer.Tile({
            'title': 'Google Strade',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a> &nbsp&nbsp ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
        
var lyr_GoogleSatellite = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a> &nbsp&nbsp ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
        
var lyr_GoogleIbrido = new ol.layer.Tile({
            'title': 'Google Ibrido',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
        

var lyr_Acque = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Acque',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "Acque",
    popuplayertitle: 'Acque',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_Acque,
});
function load_Acque_data() {
    var format_Acque = new ol.format.GeoJSON();
    var features_Acque = format_Acque.readFeatures(json_Acque, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_Acque = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Acque.png"/><b>Acque</b>'
    });
    lyr_Acque.setSource(jsonSource_Acque);
    lyr_Acque.set(
    "title", '<img src="styles/legend/Acque.png"/>Acque'
    );
var featureCounter_Acque = 1;
jsonSource_Acque.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Acque++);
    feature.set("layerObject", lyr_Acque);
});        
jsonSource_Acque.addFeatures(features_Acque);
}

var lyr_Strade = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Strade',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "Strade",
    popuplayertitle: 'Strade',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_Strade,
});
function load_Strade_data() {
    var format_Strade = new ol.format.GeoJSON();
    var features_Strade = format_Strade.readFeatures(json_Strade, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_Strade = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Strade.png"/><b>Strade</b>'
    });
    lyr_Strade.setSource(jsonSource_Strade);
    lyr_Strade.set(
    "title", '<img src="styles/legend/Strade.png"/>Strade'
    );
var featureCounter_Strade = 1;
jsonSource_Strade.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Strade++);
    feature.set("layerObject", lyr_Strade);
});        
jsonSource_Strade.addFeatures(features_Strade);
}

var lyr_Particelle = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Particelle',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "Particelle",
    popuplayertitle: 'Particelle',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_Particelle,
});
function load_Particelle_data() {
    var format_Particelle = new ol.format.GeoJSON();
    var features_Particelle = format_Particelle.readFeatures(json_Particelle, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_Particelle = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Particelle.png"/><b>Particelle</b>'
    });
    lyr_Particelle.setSource(jsonSource_Particelle);
    lyr_Particelle.set(
    "title", '<img src="styles/legend/Particelle.png"/>Particelle'
    );
var featureCounter_Particelle = 1;
jsonSource_Particelle.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Particelle++);
    feature.set("layerObject", lyr_Particelle);
});        
jsonSource_Particelle.addFeatures(features_Particelle);
}

var lyr_Fabbricati = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Fabbricati',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "Fabbricati",
    popuplayertitle: 'Fabbricati',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_Fabbricati,
});
function load_Fabbricati_data() {
    var format_Fabbricati = new ol.format.GeoJSON();
    var features_Fabbricati = format_Fabbricati.readFeatures(json_Fabbricati, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_Fabbricati = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Fabbricati.png"/><b>Fabbricati</b>'
    });
    lyr_Fabbricati.setSource(jsonSource_Fabbricati);
    lyr_Fabbricati.set(
    "title", '<img src="styles/legend/Fabbricati.png"/>Fabbricati'
    );
var featureCounter_Fabbricati = 1;
jsonSource_Fabbricati.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Fabbricati++);
    feature.set("layerObject", lyr_Fabbricati);
});        
jsonSource_Fabbricati.addFeatures(features_Fabbricati);
}

var lyr_NumeriParticelle = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> NumeriParticelle',
    source: new ol.source.Vector(),
maxResolution:0.7561205861110731,
 
    permalink: "NumeriParticelle",
    popuplayertitle: 'Numeri Particelle',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_NumeriParticelle,
});
function load_NumeriParticelle_data() {
    var format_NumeriParticelle = new ol.format.GeoJSON();
    var features_NumeriParticelle = format_NumeriParticelle.readFeatures(json_NumeriParticelle, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_NumeriParticelle = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/NumeriParticelle.png"/><b>Numeri Particelle</b>'
    });
    lyr_NumeriParticelle.setSource(jsonSource_NumeriParticelle);
    lyr_NumeriParticelle.set(
    "title", '<img src="styles/legend/NumeriParticelle.png"/>Numeri Particelle'
    );
var featureCounter_NumeriParticelle = 1;
jsonSource_NumeriParticelle.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_NumeriParticelle++);
    feature.set("layerObject", lyr_NumeriParticelle);
});        
jsonSource_NumeriParticelle.addFeatures(features_NumeriParticelle);
}

var lyr_STRADARIO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> STRADARIO',
    source: new ol.source.Vector(), 
    permalink: "STRADARIO",
    popuplayertitle: 'STRADARIO',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_STRADARIO,
});
function load_STRADARIO_data() {
    var format_STRADARIO = new ol.format.GeoJSON();
    var features_STRADARIO = format_STRADARIO.readFeatures(json_STRADARIO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_STRADARIO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/STRADARIO.png"/><b>STRADARIO</b>'
    });
    lyr_STRADARIO.setSource(jsonSource_STRADARIO);
    lyr_STRADARIO.set(
    "title", '<img src="styles/legend/STRADARIO.png"/>STRADARIO'
    );
var featureCounter_STRADARIO = 1;
jsonSource_STRADARIO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_STRADARIO++);
    feature.set("layerObject", lyr_STRADARIO);
});        
jsonSource_STRADARIO.addFeatures(features_STRADARIO);
}

var lyr_CIVICI = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> CIVICI',
    source: new ol.source.Vector(), 
    permalink: "CIVICI",
    popuplayertitle: 'CIVICI',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_CIVICI,
});
function load_CIVICI_data() {
    var format_CIVICI = new ol.format.GeoJSON();
    var features_CIVICI = format_CIVICI.readFeatures(json_CIVICI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_CIVICI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CIVICI.png"/><b>CIVICI</b>'
    });
    lyr_CIVICI.setSource(jsonSource_CIVICI);
    lyr_CIVICI.set(
    "title", '<img src="styles/legend/CIVICI.png"/>CIVICI'
    );
var featureCounter_CIVICI = 1;
jsonSource_CIVICI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CIVICI++);
    feature.set("layerObject", lyr_CIVICI);
});        
jsonSource_CIVICI.addFeatures(features_CIVICI);
}

var lyr_STRADEEAREENONCENSITEDIPRG = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> STRADEEAREENONCENSITEDIPRG',
    source: new ol.source.Vector(), 
    permalink: "STRADEEAREENONCENSITEDIPRG",
    popuplayertitle: 'STRADE E AREE NON CENSITE DI PRG',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_STRADEEAREENONCENSITEDIPRG,
});
function load_STRADEEAREENONCENSITEDIPRG_data() {
    var format_STRADEEAREENONCENSITEDIPRG = new ol.format.GeoJSON();
    var features_STRADEEAREENONCENSITEDIPRG = format_STRADEEAREENONCENSITEDIPRG.readFeatures(json_STRADEEAREENONCENSITEDIPRG, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_STRADEEAREENONCENSITEDIPRG = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/STRADEEAREENONCENSITEDIPRG.png"/><b>STRADE E AREE NON CENSITE DI PRG</b>'
    });
    lyr_STRADEEAREENONCENSITEDIPRG.setSource(jsonSource_STRADEEAREENONCENSITEDIPRG);
    lyr_STRADEEAREENONCENSITEDIPRG.set(
    "title", '<img src="styles/legend/STRADEEAREENONCENSITEDIPRG.png"/>STRADE E AREE NON CENSITE DI PRG'
    );
var featureCounter_STRADEEAREENONCENSITEDIPRG = 1;
jsonSource_STRADEEAREENONCENSITEDIPRG.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_STRADEEAREENONCENSITEDIPRG++);
    feature.set("layerObject", lyr_STRADEEAREENONCENSITEDIPRG);
});        
jsonSource_STRADEEAREENONCENSITEDIPRG.addFeatures(features_STRADEEAREENONCENSITEDIPRG);
}

var lyr_CORSIDACQUADIPRG = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> CORSIDACQUADIPRG',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "CORSIDACQUADIPRG",
    popuplayertitle: 'CORSI D ACQUA DI PRG',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_CORSIDACQUADIPRG,
});
function load_CORSIDACQUADIPRG_data() {
    var format_CORSIDACQUADIPRG = new ol.format.GeoJSON();
    var features_CORSIDACQUADIPRG = format_CORSIDACQUADIPRG.readFeatures(json_CORSIDACQUADIPRG, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_CORSIDACQUADIPRG = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CORSIDACQUADIPRG.png"/><b>CORSI D ACQUA DI PRG</b>'
    });
    lyr_CORSIDACQUADIPRG.setSource(jsonSource_CORSIDACQUADIPRG);
    lyr_CORSIDACQUADIPRG.set(
    "title", '<img src="styles/legend/CORSIDACQUADIPRG.png"/>CORSI D ACQUA DI PRG'
    );
var featureCounter_CORSIDACQUADIPRG = 1;
jsonSource_CORSIDACQUADIPRG.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CORSIDACQUADIPRG++);
    feature.set("layerObject", lyr_CORSIDACQUADIPRG);
});        
jsonSource_CORSIDACQUADIPRG.addFeatures(features_CORSIDACQUADIPRG);
}

var lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO",
    popuplayertitle: 'VERDE DI RISPETTO E DI FILTRO IN AMBITO URBANIZZATO',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO,
});
function load_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO_data() {
    var format_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO = new ol.format.GeoJSON();
    var features_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO = format_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.readFeatures(json_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.png"/><b>VERDE DI RISPETTO E DI FILTRO IN AMBITO URBANIZZATO</b>'
    });
    lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.setSource(jsonSource_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO);
    lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.set(
    "title", '<img src="styles/legend/VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.png"/>VERDE DI RISPETTO E DI FILTRO IN AMBITO URBANIZZATO'
    );
var featureCounter_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO = 1;
jsonSource_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO++);
    feature.set("layerObject", lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO);
});        
jsonSource_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.addFeatures(features_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO);
}

var lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE",
    popuplayertitle: 'AREA DI RIQUALIFICAZIONE AMBIENTALE DELLE CAVE DI PIANA DI MARE E BOSCO MEZZANOTTE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE,
});
function load_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE_data() {
    var format_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE = new ol.format.GeoJSON();
    var features_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE = format_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.readFeatures(json_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.png"/><b>AREA DI RIQUALIFICAZIONE AMBIENTALE DELLE CAVE DI PIANA DI MARE E BOSCO MEZZANOTTE</b>'
    });
    lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.setSource(jsonSource_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE);
    lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.set(
    "title", '<img src="styles/legend/AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.png"/>AREA DI RIQUALIFICAZIONE AMBIENTALE DELLE CAVE DI PIANA DI MARE E BOSCO MEZZANOTTE'
    );
var featureCounter_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE = 1;
jsonSource_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE++);
    feature.set("layerObject", lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE);
});        
jsonSource_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.addFeatures(features_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE);
}

var lyr_TRATTUROLAQUILAFOGGIA = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> TRATTUROLAQUILAFOGGIA',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "TRATTUROLAQUILAFOGGIA",
    popuplayertitle: 'TRATTURO L AQUILA FOGGIA',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_TRATTUROLAQUILAFOGGIA,
});
function load_TRATTUROLAQUILAFOGGIA_data() {
    var format_TRATTUROLAQUILAFOGGIA = new ol.format.GeoJSON();
    var features_TRATTUROLAQUILAFOGGIA = format_TRATTUROLAQUILAFOGGIA.readFeatures(json_TRATTUROLAQUILAFOGGIA, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_TRATTUROLAQUILAFOGGIA = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/TRATTUROLAQUILAFOGGIA.png"/><b>TRATTURO L AQUILA FOGGIA</b>'
    });
    lyr_TRATTUROLAQUILAFOGGIA.setSource(jsonSource_TRATTUROLAQUILAFOGGIA);
    lyr_TRATTUROLAQUILAFOGGIA.set(
    "title", '<img src="styles/legend/TRATTUROLAQUILAFOGGIA.png"/>TRATTURO L AQUILA FOGGIA'
    );
var featureCounter_TRATTUROLAQUILAFOGGIA = 1;
jsonSource_TRATTUROLAQUILAFOGGIA.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_TRATTUROLAQUILAFOGGIA++);
    feature.set("layerObject", lyr_TRATTUROLAQUILAFOGGIA);
});        
jsonSource_TRATTUROLAQUILAFOGGIA.addFeatures(features_TRATTUROLAQUILAFOGGIA);
}

var lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO",
    popuplayertitle: 'AREE DI TUTELA DI FORMAZIONE BOSCHIVA DI PREGIO',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO,
});
function load_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO_data() {
    var format_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO = new ol.format.GeoJSON();
    var features_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO = format_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.readFeatures(json_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.png"/><b>AREE DI TUTELA DI FORMAZIONE BOSCHIVA DI PREGIO</b>'
    });
    lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.setSource(jsonSource_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO);
    lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.set(
    "title", '<img src="styles/legend/AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.png"/>AREE DI TUTELA DI FORMAZIONE BOSCHIVA DI PREGIO'
    );
var featureCounter_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO = 1;
jsonSource_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO++);
    feature.set("layerObject", lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO);
});        
jsonSource_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.addFeatures(features_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO);
}

var lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE",
    popuplayertitle: 'PARCO FLUVIALE ATTREZZATO DEL TORRENTE SEREPENNE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE,
});
function load_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE_data() {
    var format_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE = new ol.format.GeoJSON();
    var features_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE = format_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.readFeatures(json_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.png"/><b>PARCO FLUVIALE ATTREZZATO DEL TORRENTE SEREPENNE</b>'
    });
    lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.setSource(jsonSource_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE);
    lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.set(
    "title", '<img src="styles/legend/PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.png"/>PARCO FLUVIALE ATTREZZATO DEL TORRENTE SEREPENNE'
    );
var featureCounter_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE = 1;
jsonSource_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE++);
    feature.set("layerObject", lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE);
});        
jsonSource_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.addFeatures(features_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE);
}

var lyr_AREEDIRISPETTODEICORSIDACQUA = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREEDIRISPETTODEICORSIDACQUA',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREEDIRISPETTODEICORSIDACQUA",
    popuplayertitle: 'AREE DI RISPETTO DEI CORSI D ACQUA',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_AREEDIRISPETTODEICORSIDACQUA,
});
function load_AREEDIRISPETTODEICORSIDACQUA_data() {
    var format_AREEDIRISPETTODEICORSIDACQUA = new ol.format.GeoJSON();
    var features_AREEDIRISPETTODEICORSIDACQUA = format_AREEDIRISPETTODEICORSIDACQUA.readFeatures(json_AREEDIRISPETTODEICORSIDACQUA, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREEDIRISPETTODEICORSIDACQUA = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREEDIRISPETTODEICORSIDACQUA.png"/><b>AREE DI RISPETTO DEI CORSI D ACQUA</b>'
    });
    lyr_AREEDIRISPETTODEICORSIDACQUA.setSource(jsonSource_AREEDIRISPETTODEICORSIDACQUA);
    lyr_AREEDIRISPETTODEICORSIDACQUA.set(
    "title", '<img src="styles/legend/AREEDIRISPETTODEICORSIDACQUA.png"/>AREE DI RISPETTO DEI CORSI D ACQUA'
    );
var featureCounter_AREEDIRISPETTODEICORSIDACQUA = 1;
jsonSource_AREEDIRISPETTODEICORSIDACQUA.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREEDIRISPETTODEICORSIDACQUA++);
    feature.set("layerObject", lyr_AREEDIRISPETTODEICORSIDACQUA);
});        
jsonSource_AREEDIRISPETTODEICORSIDACQUA.addFeatures(features_AREEDIRISPETTODEICORSIDACQUA);
}

var lyr_VERDEPRIVATO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> VERDEPRIVATO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "VERDEPRIVATO",
    popuplayertitle: 'VERDE PRIVATO',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_VERDEPRIVATO,
});
function load_VERDEPRIVATO_data() {
    var format_VERDEPRIVATO = new ol.format.GeoJSON();
    var features_VERDEPRIVATO = format_VERDEPRIVATO.readFeatures(json_VERDEPRIVATO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_VERDEPRIVATO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/VERDEPRIVATO.png"/><b>VERDE PRIVATO</b>'
    });
    lyr_VERDEPRIVATO.setSource(jsonSource_VERDEPRIVATO);
    lyr_VERDEPRIVATO.set(
    "title", '<img src="styles/legend/VERDEPRIVATO.png"/>VERDE PRIVATO'
    );
var featureCounter_VERDEPRIVATO = 1;
jsonSource_VERDEPRIVATO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_VERDEPRIVATO++);
    feature.set("layerObject", lyr_VERDEPRIVATO);
});        
jsonSource_VERDEPRIVATO.addFeatures(features_VERDEPRIVATO);
}

var lyr_F3_4AREACIMITERIALE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> F3_4AREACIMITERIALE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "F3_4AREACIMITERIALE",
    popuplayertitle: 'F3_4  AREA CIMITERIALE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_F3_4AREACIMITERIALE,
});
function load_F3_4AREACIMITERIALE_data() {
    var format_F3_4AREACIMITERIALE = new ol.format.GeoJSON();
    var features_F3_4AREACIMITERIALE = format_F3_4AREACIMITERIALE.readFeatures(json_F3_4AREACIMITERIALE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_F3_4AREACIMITERIALE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/F3_4AREACIMITERIALE.png"/><b>F3_4  AREA CIMITERIALE</b>'
    });
    lyr_F3_4AREACIMITERIALE.setSource(jsonSource_F3_4AREACIMITERIALE);
    lyr_F3_4AREACIMITERIALE.set(
    "title", '<img src="styles/legend/F3_4AREACIMITERIALE.png"/>F3_4  AREA CIMITERIALE'
    );
var featureCounter_F3_4AREACIMITERIALE = 1;
jsonSource_F3_4AREACIMITERIALE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_F3_4AREACIMITERIALE++);
    feature.set("layerObject", lyr_F3_4AREACIMITERIALE);
});        
jsonSource_F3_4AREACIMITERIALE.addFeatures(features_F3_4AREACIMITERIALE);
}

var lyr_F3_3DISCARICA = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> F3_3DISCARICA',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "F3_3DISCARICA",
    popuplayertitle: 'F3_3  DISCARICA',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_F3_3DISCARICA,
});
function load_F3_3DISCARICA_data() {
    var format_F3_3DISCARICA = new ol.format.GeoJSON();
    var features_F3_3DISCARICA = format_F3_3DISCARICA.readFeatures(json_F3_3DISCARICA, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_F3_3DISCARICA = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/F3_3DISCARICA.png"/><b>F3_3  DISCARICA</b>'
    });
    lyr_F3_3DISCARICA.setSource(jsonSource_F3_3DISCARICA);
    lyr_F3_3DISCARICA.set(
    "title", '<img src="styles/legend/F3_3DISCARICA.png"/>F3_3  DISCARICA'
    );
var featureCounter_F3_3DISCARICA = 1;
jsonSource_F3_3DISCARICA.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_F3_3DISCARICA++);
    feature.set("layerObject", lyr_F3_3DISCARICA);
});        
jsonSource_F3_3DISCARICA.addFeatures(features_F3_3DISCARICA);
}

var lyr_F3_2DEPURATORE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> F3_2DEPURATORE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "F3_2DEPURATORE",
    popuplayertitle: 'F3_2  DEPURATORE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_F3_2DEPURATORE,
});
function load_F3_2DEPURATORE_data() {
    var format_F3_2DEPURATORE = new ol.format.GeoJSON();
    var features_F3_2DEPURATORE = format_F3_2DEPURATORE.readFeatures(json_F3_2DEPURATORE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_F3_2DEPURATORE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/F3_2DEPURATORE.png"/><b>F3_2  DEPURATORE</b>'
    });
    lyr_F3_2DEPURATORE.setSource(jsonSource_F3_2DEPURATORE);
    lyr_F3_2DEPURATORE.set(
    "title", '<img src="styles/legend/F3_2DEPURATORE.png"/>F3_2  DEPURATORE'
    );
var featureCounter_F3_2DEPURATORE = 1;
jsonSource_F3_2DEPURATORE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_F3_2DEPURATORE++);
    feature.set("layerObject", lyr_F3_2DEPURATORE);
});        
jsonSource_F3_2DEPURATORE.addFeatures(features_F3_2DEPURATORE);
}

var lyr_F3_1ATTREZZATURETECNOLOGICHE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> F3_1ATTREZZATURETECNOLOGICHE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "F3_1ATTREZZATURETECNOLOGICHE",
    popuplayertitle: 'F3_1  ATTREZZATURE TECNOLOGICHE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_F3_1ATTREZZATURETECNOLOGICHE,
});
function load_F3_1ATTREZZATURETECNOLOGICHE_data() {
    var format_F3_1ATTREZZATURETECNOLOGICHE = new ol.format.GeoJSON();
    var features_F3_1ATTREZZATURETECNOLOGICHE = format_F3_1ATTREZZATURETECNOLOGICHE.readFeatures(json_F3_1ATTREZZATURETECNOLOGICHE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_F3_1ATTREZZATURETECNOLOGICHE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/F3_1ATTREZZATURETECNOLOGICHE.png"/><b>F3_1  ATTREZZATURE TECNOLOGICHE</b>'
    });
    lyr_F3_1ATTREZZATURETECNOLOGICHE.setSource(jsonSource_F3_1ATTREZZATURETECNOLOGICHE);
    lyr_F3_1ATTREZZATURETECNOLOGICHE.set(
    "title", '<img src="styles/legend/F3_1ATTREZZATURETECNOLOGICHE.png"/>F3_1  ATTREZZATURE TECNOLOGICHE'
    );
var featureCounter_F3_1ATTREZZATURETECNOLOGICHE = 1;
jsonSource_F3_1ATTREZZATURETECNOLOGICHE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_F3_1ATTREZZATURETECNOLOGICHE++);
    feature.set("layerObject", lyr_F3_1ATTREZZATURETECNOLOGICHE);
});        
jsonSource_F3_1ATTREZZATURETECNOLOGICHE.addFeatures(features_F3_1ATTREZZATURETECNOLOGICHE);
}

var lyr_EXF2SERVIZIDIINTERESSEGENERALE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> EXF2SERVIZIDIINTERESSEGENERALE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "EXF2SERVIZIDIINTERESSEGENERALE",
    popuplayertitle: 'EX F2  SERVIZI DI INTERESSE GENERALE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_EXF2SERVIZIDIINTERESSEGENERALE,
});
function load_EXF2SERVIZIDIINTERESSEGENERALE_data() {
    var format_EXF2SERVIZIDIINTERESSEGENERALE = new ol.format.GeoJSON();
    var features_EXF2SERVIZIDIINTERESSEGENERALE = format_EXF2SERVIZIDIINTERESSEGENERALE.readFeatures(json_EXF2SERVIZIDIINTERESSEGENERALE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_EXF2SERVIZIDIINTERESSEGENERALE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/EXF2SERVIZIDIINTERESSEGENERALE.png"/><b>EX F2  SERVIZI DI INTERESSE GENERALE</b>'
    });
    lyr_EXF2SERVIZIDIINTERESSEGENERALE.setSource(jsonSource_EXF2SERVIZIDIINTERESSEGENERALE);
    lyr_EXF2SERVIZIDIINTERESSEGENERALE.set(
    "title", '<img src="styles/legend/EXF2SERVIZIDIINTERESSEGENERALE.png"/>EX F2  SERVIZI DI INTERESSE GENERALE'
    );
var featureCounter_EXF2SERVIZIDIINTERESSEGENERALE = 1;
jsonSource_EXF2SERVIZIDIINTERESSEGENERALE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_EXF2SERVIZIDIINTERESSEGENERALE++);
    feature.set("layerObject", lyr_EXF2SERVIZIDIINTERESSEGENERALE);
});        
jsonSource_EXF2SERVIZIDIINTERESSEGENERALE.addFeatures(features_EXF2SERVIZIDIINTERESSEGENERALE);
}

var lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE",
    popuplayertitle: 'F2  ZONA PER ATTIVITA ESPOSITIVE E MANIFESTAZIONI FIERISTICHE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE,
});
function load_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE_data() {
    var format_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE = new ol.format.GeoJSON();
    var features_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE = format_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.readFeatures(json_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.png"/><b>F2  ZONA PER ATTIVITA ESPOSITIVE E MANIFESTAZIONI FIERISTICHE</b>'
    });
    lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.setSource(jsonSource_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE);
    lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.set(
    "title", '<img src="styles/legend/F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.png"/>F2  ZONA PER ATTIVITA ESPOSITIVE E MANIFESTAZIONI FIERISTICHE'
    );
var featureCounter_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE = 1;
jsonSource_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE++);
    feature.set("layerObject", lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE);
});        
jsonSource_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.addFeatures(features_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE);
}

var lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA",
    popuplayertitle: 'F1  ZONE PER ATTREZZATURE DI SERVIZIO ALLA MOBILITA',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA,
});
function load_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA_data() {
    var format_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA = new ol.format.GeoJSON();
    var features_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA = format_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.readFeatures(json_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.png"/><b>F1  ZONE PER ATTREZZATURE DI SERVIZIO ALLA MOBILITA</b>'
    });
    lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.setSource(jsonSource_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA);
    lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.set(
    "title", '<img src="styles/legend/F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.png"/>F1  ZONE PER ATTREZZATURE DI SERVIZIO ALLA MOBILITA'
    );
var featureCounter_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA = 1;
jsonSource_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA++);
    feature.set("layerObject", lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA);
});        
jsonSource_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.addFeatures(features_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA);
}

var lyr_E4UNITADIVICINATO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> E4UNITADIVICINATO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "E4UNITADIVICINATO",
    popuplayertitle: 'E4  UNITA DI VICINATO',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_E4UNITADIVICINATO,
});
function load_E4UNITADIVICINATO_data() {
    var format_E4UNITADIVICINATO = new ol.format.GeoJSON();
    var features_E4UNITADIVICINATO = format_E4UNITADIVICINATO.readFeatures(json_E4UNITADIVICINATO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_E4UNITADIVICINATO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/E4UNITADIVICINATO.png"/><b>E4  UNITA DI VICINATO</b>'
    });
    lyr_E4UNITADIVICINATO.setSource(jsonSource_E4UNITADIVICINATO);
    lyr_E4UNITADIVICINATO.set(
    "title", '<img src="styles/legend/E4UNITADIVICINATO.png"/>E4  UNITA DI VICINATO'
    );
var featureCounter_E4UNITADIVICINATO = 1;
jsonSource_E4UNITADIVICINATO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_E4UNITADIVICINATO++);
    feature.set("layerObject", lyr_E4UNITADIVICINATO);
});        
jsonSource_E4UNITADIVICINATO.addFeatures(features_E4UNITADIVICINATO);
}

var lyr_E3ZONAAGRICOLADITUTELA = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> E3ZONAAGRICOLADITUTELA',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "E3ZONAAGRICOLADITUTELA",
    popuplayertitle: 'E3  ZONA AGRICOLA DI TUTELA',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_E3ZONAAGRICOLADITUTELA,
});
function load_E3ZONAAGRICOLADITUTELA_data() {
    var format_E3ZONAAGRICOLADITUTELA = new ol.format.GeoJSON();
    var features_E3ZONAAGRICOLADITUTELA = format_E3ZONAAGRICOLADITUTELA.readFeatures(json_E3ZONAAGRICOLADITUTELA, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_E3ZONAAGRICOLADITUTELA = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/E3ZONAAGRICOLADITUTELA.png"/><b>E3  ZONA AGRICOLA DI TUTELA</b>'
    });
    lyr_E3ZONAAGRICOLADITUTELA.setSource(jsonSource_E3ZONAAGRICOLADITUTELA);
    lyr_E3ZONAAGRICOLADITUTELA.set(
    "title", '<img src="styles/legend/E3ZONAAGRICOLADITUTELA.png"/>E3  ZONA AGRICOLA DI TUTELA'
    );
var featureCounter_E3ZONAAGRICOLADITUTELA = 1;
jsonSource_E3ZONAAGRICOLADITUTELA.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_E3ZONAAGRICOLADITUTELA++);
    feature.set("layerObject", lyr_E3ZONAAGRICOLADITUTELA);
});        
jsonSource_E3ZONAAGRICOLADITUTELA.addFeatures(features_E3ZONAAGRICOLADITUTELA);
}

var lyr_E2ZONAAGRICOLADIPREGIO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> E2ZONAAGRICOLADIPREGIO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "E2ZONAAGRICOLADIPREGIO",
    popuplayertitle: 'E2  ZONA AGRICOLA DI PREGIO',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_E2ZONAAGRICOLADIPREGIO,
});
function load_E2ZONAAGRICOLADIPREGIO_data() {
    var format_E2ZONAAGRICOLADIPREGIO = new ol.format.GeoJSON();
    var features_E2ZONAAGRICOLADIPREGIO = format_E2ZONAAGRICOLADIPREGIO.readFeatures(json_E2ZONAAGRICOLADIPREGIO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_E2ZONAAGRICOLADIPREGIO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/E2ZONAAGRICOLADIPREGIO.png"/><b>E2  ZONA AGRICOLA DI PREGIO</b>'
    });
    lyr_E2ZONAAGRICOLADIPREGIO.setSource(jsonSource_E2ZONAAGRICOLADIPREGIO);
    lyr_E2ZONAAGRICOLADIPREGIO.set(
    "title", '<img src="styles/legend/E2ZONAAGRICOLADIPREGIO.png"/>E2  ZONA AGRICOLA DI PREGIO'
    );
var featureCounter_E2ZONAAGRICOLADIPREGIO = 1;
jsonSource_E2ZONAAGRICOLADIPREGIO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_E2ZONAAGRICOLADIPREGIO++);
    feature.set("layerObject", lyr_E2ZONAAGRICOLADIPREGIO);
});        
jsonSource_E2ZONAAGRICOLADIPREGIO.addFeatures(features_E2ZONAAGRICOLADIPREGIO);
}

var lyr_E1ZONAAGRICOLANORMALE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> E1ZONAAGRICOLANORMALE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "E1ZONAAGRICOLANORMALE",
    popuplayertitle: 'E1  ZONA AGRICOLA NORMALE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_E1ZONAAGRICOLANORMALE,
});
function load_E1ZONAAGRICOLANORMALE_data() {
    var format_E1ZONAAGRICOLANORMALE = new ol.format.GeoJSON();
    var features_E1ZONAAGRICOLANORMALE = format_E1ZONAAGRICOLANORMALE.readFeatures(json_E1ZONAAGRICOLANORMALE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_E1ZONAAGRICOLANORMALE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/E1ZONAAGRICOLANORMALE.png"/><b>E1  ZONA AGRICOLA NORMALE</b>'
    });
    lyr_E1ZONAAGRICOLANORMALE.setSource(jsonSource_E1ZONAAGRICOLANORMALE);
    lyr_E1ZONAAGRICOLANORMALE.set(
    "title", '<img src="styles/legend/E1ZONAAGRICOLANORMALE.png"/>E1  ZONA AGRICOLA NORMALE'
    );
var featureCounter_E1ZONAAGRICOLANORMALE = 1;
jsonSource_E1ZONAAGRICOLANORMALE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_E1ZONAAGRICOLANORMALE++);
    feature.set("layerObject", lyr_E1ZONAAGRICOLANORMALE);
});        
jsonSource_E1ZONAAGRICOLANORMALE.addFeatures(features_E1ZONAAGRICOLANORMALE);
}

var lyr_D5PIANOPERATTIVITAPRODUTTIVE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> D5PIANOPERATTIVITAPRODUTTIVE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "D5PIANOPERATTIVITAPRODUTTIVE",
    popuplayertitle: 'D5  PIANO PER ATTIVITA\' PRODUTTIVE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_D5PIANOPERATTIVITAPRODUTTIVE,
});
function load_D5PIANOPERATTIVITAPRODUTTIVE_data() {
    var format_D5PIANOPERATTIVITAPRODUTTIVE = new ol.format.GeoJSON();
    var features_D5PIANOPERATTIVITAPRODUTTIVE = format_D5PIANOPERATTIVITAPRODUTTIVE.readFeatures(json_D5PIANOPERATTIVITAPRODUTTIVE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_D5PIANOPERATTIVITAPRODUTTIVE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/D5PIANOPERATTIVITAPRODUTTIVE.png"/><b>D5  PIANO PER ATTIVITA\' PRODUTTIVE</b>'
    });
    lyr_D5PIANOPERATTIVITAPRODUTTIVE.setSource(jsonSource_D5PIANOPERATTIVITAPRODUTTIVE);
    lyr_D5PIANOPERATTIVITAPRODUTTIVE.set(
    "title", '<img src="styles/legend/D5PIANOPERATTIVITAPRODUTTIVE.png"/>D5  PIANO PER ATTIVITA\' PRODUTTIVE'
    );
var featureCounter_D5PIANOPERATTIVITAPRODUTTIVE = 1;
jsonSource_D5PIANOPERATTIVITAPRODUTTIVE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_D5PIANOPERATTIVITAPRODUTTIVE++);
    feature.set("layerObject", lyr_D5PIANOPERATTIVITAPRODUTTIVE);
});        
jsonSource_D5PIANOPERATTIVITAPRODUTTIVE.addFeatures(features_D5PIANOPERATTIVITAPRODUTTIVE);
}

var lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> D4PIANIPERINSEDIAMENTIPRODUTTIVI',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "D4PIANIPERINSEDIAMENTIPRODUTTIVI",
    popuplayertitle: 'D4  PIANI PER INSEDIAMENTI PRODUTTIVI',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_D4PIANIPERINSEDIAMENTIPRODUTTIVI,
});
function load_D4PIANIPERINSEDIAMENTIPRODUTTIVI_data() {
    var format_D4PIANIPERINSEDIAMENTIPRODUTTIVI = new ol.format.GeoJSON();
    var features_D4PIANIPERINSEDIAMENTIPRODUTTIVI = format_D4PIANIPERINSEDIAMENTIPRODUTTIVI.readFeatures(json_D4PIANIPERINSEDIAMENTIPRODUTTIVI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_D4PIANIPERINSEDIAMENTIPRODUTTIVI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/D4PIANIPERINSEDIAMENTIPRODUTTIVI.png"/><b>D4  PIANI PER INSEDIAMENTI PRODUTTIVI</b>'
    });
    lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI.setSource(jsonSource_D4PIANIPERINSEDIAMENTIPRODUTTIVI);
    lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI.set(
    "title", '<img src="styles/legend/D4PIANIPERINSEDIAMENTIPRODUTTIVI.png"/>D4  PIANI PER INSEDIAMENTI PRODUTTIVI'
    );
var featureCounter_D4PIANIPERINSEDIAMENTIPRODUTTIVI = 1;
jsonSource_D4PIANIPERINSEDIAMENTIPRODUTTIVI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_D4PIANIPERINSEDIAMENTIPRODUTTIVI++);
    feature.set("layerObject", lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI);
});        
jsonSource_D4PIANIPERINSEDIAMENTIPRODUTTIVI.addFeatures(features_D4PIANIPERINSEDIAMENTIPRODUTTIVI);
}

var lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> D3ZONEPERATTIVITARICETTIVEETURISTICHE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "D3ZONEPERATTIVITARICETTIVEETURISTICHE",
    popuplayertitle: 'D3  ZONE PER ATTIVITA RICETTIVE E TURISTICHE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_D3ZONEPERATTIVITARICETTIVEETURISTICHE,
});
function load_D3ZONEPERATTIVITARICETTIVEETURISTICHE_data() {
    var format_D3ZONEPERATTIVITARICETTIVEETURISTICHE = new ol.format.GeoJSON();
    var features_D3ZONEPERATTIVITARICETTIVEETURISTICHE = format_D3ZONEPERATTIVITARICETTIVEETURISTICHE.readFeatures(json_D3ZONEPERATTIVITARICETTIVEETURISTICHE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_D3ZONEPERATTIVITARICETTIVEETURISTICHE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/D3ZONEPERATTIVITARICETTIVEETURISTICHE.png"/><b>D3  ZONE PER ATTIVITA RICETTIVE E TURISTICHE</b>'
    });
    lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE.setSource(jsonSource_D3ZONEPERATTIVITARICETTIVEETURISTICHE);
    lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE.set(
    "title", '<img src="styles/legend/D3ZONEPERATTIVITARICETTIVEETURISTICHE.png"/>D3  ZONE PER ATTIVITA RICETTIVE E TURISTICHE'
    );
var featureCounter_D3ZONEPERATTIVITARICETTIVEETURISTICHE = 1;
jsonSource_D3ZONEPERATTIVITARICETTIVEETURISTICHE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_D3ZONEPERATTIVITARICETTIVEETURISTICHE++);
    feature.set("layerObject", lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE);
});        
jsonSource_D3ZONEPERATTIVITARICETTIVEETURISTICHE.addFeatures(features_D3ZONEPERATTIVITARICETTIVEETURISTICHE);
}

var lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale",
    popuplayertitle: 'D2  ESPANSIONE PER ATTIVITA PROMISCUE commercio in ambito residenziale',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale,
});
function load_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale_data() {
    var format_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale = new ol.format.GeoJSON();
    var features_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale = format_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.readFeatures(json_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.png"/><b>D2  ESPANSIONE PER ATTIVITA PROMISCUE commercio in ambito residenziale</b>'
    });
    lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.setSource(jsonSource_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale);
    lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.set(
    "title", '<img src="styles/legend/D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.png"/>D2  ESPANSIONE PER ATTIVITA PROMISCUE commercio in ambito residenziale'
    );
var featureCounter_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale = 1;
jsonSource_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale++);
    feature.set("layerObject", lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale);
});        
jsonSource_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.addFeatures(features_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale);
}

var lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE",
    popuplayertitle: 'D1   AREE DI ESPANSIONE DELLE ATTIVITA PRODUTTIVE SPARSE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE,
});
function load_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE_data() {
    var format_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE = new ol.format.GeoJSON();
    var features_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE = format_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.readFeatures(json_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.png"/><b>D1   AREE DI ESPANSIONE DELLE ATTIVITA PRODUTTIVE SPARSE</b>'
    });
    lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.setSource(jsonSource_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE);
    lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.set(
    "title", '<img src="styles/legend/D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.png"/>D1   AREE DI ESPANSIONE DELLE ATTIVITA PRODUTTIVE SPARSE'
    );
var featureCounter_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE = 1;
jsonSource_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE++);
    feature.set("layerObject", lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE);
});        
jsonSource_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.addFeatures(features_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE);
}

var lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE",
    popuplayertitle: 'COMPARTI IN CORSO DI ATTUAZIONE COME DA PRG VIGENTE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE,
});
function load_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE_data() {
    var format_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE = new ol.format.GeoJSON();
    var features_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE = format_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.readFeatures(json_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.png"/><b>COMPARTI IN CORSO DI ATTUAZIONE COME DA PRG VIGENTE</b>'
    });
    lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.setSource(jsonSource_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE);
    lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.set(
    "title", '<img src="styles/legend/COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.png"/>COMPARTI IN CORSO DI ATTUAZIONE COME DA PRG VIGENTE'
    );
var featureCounter_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE = 1;
jsonSource_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE++);
    feature.set("layerObject", lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE);
});        
jsonSource_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.addFeatures(features_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE);
}

var lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> COMPARTIDIPREVISIONECOMEDAPRGVIGENTE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "COMPARTIDIPREVISIONECOMEDAPRGVIGENTE",
    popuplayertitle: 'COMPARTI DI PREVISIONE COME DA PRG VIGENTE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE,
});
function load_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE_data() {
    var format_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE = new ol.format.GeoJSON();
    var features_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE = format_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.readFeatures(json_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.png"/><b>COMPARTI DI PREVISIONE COME DA PRG VIGENTE</b>'
    });
    lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.setSource(jsonSource_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE);
    lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.set(
    "title", '<img src="styles/legend/COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.png"/>COMPARTI DI PREVISIONE COME DA PRG VIGENTE'
    );
var featureCounter_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE = 1;
jsonSource_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE++);
    feature.set("layerObject", lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE);
});        
jsonSource_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.addFeatures(features_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE);
}

var lyr_PEEPPRGVIGENTE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> PEEPPRGVIGENTE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "PEEPPRGVIGENTE",
    popuplayertitle: 'P.E.E.P. PRG VIGENTE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_PEEPPRGVIGENTE,
});
function load_PEEPPRGVIGENTE_data() {
    var format_PEEPPRGVIGENTE = new ol.format.GeoJSON();
    var features_PEEPPRGVIGENTE = format_PEEPPRGVIGENTE.readFeatures(json_PEEPPRGVIGENTE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_PEEPPRGVIGENTE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/PEEPPRGVIGENTE.png"/><b>P.E.E.P. PRG VIGENTE</b>'
    });
    lyr_PEEPPRGVIGENTE.setSource(jsonSource_PEEPPRGVIGENTE);
    lyr_PEEPPRGVIGENTE.set(
    "title", '<img src="styles/legend/PEEPPRGVIGENTE.png"/>P.E.E.P. PRG VIGENTE'
    );
var featureCounter_PEEPPRGVIGENTE = 1;
jsonSource_PEEPPRGVIGENTE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_PEEPPRGVIGENTE++);
    feature.set("layerObject", lyr_PEEPPRGVIGENTE);
});        
jsonSource_PEEPPRGVIGENTE.addFeatures(features_PEEPPRGVIGENTE);
}

var lyr_C4areediconcentrazionedelleattrezzaturecollettive = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> C4areediconcentrazionedelleattrezzaturecollettive',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "C4areediconcentrazionedelleattrezzaturecollettive",
    popuplayertitle: 'C4  aree di concentrazione delle attrezzature collettive',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_C4areediconcentrazionedelleattrezzaturecollettive,
});
function load_C4areediconcentrazionedelleattrezzaturecollettive_data() {
    var format_C4areediconcentrazionedelleattrezzaturecollettive = new ol.format.GeoJSON();
    var features_C4areediconcentrazionedelleattrezzaturecollettive = format_C4areediconcentrazionedelleattrezzaturecollettive.readFeatures(json_C4areediconcentrazionedelleattrezzaturecollettive, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_C4areediconcentrazionedelleattrezzaturecollettive = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/C4areediconcentrazionedelleattrezzaturecollettive.png"/><b>C4  aree di concentrazione delle attrezzature collettive</b>'
    });
    lyr_C4areediconcentrazionedelleattrezzaturecollettive.setSource(jsonSource_C4areediconcentrazionedelleattrezzaturecollettive);
    lyr_C4areediconcentrazionedelleattrezzaturecollettive.set(
    "title", '<img src="styles/legend/C4areediconcentrazionedelleattrezzaturecollettive.png"/>C4  aree di concentrazione delle attrezzature collettive'
    );
var featureCounter_C4areediconcentrazionedelleattrezzaturecollettive = 1;
jsonSource_C4areediconcentrazionedelleattrezzaturecollettive.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_C4areediconcentrazionedelleattrezzaturecollettive++);
    feature.set("layerObject", lyr_C4areediconcentrazionedelleattrezzaturecollettive);
});        
jsonSource_C4areediconcentrazionedelleattrezzaturecollettive.addFeatures(features_C4areediconcentrazionedelleattrezzaturecollettive);
}

var lyr_C4CUEBORGOFORO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> C4CUEBORGOFORO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "C4CUEBORGOFORO",
    popuplayertitle: 'C4  C.U.E. BORGO FORO',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_C4CUEBORGOFORO,
});
function load_C4CUEBORGOFORO_data() {
    var format_C4CUEBORGOFORO = new ol.format.GeoJSON();
    var features_C4CUEBORGOFORO = format_C4CUEBORGOFORO.readFeatures(json_C4CUEBORGOFORO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_C4CUEBORGOFORO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/C4CUEBORGOFORO.png"/><b>C4  C.U.E. BORGO FORO</b>'
    });
    lyr_C4CUEBORGOFORO.setSource(jsonSource_C4CUEBORGOFORO);
    lyr_C4CUEBORGOFORO.set(
    "title", '<img src="styles/legend/C4CUEBORGOFORO.png"/>C4  C.U.E. BORGO FORO'
    );
var featureCounter_C4CUEBORGOFORO = 1;
jsonSource_C4CUEBORGOFORO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_C4CUEBORGOFORO++);
    feature.set("layerObject", lyr_C4CUEBORGOFORO);
});        
jsonSource_C4CUEBORGOFORO.addFeatures(features_C4CUEBORGOFORO);
}

var lyr_C3areediconcentrazionedelleattrezzaturecollettive = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> C3areediconcentrazionedelleattrezzaturecollettive',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "C3areediconcentrazionedelleattrezzaturecollettive",
    popuplayertitle: 'C3  aree di concentrazione delle attrezzature collettive',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_C3areediconcentrazionedelleattrezzaturecollettive,
});
function load_C3areediconcentrazionedelleattrezzaturecollettive_data() {
    var format_C3areediconcentrazionedelleattrezzaturecollettive = new ol.format.GeoJSON();
    var features_C3areediconcentrazionedelleattrezzaturecollettive = format_C3areediconcentrazionedelleattrezzaturecollettive.readFeatures(json_C3areediconcentrazionedelleattrezzaturecollettive, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_C3areediconcentrazionedelleattrezzaturecollettive = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/C3areediconcentrazionedelleattrezzaturecollettive.png"/><b>C3  aree di concentrazione delle attrezzature collettive</b>'
    });
    lyr_C3areediconcentrazionedelleattrezzaturecollettive.setSource(jsonSource_C3areediconcentrazionedelleattrezzaturecollettive);
    lyr_C3areediconcentrazionedelleattrezzaturecollettive.set(
    "title", '<img src="styles/legend/C3areediconcentrazionedelleattrezzaturecollettive.png"/>C3  aree di concentrazione delle attrezzature collettive'
    );
var featureCounter_C3areediconcentrazionedelleattrezzaturecollettive = 1;
jsonSource_C3areediconcentrazionedelleattrezzaturecollettive.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_C3areediconcentrazionedelleattrezzaturecollettive++);
    feature.set("layerObject", lyr_C3areediconcentrazionedelleattrezzaturecollettive);
});        
jsonSource_C3areediconcentrazionedelleattrezzaturecollettive.addFeatures(features_C3areediconcentrazionedelleattrezzaturecollettive);
}

var lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO",
    popuplayertitle: 'C3  ESPANSIONE COMPARTI DI PREVISIONE IN AMBITO EXTRA URBANO',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO,
});
function load_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO_data() {
    var format_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO = new ol.format.GeoJSON();
    var features_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO = format_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.readFeatures(json_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.png"/><b>C3  ESPANSIONE COMPARTI DI PREVISIONE IN AMBITO EXTRA URBANO</b>'
    });
    lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.setSource(jsonSource_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO);
    lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.set(
    "title", '<img src="styles/legend/C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.png"/>C3  ESPANSIONE COMPARTI DI PREVISIONE IN AMBITO EXTRA URBANO'
    );
var featureCounter_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO = 1;
jsonSource_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO++);
    feature.set("layerObject", lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO);
});        
jsonSource_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.addFeatures(features_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO);
}

var lyr_C2areediconcentrazionedelleattrezzaturecollettive = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> C2areediconcentrazionedelleattrezzaturecollettive',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "C2areediconcentrazionedelleattrezzaturecollettive",
    popuplayertitle: 'C2  aree di concentrazione delle attrezzature collettive',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_C2areediconcentrazionedelleattrezzaturecollettive,
});
function load_C2areediconcentrazionedelleattrezzaturecollettive_data() {
    var format_C2areediconcentrazionedelleattrezzaturecollettive = new ol.format.GeoJSON();
    var features_C2areediconcentrazionedelleattrezzaturecollettive = format_C2areediconcentrazionedelleattrezzaturecollettive.readFeatures(json_C2areediconcentrazionedelleattrezzaturecollettive, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_C2areediconcentrazionedelleattrezzaturecollettive = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/C2areediconcentrazionedelleattrezzaturecollettive.png"/><b>C2  aree di concentrazione delle attrezzature collettive</b>'
    });
    lyr_C2areediconcentrazionedelleattrezzaturecollettive.setSource(jsonSource_C2areediconcentrazionedelleattrezzaturecollettive);
    lyr_C2areediconcentrazionedelleattrezzaturecollettive.set(
    "title", '<img src="styles/legend/C2areediconcentrazionedelleattrezzaturecollettive.png"/>C2  aree di concentrazione delle attrezzature collettive'
    );
var featureCounter_C2areediconcentrazionedelleattrezzaturecollettive = 1;
jsonSource_C2areediconcentrazionedelleattrezzaturecollettive.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_C2areediconcentrazionedelleattrezzaturecollettive++);
    feature.set("layerObject", lyr_C2areediconcentrazionedelleattrezzaturecollettive);
});        
jsonSource_C2areediconcentrazionedelleattrezzaturecollettive.addFeatures(features_C2areediconcentrazionedelleattrezzaturecollettive);
}

var lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO",
    popuplayertitle: 'C2  ESPANSIONE COMPARTI DI PREVISIONE IN AMBITO URBANO',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO,
});
function load_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO_data() {
    var format_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO = new ol.format.GeoJSON();
    var features_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO = format_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.readFeatures(json_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.png"/><b>C2  ESPANSIONE COMPARTI DI PREVISIONE IN AMBITO URBANO</b>'
    });
    lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.setSource(jsonSource_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO);
    lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.set(
    "title", '<img src="styles/legend/C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.png"/>C2  ESPANSIONE COMPARTI DI PREVISIONE IN AMBITO URBANO'
    );
var featureCounter_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO = 1;
jsonSource_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO++);
    feature.set("layerObject", lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO);
});        
jsonSource_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.addFeatures(features_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO);
}

var lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> C1ESPANSIONEADEDIFICAZIONEDIRETTA',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "C1ESPANSIONEADEDIFICAZIONEDIRETTA",
    popuplayertitle: 'C1  ESPANSIONE AD EDIFICAZIONE DIRETTA',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_C1ESPANSIONEADEDIFICAZIONEDIRETTA,
});
function load_C1ESPANSIONEADEDIFICAZIONEDIRETTA_data() {
    var format_C1ESPANSIONEADEDIFICAZIONEDIRETTA = new ol.format.GeoJSON();
    var features_C1ESPANSIONEADEDIFICAZIONEDIRETTA = format_C1ESPANSIONEADEDIFICAZIONEDIRETTA.readFeatures(json_C1ESPANSIONEADEDIFICAZIONEDIRETTA, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_C1ESPANSIONEADEDIFICAZIONEDIRETTA = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/C1ESPANSIONEADEDIFICAZIONEDIRETTA.png"/><b>C1  ESPANSIONE AD EDIFICAZIONE DIRETTA</b>'
    });
    lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA.setSource(jsonSource_C1ESPANSIONEADEDIFICAZIONEDIRETTA);
    lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA.set(
    "title", '<img src="styles/legend/C1ESPANSIONEADEDIFICAZIONEDIRETTA.png"/>C1  ESPANSIONE AD EDIFICAZIONE DIRETTA'
    );
var featureCounter_C1ESPANSIONEADEDIFICAZIONEDIRETTA = 1;
jsonSource_C1ESPANSIONEADEDIFICAZIONEDIRETTA.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_C1ESPANSIONEADEDIFICAZIONEDIRETTA++);
    feature.set("layerObject", lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA);
});        
jsonSource_C1ESPANSIONEADEDIFICAZIONEDIRETTA.addFeatures(features_C1ESPANSIONEADEDIFICAZIONEDIRETTA);
}

var lyr_B3COMPLETAMENTOABASSADENSITA = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> B3COMPLETAMENTOABASSADENSITA',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "B3COMPLETAMENTOABASSADENSITA",
    popuplayertitle: 'B3  COMPLETAMENTO A BASSA DENSITA',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_B3COMPLETAMENTOABASSADENSITA,
});
function load_B3COMPLETAMENTOABASSADENSITA_data() {
    var format_B3COMPLETAMENTOABASSADENSITA = new ol.format.GeoJSON();
    var features_B3COMPLETAMENTOABASSADENSITA = format_B3COMPLETAMENTOABASSADENSITA.readFeatures(json_B3COMPLETAMENTOABASSADENSITA, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_B3COMPLETAMENTOABASSADENSITA = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/B3COMPLETAMENTOABASSADENSITA.png"/><b>B3  COMPLETAMENTO A BASSA DENSITA</b>'
    });
    lyr_B3COMPLETAMENTOABASSADENSITA.setSource(jsonSource_B3COMPLETAMENTOABASSADENSITA);
    lyr_B3COMPLETAMENTOABASSADENSITA.set(
    "title", '<img src="styles/legend/B3COMPLETAMENTOABASSADENSITA.png"/>B3  COMPLETAMENTO A BASSA DENSITA'
    );
var featureCounter_B3COMPLETAMENTOABASSADENSITA = 1;
jsonSource_B3COMPLETAMENTOABASSADENSITA.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_B3COMPLETAMENTOABASSADENSITA++);
    feature.set("layerObject", lyr_B3COMPLETAMENTOABASSADENSITA);
});        
jsonSource_B3COMPLETAMENTOABASSADENSITA.addFeatures(features_B3COMPLETAMENTOABASSADENSITA);
}

var lyr_B2COMPLETAMENTOAMEDIADENSITA = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> B2COMPLETAMENTOAMEDIADENSITA',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "B2COMPLETAMENTOAMEDIADENSITA",
    popuplayertitle: 'B2  COMPLETAMENTO A MEDIA DENSITA',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_B2COMPLETAMENTOAMEDIADENSITA,
});
function load_B2COMPLETAMENTOAMEDIADENSITA_data() {
    var format_B2COMPLETAMENTOAMEDIADENSITA = new ol.format.GeoJSON();
    var features_B2COMPLETAMENTOAMEDIADENSITA = format_B2COMPLETAMENTOAMEDIADENSITA.readFeatures(json_B2COMPLETAMENTOAMEDIADENSITA, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_B2COMPLETAMENTOAMEDIADENSITA = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/B2COMPLETAMENTOAMEDIADENSITA.png"/><b>B2  COMPLETAMENTO A MEDIA DENSITA</b>'
    });
    lyr_B2COMPLETAMENTOAMEDIADENSITA.setSource(jsonSource_B2COMPLETAMENTOAMEDIADENSITA);
    lyr_B2COMPLETAMENTOAMEDIADENSITA.set(
    "title", '<img src="styles/legend/B2COMPLETAMENTOAMEDIADENSITA.png"/>B2  COMPLETAMENTO A MEDIA DENSITA'
    );
var featureCounter_B2COMPLETAMENTOAMEDIADENSITA = 1;
jsonSource_B2COMPLETAMENTOAMEDIADENSITA.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_B2COMPLETAMENTOAMEDIADENSITA++);
    feature.set("layerObject", lyr_B2COMPLETAMENTOAMEDIADENSITA);
});        
jsonSource_B2COMPLETAMENTOAMEDIADENSITA.addFeatures(features_B2COMPLETAMENTOAMEDIADENSITA);
}

var lyr_B1COMPLETAMENTOADALTADENSITA = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> B1COMPLETAMENTOADALTADENSITA',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "B1COMPLETAMENTOADALTADENSITA",
    popuplayertitle: 'B1  COMPLETAMENTO AD ALTA DENSITA',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_B1COMPLETAMENTOADALTADENSITA,
});
function load_B1COMPLETAMENTOADALTADENSITA_data() {
    var format_B1COMPLETAMENTOADALTADENSITA = new ol.format.GeoJSON();
    var features_B1COMPLETAMENTOADALTADENSITA = format_B1COMPLETAMENTOADALTADENSITA.readFeatures(json_B1COMPLETAMENTOADALTADENSITA, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_B1COMPLETAMENTOADALTADENSITA = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/B1COMPLETAMENTOADALTADENSITA.png"/><b>B1  COMPLETAMENTO AD ALTA DENSITA</b>'
    });
    lyr_B1COMPLETAMENTOADALTADENSITA.setSource(jsonSource_B1COMPLETAMENTOADALTADENSITA);
    lyr_B1COMPLETAMENTOADALTADENSITA.set(
    "title", '<img src="styles/legend/B1COMPLETAMENTOADALTADENSITA.png"/>B1  COMPLETAMENTO AD ALTA DENSITA'
    );
var featureCounter_B1COMPLETAMENTOADALTADENSITA = 1;
jsonSource_B1COMPLETAMENTOADALTADENSITA.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_B1COMPLETAMENTOADALTADENSITA++);
    feature.set("layerObject", lyr_B1COMPLETAMENTOADALTADENSITA);
});        
jsonSource_B1COMPLETAMENTOADALTADENSITA.addFeatures(features_B1COMPLETAMENTOADALTADENSITA);
}

var lyr_ACENTROSTORICO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> ACENTROSTORICO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "ACENTROSTORICO",
    popuplayertitle: 'A  CENTRO STORICO',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_ACENTROSTORICO,
});
function load_ACENTROSTORICO_data() {
    var format_ACENTROSTORICO = new ol.format.GeoJSON();
    var features_ACENTROSTORICO = format_ACENTROSTORICO.readFeatures(json_ACENTROSTORICO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_ACENTROSTORICO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/ACENTROSTORICO.png"/><b>A  CENTRO STORICO</b>'
    });
    lyr_ACENTROSTORICO.setSource(jsonSource_ACENTROSTORICO);
    lyr_ACENTROSTORICO.set(
    "title", '<img src="styles/legend/ACENTROSTORICO.png"/>A  CENTRO STORICO'
    );
var featureCounter_ACENTROSTORICO = 1;
jsonSource_ACENTROSTORICO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_ACENTROSTORICO++);
    feature.set("layerObject", lyr_ACENTROSTORICO);
});        
jsonSource_ACENTROSTORICO.addFeatures(features_ACENTROSTORICO);
}

var lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREADIRISPETTODEGLIIMPIANTIRIPETITORI',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREADIRISPETTODEGLIIMPIANTIRIPETITORI",
    popuplayertitle: 'AREA DI RISPETTO DEGLI IMPIANTI RIPETITORI',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_AREADIRISPETTODEGLIIMPIANTIRIPETITORI,
});
function load_AREADIRISPETTODEGLIIMPIANTIRIPETITORI_data() {
    var format_AREADIRISPETTODEGLIIMPIANTIRIPETITORI = new ol.format.GeoJSON();
    var features_AREADIRISPETTODEGLIIMPIANTIRIPETITORI = format_AREADIRISPETTODEGLIIMPIANTIRIPETITORI.readFeatures(json_AREADIRISPETTODEGLIIMPIANTIRIPETITORI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREADIRISPETTODEGLIIMPIANTIRIPETITORI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREADIRISPETTODEGLIIMPIANTIRIPETITORI.png"/><b>AREA DI RISPETTO DEGLI IMPIANTI RIPETITORI</b>'
    });
    lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI.setSource(jsonSource_AREADIRISPETTODEGLIIMPIANTIRIPETITORI);
    lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI.set(
    "title", '<img src="styles/legend/AREADIRISPETTODEGLIIMPIANTIRIPETITORI.png"/>AREA DI RISPETTO DEGLI IMPIANTI RIPETITORI'
    );
var featureCounter_AREADIRISPETTODEGLIIMPIANTIRIPETITORI = 1;
jsonSource_AREADIRISPETTODEGLIIMPIANTIRIPETITORI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREADIRISPETTODEGLIIMPIANTIRIPETITORI++);
    feature.set("layerObject", lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI);
});        
jsonSource_AREADIRISPETTODEGLIIMPIANTIRIPETITORI.addFeatures(features_AREADIRISPETTODEGLIIMPIANTIRIPETITORI);
}

var lyr_AREADIRISPETTODELDEPURATORE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREADIRISPETTODELDEPURATORE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREADIRISPETTODELDEPURATORE",
    popuplayertitle: 'AREA DI RISPETTO DEL DEPURATORE',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_AREADIRISPETTODELDEPURATORE,
});
function load_AREADIRISPETTODELDEPURATORE_data() {
    var format_AREADIRISPETTODELDEPURATORE = new ol.format.GeoJSON();
    var features_AREADIRISPETTODELDEPURATORE = format_AREADIRISPETTODELDEPURATORE.readFeatures(json_AREADIRISPETTODELDEPURATORE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREADIRISPETTODELDEPURATORE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREADIRISPETTODELDEPURATORE.png"/><b>AREA DI RISPETTO DEL DEPURATORE</b>'
    });
    lyr_AREADIRISPETTODELDEPURATORE.setSource(jsonSource_AREADIRISPETTODELDEPURATORE);
    lyr_AREADIRISPETTODELDEPURATORE.set(
    "title", '<img src="styles/legend/AREADIRISPETTODELDEPURATORE.png"/>AREA DI RISPETTO DEL DEPURATORE'
    );
var featureCounter_AREADIRISPETTODELDEPURATORE = 1;
jsonSource_AREADIRISPETTODELDEPURATORE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREADIRISPETTODELDEPURATORE++);
    feature.set("layerObject", lyr_AREADIRISPETTODELDEPURATORE);
});        
jsonSource_AREADIRISPETTODELDEPURATORE.addFeatures(features_AREADIRISPETTODELDEPURATORE);
}

var lyr_VINCOLODIRISPETTOCIMITERIALE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> VINCOLODIRISPETTOCIMITERIALE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "VINCOLODIRISPETTOCIMITERIALE",
    popuplayertitle: 'VINCOLO DI RISPETTO CIMITERIALE',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_VINCOLODIRISPETTOCIMITERIALE,
});
function load_VINCOLODIRISPETTOCIMITERIALE_data() {
    var format_VINCOLODIRISPETTOCIMITERIALE = new ol.format.GeoJSON();
    var features_VINCOLODIRISPETTOCIMITERIALE = format_VINCOLODIRISPETTOCIMITERIALE.readFeatures(json_VINCOLODIRISPETTOCIMITERIALE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_VINCOLODIRISPETTOCIMITERIALE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/VINCOLODIRISPETTOCIMITERIALE.png"/><b>VINCOLO DI RISPETTO CIMITERIALE</b>'
    });
    lyr_VINCOLODIRISPETTOCIMITERIALE.setSource(jsonSource_VINCOLODIRISPETTOCIMITERIALE);
    lyr_VINCOLODIRISPETTOCIMITERIALE.set(
    "title", '<img src="styles/legend/VINCOLODIRISPETTOCIMITERIALE.png"/>VINCOLO DI RISPETTO CIMITERIALE'
    );
var featureCounter_VINCOLODIRISPETTOCIMITERIALE = 1;
jsonSource_VINCOLODIRISPETTOCIMITERIALE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_VINCOLODIRISPETTOCIMITERIALE++);
    feature.set("layerObject", lyr_VINCOLODIRISPETTOCIMITERIALE);
});        
jsonSource_VINCOLODIRISPETTOCIMITERIALE.addFeatures(features_VINCOLODIRISPETTOCIMITERIALE);
}

var lyr_VINCOLOARCHEOLOGICO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> VINCOLOARCHEOLOGICO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "VINCOLOARCHEOLOGICO",
    popuplayertitle: 'VINCOLO ARCHEOLOGICO',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_VINCOLOARCHEOLOGICO,
});
function load_VINCOLOARCHEOLOGICO_data() {
    var format_VINCOLOARCHEOLOGICO = new ol.format.GeoJSON();
    var features_VINCOLOARCHEOLOGICO = format_VINCOLOARCHEOLOGICO.readFeatures(json_VINCOLOARCHEOLOGICO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_VINCOLOARCHEOLOGICO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/VINCOLOARCHEOLOGICO.png"/><b>VINCOLO ARCHEOLOGICO</b>'
    });
    lyr_VINCOLOARCHEOLOGICO.setSource(jsonSource_VINCOLOARCHEOLOGICO);
    lyr_VINCOLOARCHEOLOGICO.set(
    "title", '<img src="styles/legend/VINCOLOARCHEOLOGICO.png"/>VINCOLO ARCHEOLOGICO'
    );
var featureCounter_VINCOLOARCHEOLOGICO = 1;
jsonSource_VINCOLOARCHEOLOGICO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_VINCOLOARCHEOLOGICO++);
    feature.set("layerObject", lyr_VINCOLOARCHEOLOGICO);
});        
jsonSource_VINCOLOARCHEOLOGICO.addFeatures(features_VINCOLOARCHEOLOGICO);
}

var lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE",
    popuplayertitle: 'EDIFICI OGGETTO DI RECUPERO DEL PATRIMONIO EDILIZIO RURALE',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE,
});
function load_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE_data() {
    var format_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE = new ol.format.GeoJSON();
    var features_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE = format_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.readFeatures(json_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.png"/><b>EDIFICI OGGETTO DI RECUPERO DEL PATRIMONIO EDILIZIO RURALE</b>'
    });
    lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.setSource(jsonSource_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE);
    lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.set(
    "title", '<img src="styles/legend/EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.png"/>EDIFICI OGGETTO DI RECUPERO DEL PATRIMONIO EDILIZIO RURALE'
    );
var featureCounter_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE = 1;
jsonSource_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE++);
    feature.set("layerObject", lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE);
});        
jsonSource_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.addFeatures(features_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE);
}

var lyr_NUMEROEDIFICI = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> NUMEROEDIFICI',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "NUMEROEDIFICI",
    popuplayertitle: 'NUMERO EDIFICI',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_NUMEROEDIFICI,
});
function load_NUMEROEDIFICI_data() {
    var format_NUMEROEDIFICI = new ol.format.GeoJSON();
    var features_NUMEROEDIFICI = format_NUMEROEDIFICI.readFeatures(json_NUMEROEDIFICI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_NUMEROEDIFICI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/NUMEROEDIFICI.png"/><b>NUMERO EDIFICI</b>'
    });
    lyr_NUMEROEDIFICI.setSource(jsonSource_NUMEROEDIFICI);
    lyr_NUMEROEDIFICI.set(
    "title", '<img src="styles/legend/NUMEROEDIFICI.png"/>NUMERO EDIFICI'
    );
var featureCounter_NUMEROEDIFICI = 1;
jsonSource_NUMEROEDIFICI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_NUMEROEDIFICI++);
    feature.set("layerObject", lyr_NUMEROEDIFICI);
});        
jsonSource_NUMEROEDIFICI.addFeatures(features_NUMEROEDIFICI);
}

var lyr_PARCOURBANOATTREZZATO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> PARCOURBANOATTREZZATO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "PARCOURBANOATTREZZATO",
    popuplayertitle: 'PARCO URBANO ATTREZZATO',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_PARCOURBANOATTREZZATO,
});
function load_PARCOURBANOATTREZZATO_data() {
    var format_PARCOURBANOATTREZZATO = new ol.format.GeoJSON();
    var features_PARCOURBANOATTREZZATO = format_PARCOURBANOATTREZZATO.readFeatures(json_PARCOURBANOATTREZZATO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_PARCOURBANOATTREZZATO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/PARCOURBANOATTREZZATO.png"/><b>PARCO URBANO ATTREZZATO</b>'
    });
    lyr_PARCOURBANOATTREZZATO.setSource(jsonSource_PARCOURBANOATTREZZATO);
    lyr_PARCOURBANOATTREZZATO.set(
    "title", '<img src="styles/legend/PARCOURBANOATTREZZATO.png"/>PARCO URBANO ATTREZZATO'
    );
var featureCounter_PARCOURBANOATTREZZATO = 1;
jsonSource_PARCOURBANOATTREZZATO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_PARCOURBANOATTREZZATO++);
    feature.set("layerObject", lyr_PARCOURBANOATTREZZATO);
});        
jsonSource_PARCOURBANOATTREZZATO.addFeatures(features_PARCOURBANOATTREZZATO);
}

var lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE",
    popuplayertitle: 'AREE PER ATTREZZATURE SPORTIVE RICREATIVE DI LIVELLO COMPRENSORIALE',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE,
});
function load_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE_data() {
    var format_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE = new ol.format.GeoJSON();
    var features_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE = format_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.readFeatures(json_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.png"/><b>AREE PER ATTREZZATURE SPORTIVE RICREATIVE DI LIVELLO COMPRENSORIALE</b>'
    });
    lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.setSource(jsonSource_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE);
    lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.set(
    "title", '<img src="styles/legend/AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.png"/>AREE PER ATTREZZATURE SPORTIVE RICREATIVE DI LIVELLO COMPRENSORIALE'
    );
var featureCounter_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE = 1;
jsonSource_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE++);
    feature.set("layerObject", lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE);
});        
jsonSource_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.addFeatures(features_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE);
}

var lyr_PARCHEGGI = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> PARCHEGGI',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "PARCHEGGI",
    popuplayertitle: 'PARCHEGGI',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_PARCHEGGI,
});
function load_PARCHEGGI_data() {
    var format_PARCHEGGI = new ol.format.GeoJSON();
    var features_PARCHEGGI = format_PARCHEGGI.readFeatures(json_PARCHEGGI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_PARCHEGGI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/PARCHEGGI.png"/><b>PARCHEGGI</b>'
    });
    lyr_PARCHEGGI.setSource(jsonSource_PARCHEGGI);
    lyr_PARCHEGGI.set(
    "title", '<img src="styles/legend/PARCHEGGI.png"/>PARCHEGGI'
    );
var featureCounter_PARCHEGGI = 1;
jsonSource_PARCHEGGI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_PARCHEGGI++);
    feature.set("layerObject", lyr_PARCHEGGI);
});        
jsonSource_PARCHEGGI.addFeatures(features_PARCHEGGI);
}

var lyr_areeaserviziodegliEDIFICIPUBBLICI = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> areeaserviziodegliEDIFICIPUBBLICI',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "areeaserviziodegliEDIFICIPUBBLICI",
    popuplayertitle: 'aree a servizio degli EDIFICI PUBBLICI',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_areeaserviziodegliEDIFICIPUBBLICI,
});
function load_areeaserviziodegliEDIFICIPUBBLICI_data() {
    var format_areeaserviziodegliEDIFICIPUBBLICI = new ol.format.GeoJSON();
    var features_areeaserviziodegliEDIFICIPUBBLICI = format_areeaserviziodegliEDIFICIPUBBLICI.readFeatures(json_areeaserviziodegliEDIFICIPUBBLICI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_areeaserviziodegliEDIFICIPUBBLICI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/areeaserviziodegliEDIFICIPUBBLICI.png"/><b>aree a servizio degli EDIFICI PUBBLICI</b>'
    });
    lyr_areeaserviziodegliEDIFICIPUBBLICI.setSource(jsonSource_areeaserviziodegliEDIFICIPUBBLICI);
    lyr_areeaserviziodegliEDIFICIPUBBLICI.set(
    "title", '<img src="styles/legend/areeaserviziodegliEDIFICIPUBBLICI.png"/>aree a servizio degli EDIFICI PUBBLICI'
    );
var featureCounter_areeaserviziodegliEDIFICIPUBBLICI = 1;
jsonSource_areeaserviziodegliEDIFICIPUBBLICI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_areeaserviziodegliEDIFICIPUBBLICI++);
    feature.set("layerObject", lyr_areeaserviziodegliEDIFICIPUBBLICI);
});        
jsonSource_areeaserviziodegliEDIFICIPUBBLICI.addFeatures(features_areeaserviziodegliEDIFICIPUBBLICI);
}

var lyr_EDIFICIPUBBLICI = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> EDIFICIPUBBLICI',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "EDIFICIPUBBLICI",
    popuplayertitle: 'EDIFICI PUBBLICI',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_EDIFICIPUBBLICI,
});
function load_EDIFICIPUBBLICI_data() {
    var format_EDIFICIPUBBLICI = new ol.format.GeoJSON();
    var features_EDIFICIPUBBLICI = format_EDIFICIPUBBLICI.readFeatures(json_EDIFICIPUBBLICI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_EDIFICIPUBBLICI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/EDIFICIPUBBLICI.png"/><b>EDIFICI PUBBLICI</b>'
    });
    lyr_EDIFICIPUBBLICI.setSource(jsonSource_EDIFICIPUBBLICI);
    lyr_EDIFICIPUBBLICI.set(
    "title", '<img src="styles/legend/EDIFICIPUBBLICI.png"/>EDIFICI PUBBLICI'
    );
var featureCounter_EDIFICIPUBBLICI = 1;
jsonSource_EDIFICIPUBBLICI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_EDIFICIPUBBLICI++);
    feature.set("layerObject", lyr_EDIFICIPUBBLICI);
});        
jsonSource_EDIFICIPUBBLICI.addFeatures(features_EDIFICIPUBBLICI);
}

var lyr_AREEDICONCENTRAZIONEDEGLISTANDARD = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREEDICONCENTRAZIONEDEGLISTANDARD',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREEDICONCENTRAZIONEDEGLISTANDARD",
    popuplayertitle: 'AREE DI CONCENTRAZIONE DEGLI STANDARD',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_AREEDICONCENTRAZIONEDEGLISTANDARD,
});
function load_AREEDICONCENTRAZIONEDEGLISTANDARD_data() {
    var format_AREEDICONCENTRAZIONEDEGLISTANDARD = new ol.format.GeoJSON();
    var features_AREEDICONCENTRAZIONEDEGLISTANDARD = format_AREEDICONCENTRAZIONEDEGLISTANDARD.readFeatures(json_AREEDICONCENTRAZIONEDEGLISTANDARD, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREEDICONCENTRAZIONEDEGLISTANDARD = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREEDICONCENTRAZIONEDEGLISTANDARD.png"/><b>AREE DI CONCENTRAZIONE DEGLI STANDARD</b>'
    });
    lyr_AREEDICONCENTRAZIONEDEGLISTANDARD.setSource(jsonSource_AREEDICONCENTRAZIONEDEGLISTANDARD);
    lyr_AREEDICONCENTRAZIONEDEGLISTANDARD.set(
    "title", '<img src="styles/legend/AREEDICONCENTRAZIONEDEGLISTANDARD.png"/>AREE DI CONCENTRAZIONE DEGLI STANDARD'
    );
var featureCounter_AREEDICONCENTRAZIONEDEGLISTANDARD = 1;
jsonSource_AREEDICONCENTRAZIONEDEGLISTANDARD.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREEDICONCENTRAZIONEDEGLISTANDARD++);
    feature.set("layerObject", lyr_AREEDICONCENTRAZIONEDEGLISTANDARD);
});        
jsonSource_AREEDICONCENTRAZIONEDEGLISTANDARD.addFeatures(features_AREEDICONCENTRAZIONEDEGLISTANDARD);
}

var lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili",
    popuplayertitle: 'AREE PER ATTREZZATURE COLLETTIVE impianti sportivi e assimilabili',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili,
});
function load_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili_data() {
    var format_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili = new ol.format.GeoJSON();
    var features_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili = format_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.readFeatures(json_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.png"/><b>AREE PER ATTREZZATURE COLLETTIVE impianti sportivi e assimilabili</b>'
    });
    lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.setSource(jsonSource_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili);
    lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.set(
    "title", '<img src="styles/legend/AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.png"/>AREE PER ATTREZZATURE COLLETTIVE impianti sportivi e assimilabili'
    );
var featureCounter_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili = 1;
jsonSource_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili++);
    feature.set("layerObject", lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili);
});        
jsonSource_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.addFeatures(features_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili);
}

var lyr_VIABILITAESISTENTE = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> VIABILITAESISTENTE',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "VIABILITAESISTENTE",
    popuplayertitle: 'VIABILITA ESISTENTE',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_VIABILITAESISTENTE,
});
function load_VIABILITAESISTENTE_data() {
    var format_VIABILITAESISTENTE = new ol.format.GeoJSON();
    var features_VIABILITAESISTENTE = format_VIABILITAESISTENTE.readFeatures(json_VIABILITAESISTENTE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_VIABILITAESISTENTE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/VIABILITAESISTENTE.png"/><b>VIABILITA ESISTENTE</b>'
    });
    lyr_VIABILITAESISTENTE.setSource(jsonSource_VIABILITAESISTENTE);
    lyr_VIABILITAESISTENTE.set(
    "title", '<img src="styles/legend/VIABILITAESISTENTE.png"/>VIABILITA ESISTENTE'
    );
var featureCounter_VIABILITAESISTENTE = 1;
jsonSource_VIABILITAESISTENTE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_VIABILITAESISTENTE++);
    feature.set("layerObject", lyr_VIABILITAESISTENTE);
});        
jsonSource_VIABILITAESISTENTE.addFeatures(features_VIABILITAESISTENTE);
}

var lyr_VIABILITADIPROGETTO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> VIABILITADIPROGETTO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "VIABILITADIPROGETTO",
    popuplayertitle: 'VIABILITA DI PROGETTO',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_VIABILITADIPROGETTO,
});
function load_VIABILITADIPROGETTO_data() {
    var format_VIABILITADIPROGETTO = new ol.format.GeoJSON();
    var features_VIABILITADIPROGETTO = format_VIABILITADIPROGETTO.readFeatures(json_VIABILITADIPROGETTO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_VIABILITADIPROGETTO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/VIABILITADIPROGETTO.png"/><b>VIABILITA DI PROGETTO</b>'
    });
    lyr_VIABILITADIPROGETTO.setSource(jsonSource_VIABILITADIPROGETTO);
    lyr_VIABILITADIPROGETTO.set(
    "title", '<img src="styles/legend/VIABILITADIPROGETTO.png"/>VIABILITA DI PROGETTO'
    );
var featureCounter_VIABILITADIPROGETTO = 1;
jsonSource_VIABILITADIPROGETTO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_VIABILITADIPROGETTO++);
    feature.set("layerObject", lyr_VIABILITADIPROGETTO);
});        
jsonSource_VIABILITADIPROGETTO.addFeatures(features_VIABILITADIPROGETTO);
}

var lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI",
    popuplayertitle: 'AREE ESCLUSE DAL PTU DA RIPIANIFICARE ATTUALMENTE INEDIFICABILI',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI,
});
function load_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI_data() {
    var format_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = new ol.format.GeoJSON();
    var features_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = format_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.readFeatures(json_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.png"/><b>AREE ESCLUSE DAL PTU DA RIPIANIFICARE ATTUALMENTE INEDIFICABILI</b>'
    });
    lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.setSource(jsonSource_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI);
    lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.set(
    "title", '<img src="styles/legend/AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.png"/>AREE ESCLUSE DAL PTU DA RIPIANIFICARE ATTUALMENTE INEDIFICABILI'
    );
var featureCounter_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = 1;
jsonSource_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI++);
    feature.set("layerObject", lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI);
});        
jsonSource_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.addFeatures(features_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI);
}

var lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI",
    popuplayertitle: 'AREE REINCLUSE NEL PTU DA RIPIANIFICARE ATTUALMENTE INEDIFICABILI',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI,
});
function load_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI_data() {
    var format_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = new ol.format.GeoJSON();
    var features_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = format_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.readFeatures(json_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.png"/><b>AREE REINCLUSE NEL PTU DA RIPIANIFICARE ATTUALMENTE INEDIFICABILI</b>'
    });
    lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.setSource(jsonSource_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI);
    lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.set(
    "title", '<img src="styles/legend/AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.png"/>AREE REINCLUSE NEL PTU DA RIPIANIFICARE ATTUALMENTE INEDIFICABILI'
    );
var featureCounter_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI = 1;
jsonSource_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI++);
    feature.set("layerObject", lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI);
});        
jsonSource_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.addFeatures(features_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI);
}

var lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO",
    popuplayertitle: 'VIABILITA DI COLLEGAMENTO TERRITORIO URBANIZZATO',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO,
});
function load_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO_data() {
    var format_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO = new ol.format.GeoJSON();
    var features_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO = format_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.readFeatures(json_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.png"/><b>VIABILITA DI COLLEGAMENTO TERRITORIO URBANIZZATO</b>'
    });
    lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.setSource(jsonSource_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO);
    lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.set(
    "title", '<img src="styles/legend/VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.png"/>VIABILITA DI COLLEGAMENTO TERRITORIO URBANIZZATO'
    );
var featureCounter_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO = 1;
jsonSource_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO++);
    feature.set("layerObject", lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO);
});        
jsonSource_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.addFeatures(features_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO);
}

var lyr_PERIMETRODELTERRITORIOURBANIZZATO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> PERIMETRODELTERRITORIOURBANIZZATO',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "PERIMETRODELTERRITORIOURBANIZZATO",
    popuplayertitle: 'PERIMETRO DEL TERRITORIO URBANIZZATO',
    creationdate: '2026-03-04 11:16:43',
    interactive: true,
    style: style_PERIMETRODELTERRITORIOURBANIZZATO,
});
function load_PERIMETRODELTERRITORIOURBANIZZATO_data() {
    var format_PERIMETRODELTERRITORIOURBANIZZATO = new ol.format.GeoJSON();
    var features_PERIMETRODELTERRITORIOURBANIZZATO = format_PERIMETRODELTERRITORIOURBANIZZATO.readFeatures(json_PERIMETRODELTERRITORIOURBANIZZATO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_PERIMETRODELTERRITORIOURBANIZZATO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/PERIMETRODELTERRITORIOURBANIZZATO.png"/><b>PERIMETRO DEL TERRITORIO URBANIZZATO</b>'
    });
    lyr_PERIMETRODELTERRITORIOURBANIZZATO.setSource(jsonSource_PERIMETRODELTERRITORIOURBANIZZATO);
    lyr_PERIMETRODELTERRITORIOURBANIZZATO.set(
    "title", '<img src="styles/legend/PERIMETRODELTERRITORIOURBANIZZATO.png"/>PERIMETRO DEL TERRITORIO URBANIZZATO'
    );
var featureCounter_PERIMETRODELTERRITORIOURBANIZZATO = 1;
jsonSource_PERIMETRODELTERRITORIOURBANIZZATO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_PERIMETRODELTERRITORIOURBANIZZATO++);
    feature.set("layerObject", lyr_PERIMETRODELTERRITORIOURBANIZZATO);
});        
jsonSource_PERIMETRODELTERRITORIOURBANIZZATO.addFeatures(features_PERIMETRODELTERRITORIOURBANIZZATO);
}

var lyr_FogliCatastali = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FogliCatastali',
    source: new ol.source.Vector(),
maxResolution:28004.466152261964,
 minResolution:5.600893230452393,

    permalink: "FogliCatastali",
    popuplayertitle: 'Fogli Catastali',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_FogliCatastali,
});
function load_FogliCatastali_data() {
    var format_FogliCatastali = new ol.format.GeoJSON();
    var features_FogliCatastali = format_FogliCatastali.readFeatures(json_FogliCatastali, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_FogliCatastali = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FogliCatastali.png"/><b>Fogli Catastali</b>'
    });
    lyr_FogliCatastali.setSource(jsonSource_FogliCatastali);
    lyr_FogliCatastali.set(
    "title", '<img src="styles/legend/FogliCatastali.png"/>Fogli Catastali'
    );
var featureCounter_FogliCatastali = 1;
jsonSource_FogliCatastali.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_FogliCatastali++);
    feature.set("layerObject", lyr_FogliCatastali);
});        
jsonSource_FogliCatastali.addFeatures(features_FogliCatastali);
}

var lyr_CONFINE_COMUNALE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> CONFINE_COMUNALE',
    source: new ol.source.Vector(), 
    permalink: "CONFINE_COMUNALE",
    popuplayertitle: 'CONFINE_COMUNALE',
    creationdate: '2026-03-04 11:16:43',
    interactive: false,
    style: style_CONFINE_COMUNALE,
});
function load_CONFINE_COMUNALE_data() {
    var format_CONFINE_COMUNALE = new ol.format.GeoJSON();
    var features_CONFINE_COMUNALE = format_CONFINE_COMUNALE.readFeatures(json_CONFINE_COMUNALE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_CONFINE_COMUNALE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CONFINE_COMUNALE.png"/><b>CONFINE_COMUNALE</b>'
    });
    lyr_CONFINE_COMUNALE.setSource(jsonSource_CONFINE_COMUNALE);
    lyr_CONFINE_COMUNALE.set(
    "title", '<img src="styles/legend/CONFINE_COMUNALE.png"/>CONFINE_COMUNALE'
    );
var featureCounter_CONFINE_COMUNALE = 1;
jsonSource_CONFINE_COMUNALE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CONFINE_COMUNALE++);
    feature.set("layerObject", lyr_CONFINE_COMUNALE);
});        
jsonSource_CONFINE_COMUNALE.addFeatures(features_CONFINE_COMUNALE);
}

// Funzione per caricare e aggiornare i layer uno alla volta
    // Array per i layer visibili/non visibili all'avvio (solo layer vettori e raster)
    var layersVisibleOnStart = [
        {layer: lyr_Acque, source: 'Acque'},{layer: lyr_Strade, source: 'Strade'},{layer: lyr_Particelle, source: 'Particelle'},{layer: lyr_Fabbricati, source: 'Fabbricati'},{layer: lyr_NumeriParticelle, source: 'NumeriParticelle'},{layer: lyr_STRADEEAREENONCENSITEDIPRG, source: 'STRADEEAREENONCENSITEDIPRG'},{layer: lyr_CORSIDACQUADIPRG, source: 'CORSIDACQUADIPRG'},{layer: lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO, source: 'VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO'},{layer: lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE, source: 'AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE'},{layer: lyr_TRATTUROLAQUILAFOGGIA, source: 'TRATTUROLAQUILAFOGGIA'},{layer: lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO, source: 'AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO'},{layer: lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE, source: 'PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE'},{layer: lyr_AREEDIRISPETTODEICORSIDACQUA, source: 'AREEDIRISPETTODEICORSIDACQUA'},{layer: lyr_VERDEPRIVATO, source: 'VERDEPRIVATO'},{layer: lyr_F3_4AREACIMITERIALE, source: 'F3_4AREACIMITERIALE'},{layer: lyr_F3_3DISCARICA, source: 'F3_3DISCARICA'},{layer: lyr_F3_2DEPURATORE, source: 'F3_2DEPURATORE'},{layer: lyr_F3_1ATTREZZATURETECNOLOGICHE, source: 'F3_1ATTREZZATURETECNOLOGICHE'},{layer: lyr_EXF2SERVIZIDIINTERESSEGENERALE, source: 'EXF2SERVIZIDIINTERESSEGENERALE'},{layer: lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE, source: 'F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE'},{layer: lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA, source: 'F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA'},{layer: lyr_E4UNITADIVICINATO, source: 'E4UNITADIVICINATO'},{layer: lyr_E3ZONAAGRICOLADITUTELA, source: 'E3ZONAAGRICOLADITUTELA'},{layer: lyr_E2ZONAAGRICOLADIPREGIO, source: 'E2ZONAAGRICOLADIPREGIO'},{layer: lyr_E1ZONAAGRICOLANORMALE, source: 'E1ZONAAGRICOLANORMALE'},{layer: lyr_D5PIANOPERATTIVITAPRODUTTIVE, source: 'D5PIANOPERATTIVITAPRODUTTIVE'},{layer: lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI, source: 'D4PIANIPERINSEDIAMENTIPRODUTTIVI'},{layer: lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE, source: 'D3ZONEPERATTIVITARICETTIVEETURISTICHE'},{layer: lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale, source: 'D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale'},{layer: lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE, source: 'D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE'},{layer: lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE, source: 'COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE'},{layer: lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE, source: 'COMPARTIDIPREVISIONECOMEDAPRGVIGENTE'},{layer: lyr_PEEPPRGVIGENTE, source: 'PEEPPRGVIGENTE'},{layer: lyr_C4areediconcentrazionedelleattrezzaturecollettive, source: 'C4areediconcentrazionedelleattrezzaturecollettive'},{layer: lyr_C4CUEBORGOFORO, source: 'C4CUEBORGOFORO'},{layer: lyr_C3areediconcentrazionedelleattrezzaturecollettive, source: 'C3areediconcentrazionedelleattrezzaturecollettive'},{layer: lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO, source: 'C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO'},{layer: lyr_C2areediconcentrazionedelleattrezzaturecollettive, source: 'C2areediconcentrazionedelleattrezzaturecollettive'},{layer: lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO, source: 'C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO'},{layer: lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA, source: 'C1ESPANSIONEADEDIFICAZIONEDIRETTA'},{layer: lyr_B3COMPLETAMENTOABASSADENSITA, source: 'B3COMPLETAMENTOABASSADENSITA'},{layer: lyr_B2COMPLETAMENTOAMEDIADENSITA, source: 'B2COMPLETAMENTOAMEDIADENSITA'},{layer: lyr_B1COMPLETAMENTOADALTADENSITA, source: 'B1COMPLETAMENTOADALTADENSITA'},{layer: lyr_ACENTROSTORICO, source: 'ACENTROSTORICO'},{layer: lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI, source: 'AREADIRISPETTODEGLIIMPIANTIRIPETITORI'},{layer: lyr_AREADIRISPETTODELDEPURATORE, source: 'AREADIRISPETTODELDEPURATORE'},{layer: lyr_VINCOLODIRISPETTOCIMITERIALE, source: 'VINCOLODIRISPETTOCIMITERIALE'},{layer: lyr_VINCOLOARCHEOLOGICO, source: 'VINCOLOARCHEOLOGICO'},{layer: lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE, source: 'EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE'},{layer: lyr_NUMEROEDIFICI, source: 'NUMEROEDIFICI'},{layer: lyr_PARCOURBANOATTREZZATO, source: 'PARCOURBANOATTREZZATO'},{layer: lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE, source: 'AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE'},{layer: lyr_PARCHEGGI, source: 'PARCHEGGI'},{layer: lyr_areeaserviziodegliEDIFICIPUBBLICI, source: 'areeaserviziodegliEDIFICIPUBBLICI'},{layer: lyr_EDIFICIPUBBLICI, source: 'EDIFICIPUBBLICI'},{layer: lyr_AREEDICONCENTRAZIONEDEGLISTANDARD, source: 'AREEDICONCENTRAZIONEDEGLISTANDARD'},{layer: lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili, source: 'AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili'},{layer: lyr_VIABILITAESISTENTE, source: 'VIABILITAESISTENTE'},{layer: lyr_VIABILITADIPROGETTO, source: 'VIABILITADIPROGETTO'},{layer: lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI, source: 'AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI'},{layer: lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI, source: 'AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI'},{layer: lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO, source: 'VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO'},{layer: lyr_PERIMETRODELTERRITORIOURBANIZZATO, source: 'PERIMETRODELTERRITORIOURBANIZZATO'},{layer: lyr_FogliCatastali, source: 'FogliCatastali'},{layer: lyr_CONFINE_COMUNALE, source: 'CONFINE_COMUNALE'}
    ];
    var layersHiddenOnStart = [
        {layer: lyr_STRADARIO, source: 'STRADARIO'},{layer: lyr_CIVICI, source: 'CIVICI'}
    ];
    
// Funzione per ottenere il nome del progetto dall'URL
	function getProjectName() {
		const path = window.location.pathname; // Percorso completo del file
		const htmlIndex = path.lastIndexOf('.html'); // Trova la posizione di ".html"

		if (htmlIndex === -1) return 'default'; // Se non trova ".html", ritorna valore di fallback

		// Trova la barra "/" prima di ".html"
		const slashBeforeHtml = path.lastIndexOf('/', htmlIndex);
		if (slashBeforeHtml === -1) return 'default';

		// Calcola da dove iniziare a prendere i caratteri prima della barra
		const extractStart = slashBeforeHtml - 20;
		if (extractStart >= 0) {
			return path.substring(slashBeforeHtml - 20, slashBeforeHtml);
		} else if (slashBeforeHtml >= 15) {
			return path.substring(slashBeforeHtml - 15, slashBeforeHtml);
		} else if (slashBeforeHtml >= 10) {
			return path.substring(slashBeforeHtml - 10, slashBeforeHtml);
		} else {
			return 'default'; // Se troppo corto, ritorna "default"
		}
	}
    
    // Ottieni un database IndexedDB per i layer, aprilo una volta sola
	let dbInstance = null;
	async function getDatabaseForLayers(projectName) {
		if (dbInstance) return dbInstance; // già aperto
		dbInstance = await idb.openDB(`${projectName}_layerDataCache`, 1, {
			upgrade(db) {
				if (!db.objectStoreNames.contains('layers')) {
					db.createObjectStore('layers', { keyPath: 'key' });
				}
			},
		});
		return dbInstance;
	}

    // Salva i dati nel database IndexedDB con il nome del progetto
    async function saveLayerToIndexedDB(key, data) {
        const db = await getDatabaseForLayers(getProjectName());
        await db.put('layers', { key: `${key}`, value: data });
    }
    
    // Carica i dati dal database IndexedDB con il nome del progetto
    async function loadLayerFromIndexedDB(key) {
        const db = await getDatabaseForLayers(getProjectName());
        const rec = await db.get('layers', key);

        if (!rec) return null;

        // Verifica se è nel formato VECCHIO (salvato come stringa JSON)
        if (typeof rec.value === 'string') {
            try {
                // Cancella e riscrivi nel nuovo formato oggetto
                const parsed = JSON.parse(rec.value);
                await saveLayerToIndexedDB(key, parsed); // riscrive come oggetto
                return parsed;
            } catch (e) {
                console.warn(`[Cache] Il dato ${key} è corrotto o non compatibile. Verrà ignorato.`);
                await deleteLayerFromIndexedDB(key);
                return null;
            }
        }
        return rec.value;
    }

    // Salva un file JavaScript nella cache con il nome del progetto
    async function saveLayerFileToCache(projectName, fileName, dataObj, layerDate) {
	  // salvo l'oggetto JSON
	  await saveLayerToIndexedDB(
		`o_files_${projectName}_${fileName}`,
		{ json: dataObj, layerdate: layerDate }
	  );
	}

    // Carica un file JavaScript dalla cache con il nome del progetto
	async function loadLayerFileFromCache(projectName, fileName) {
	  // loadLayerFromIndexedDB ora restituisce già l'oggetto {json, layerdate}
	  const record = await loadLayerFromIndexedDB(`o_files_${projectName}_${fileName}`);
	  return record || null;
	}
	
	// Funzione per caricare il JSON source
    async function loadJSON(projectName, fileName, layerDate) {
        return new Promise((resolve, reject) => {
            // Carica il file dalla cache
            async function tryCache() {                
                const cachedFile = await loadLayerFileFromCache(projectName, fileName);
                if (cachedFile && cachedFile.layerdate === layerDate) {
					console.log(`[Cache] Load ${fileName} from ${projectName} cache - ${layerDate}`);
					// assegno direttamente la variabile JS
					const varName = `json_${fileName}`;
					window[varName] = cachedFile.json;       // <— oggetto già pronto
					resolve(fileName);
					return;
                } else if (cachedFile) {
                    console.log(`[Cache] Outdated cache for ${fileName} in ${projectName}. CachedDate=${cachedFile.layerdate}, NewDate=${layerDate}`);
                    tryLoad(`layers/${fileName}.js`);
                } else {
                    console.log(`[Cache] No cache for ${fileName} in ${projectName}. Downloading...`);
                    tryLoad(`layers/${fileName}.js`);
                }
            }
            tryCache();

            // Scarica il file dalla rete e salva nella cache
            let triedFallback = false;
            function tryLoad(src) {
                const script = document.createElement('script');
                script.src = src;
                script.onload = async () => {
                    const varName = `json_${fileName}`;
					const dataObj = window[varName];
					if (!dataObj) {
					  return reject(new Error(`Variabile ${varName} non trovata dopo il caricamento di ${src}`));
					}
					console.log(`[Network] Save ${fileName} to ${projectName} cache - ${layerDate}`);
					await saveLayerFileToCache(projectName, fileName, dataObj, layerDate);
					resolve(fileName);
                };
                document.head.appendChild(script);
            }                        
        });
    }
	
    // Carico i dati nei layer
    async function loadLayers() {
        try {
            const projectName = getProjectName();

            for (const { layer, source } of layersVisibleOnStart) {
                const layerDate = layer.get("creationdate");
                await loadJSON(projectName, source, layerDate); // Carica il file dalla cache o dalla rete
                window[`load_${source}_data`](); // Svolgo tutte le function load_ sopra
            }
    
            for (const { layer, source } of layersHiddenOnStart) {
                const layerDate = layer.get("creationdate");
                await loadJSON(projectName, source, layerDate); // Carica il file dalla cache o dalla rete
                window[`load_${source}_data`](); // Svolgo tutte le function load_ sopra
            }
    
            // Quando tutti i layer sono stati caricati e aggiornati, emetti 'layersLoaded'
            window.layersLoadedFlag = true;
            const layersLoaded = new Event('layersLoaded');
            document.dispatchEvent(layersLoaded);
        } catch (error) {
            console.error("Errore nel caricamento dei layer:", error);
            throw error;
        }
    }
    // Esegui il caricamento dei layer una volta che il DOM è pronto
    document.addEventListener("DOMContentLoaded", () => {
        loadLayers();  // Inizia il caricamento dei layer uno per volta
    });

var group_PERIMETRODELTERRITORIOURBANIZZATO = new ol.layer.Group({
                                layers: [lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI,lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI,lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO,lyr_PERIMETRODELTERRITORIOURBANIZZATO,],
                                openInLayerSwitcher: false,
                                title: 'PERIMETRO DEL TERRITORIO URBANIZZATO'});
var group_VIABILITA = new ol.layer.Group({
                                layers: [lyr_VIABILITAESISTENTE,lyr_VIABILITADIPROGETTO,],
                                openInLayerSwitcher: false,
                                title: 'VIABILITA'});
var group_AREEASTANDARDURBANISTICI = new ol.layer.Group({
                                layers: [lyr_PARCOURBANOATTREZZATO,lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE,lyr_PARCHEGGI,lyr_areeaserviziodegliEDIFICIPUBBLICI,lyr_EDIFICIPUBBLICI,lyr_AREEDICONCENTRAZIONEDEGLISTANDARD,lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili,],
                                openInLayerSwitcher: false,
                                title: 'AREE A STANDARD URBANISTICI'});
var group_RECUPERODELPATRIMONIOEDILIZIOINAMBITORURALE = new ol.layer.Group({
                                layers: [lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE,lyr_NUMEROEDIFICI,],
                                openInLayerSwitcher: false,
                                title: 'RECUPERO DEL PATRIMONIO EDILIZIO IN AMBITO RURALE'});
var group_VINCOLI = new ol.layer.Group({
                                layers: [lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI,lyr_AREADIRISPETTODELDEPURATORE,lyr_VINCOLODIRISPETTOCIMITERIALE,lyr_VINCOLOARCHEOLOGICO,],
                                openInLayerSwitcher: false,
                                title: 'VINCOLI'});
var group_ZONAA = new ol.layer.Group({
                                layers: [lyr_ACENTROSTORICO,],
                                openInLayerSwitcher: false,
                                title: 'ZONA A'});
var group_ZONEB = new ol.layer.Group({
                                layers: [lyr_B3COMPLETAMENTOABASSADENSITA,lyr_B2COMPLETAMENTOAMEDIADENSITA,lyr_B1COMPLETAMENTOADALTADENSITA,],
                                openInLayerSwitcher: false,
                                title: 'ZONE B'});
var group_ZONEC = new ol.layer.Group({
                                layers: [lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE,lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE,lyr_PEEPPRGVIGENTE,lyr_C4areediconcentrazionedelleattrezzaturecollettive,lyr_C4CUEBORGOFORO,lyr_C3areediconcentrazionedelleattrezzaturecollettive,lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO,lyr_C2areediconcentrazionedelleattrezzaturecollettive,lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO,lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA,],
                                openInLayerSwitcher: false,
                                title: 'ZONE C'});
var group_ZONED = new ol.layer.Group({
                                layers: [lyr_D5PIANOPERATTIVITAPRODUTTIVE,lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI,lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE,lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale,lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE,],
                                openInLayerSwitcher: false,
                                title: 'ZONE D'});
var group_ZONEE = new ol.layer.Group({
                                layers: [lyr_E4UNITADIVICINATO,lyr_E3ZONAAGRICOLADITUTELA,lyr_E2ZONAAGRICOLADIPREGIO,lyr_E1ZONAAGRICOLANORMALE,],
                                openInLayerSwitcher: false,
                                title: 'ZONE E'});
var group_ZONEF = new ol.layer.Group({
                                layers: [lyr_F3_4AREACIMITERIALE,lyr_F3_3DISCARICA,lyr_F3_2DEPURATORE,lyr_F3_1ATTREZZATURETECNOLOGICHE,lyr_EXF2SERVIZIDIINTERESSEGENERALE,lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE,lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA,],
                                openInLayerSwitcher: false,
                                title: 'ZONE F'});
var group_ZONEDITUTELARISPETTOESALVAGUARDIADEIVALORIAMBIENTALI = new ol.layer.Group({
                                layers: [lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO,lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE,lyr_TRATTUROLAQUILAFOGGIA,lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO,lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE,lyr_AREEDIRISPETTODEICORSIDACQUA,lyr_VERDEPRIVATO,],
                                openInLayerSwitcher: false,
                                title: 'ZONE DI TUTELA RISPETTO E SALVAGUARDIA DEI VALORI AMBIENTALI'});
var group_PRG = new ol.layer.Group({
                                layers: [lyr_STRADEEAREENONCENSITEDIPRG,lyr_CORSIDACQUADIPRG,group_ZONEDITUTELARISPETTOESALVAGUARDIADEIVALORIAMBIENTALI,group_ZONEF,group_ZONEE,group_ZONED,group_ZONEC,group_ZONEB,group_ZONAA,group_VINCOLI,group_RECUPERODELPATRIMONIOEDILIZIOINAMBITORURALE,group_AREEASTANDARDURBANISTICI,group_VIABILITA,group_PERIMETRODELTERRITORIOURBANIZZATO,],
                                openInLayerSwitcher: false,
                                title: 'PRG'});
var group_TOPONOMASTICA = new ol.layer.Group({
                                layers: [lyr_STRADARIO,lyr_CIVICI,],
                                openInLayerSwitcher: false,
                                title: 'TOPONOMASTICA'});
var group_CATASTALE = new ol.layer.Group({
                                layers: [lyr_Acque,lyr_Strade,lyr_Particelle,lyr_Fabbricati,lyr_NumeriParticelle,],
                                openInLayerSwitcher: false,
                                title: 'CATASTALE'});

lyr_OpenStreetMap.setVisible(false);lyr_GoogleStrade.setVisible(false);lyr_GoogleSatellite.setVisible(false);lyr_GoogleIbrido.setVisible(true);lyr_Acque.setVisible(true);lyr_Strade.setVisible(true);lyr_Particelle.setVisible(true);lyr_Fabbricati.setVisible(true);lyr_NumeriParticelle.setVisible(true);lyr_STRADARIO.setVisible(false);lyr_CIVICI.setVisible(false);lyr_STRADEEAREENONCENSITEDIPRG.setVisible(true);lyr_CORSIDACQUADIPRG.setVisible(true);lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.setVisible(true);lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.setVisible(true);lyr_TRATTUROLAQUILAFOGGIA.setVisible(true);lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.setVisible(true);lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.setVisible(true);lyr_AREEDIRISPETTODEICORSIDACQUA.setVisible(true);lyr_VERDEPRIVATO.setVisible(true);lyr_F3_4AREACIMITERIALE.setVisible(true);lyr_F3_3DISCARICA.setVisible(true);lyr_F3_2DEPURATORE.setVisible(true);lyr_F3_1ATTREZZATURETECNOLOGICHE.setVisible(true);lyr_EXF2SERVIZIDIINTERESSEGENERALE.setVisible(true);lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.setVisible(true);lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.setVisible(true);lyr_E4UNITADIVICINATO.setVisible(true);lyr_E3ZONAAGRICOLADITUTELA.setVisible(true);lyr_E2ZONAAGRICOLADIPREGIO.setVisible(true);lyr_E1ZONAAGRICOLANORMALE.setVisible(true);lyr_D5PIANOPERATTIVITAPRODUTTIVE.setVisible(true);lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI.setVisible(true);lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE.setVisible(true);lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.setVisible(true);lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.setVisible(true);lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.setVisible(true);lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.setVisible(true);lyr_PEEPPRGVIGENTE.setVisible(true);lyr_C4areediconcentrazionedelleattrezzaturecollettive.setVisible(true);lyr_C4CUEBORGOFORO.setVisible(true);lyr_C3areediconcentrazionedelleattrezzaturecollettive.setVisible(true);lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.setVisible(true);lyr_C2areediconcentrazionedelleattrezzaturecollettive.setVisible(true);lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.setVisible(true);lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA.setVisible(true);lyr_B3COMPLETAMENTOABASSADENSITA.setVisible(true);lyr_B2COMPLETAMENTOAMEDIADENSITA.setVisible(true);lyr_B1COMPLETAMENTOADALTADENSITA.setVisible(true);lyr_ACENTROSTORICO.setVisible(true);lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI.setVisible(true);lyr_AREADIRISPETTODELDEPURATORE.setVisible(true);lyr_VINCOLODIRISPETTOCIMITERIALE.setVisible(true);lyr_VINCOLOARCHEOLOGICO.setVisible(true);lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.setVisible(true);lyr_NUMEROEDIFICI.setVisible(true);lyr_PARCOURBANOATTREZZATO.setVisible(true);lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.setVisible(true);lyr_PARCHEGGI.setVisible(true);lyr_areeaserviziodegliEDIFICIPUBBLICI.setVisible(true);lyr_EDIFICIPUBBLICI.setVisible(true);lyr_AREEDICONCENTRAZIONEDEGLISTANDARD.setVisible(true);lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.setVisible(true);lyr_VIABILITAESISTENTE.setVisible(true);lyr_VIABILITADIPROGETTO.setVisible(true);lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.setVisible(true);lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.setVisible(true);lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.setVisible(true);lyr_PERIMETRODELTERRITORIOURBANIZZATO.setVisible(true);lyr_FogliCatastali.setVisible(true);lyr_CONFINE_COMUNALE.setVisible(true);
var layersList = [lyr_OpenStreetMap,lyr_GoogleStrade,lyr_GoogleSatellite,lyr_GoogleIbrido,group_CATASTALE,group_TOPONOMASTICA,group_PRG,lyr_FogliCatastali,lyr_CONFINE_COMUNALE];
lyr_Acque.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_Strade.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_Particelle.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', 'Det_PRG': 'Det_PRG', 'CATASTO': 'CATASTO', });
lyr_Fabbricati.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_NumeriParticelle.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_STRADARIO.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'maxspeed': 'maxspeed', 'highway': 'highway', 'path': 'path', 'join_DENOM_COMPLETA': 'join_DENOM_COMPLETA', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', });
lyr_CIVICI.set('fieldAliases', {'fid': 'fid', 'CODICE_COMUNE': 'CODICE_COMUNE', 'PROGR_NAZIONALE': 'PROGR_NAZIONALE', 'PROGR_STRADA': 'PROGR_STRADA', 'PROGR_CIVICO': 'PROGR_CIVICO', 'CIV': 'CIV', 'ESPONENTE': 'ESPONENTE', 'SEZIONE_DI_CENSIMENTO': 'SEZIONE_DI_CENSIMENTO', 'COORDINATA_X': 'COORDINATA_X', 'COORDINATA_Y': 'COORDINATA_Y', 'COORDINATA_Z': 'COORDINATA_Z', 'VIA': 'VIA', 'VIA E CIVICO': 'VIA E CIVICO', 'CIVICO': 'CIVICO', });
lyr_STRADEEAREENONCENSITEDIPRG.set('fieldAliases', {'fid': 'fid', 'Area_mq': 'Area_mq', });
lyr_CORSIDACQUADIPRG.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_TRATTUROLAQUILAFOGGIA.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AREEDIRISPETTODEICORSIDACQUA.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_VERDEPRIVATO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_F3_4AREACIMITERIALE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_F3_3DISCARICA.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_F3_2DEPURATORE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_F3_1ATTREZZATURETECNOLOGICHE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EXF2SERVIZIDIINTERESSEGENERALE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_E4UNITADIVICINATO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_E3ZONAAGRICOLADITUTELA.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_E2ZONAAGRICOLADIPREGIO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_E1ZONAAGRICOLANORMALE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_D5PIANOPERATTIVITAPRODUTTIVE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PEEPPRGVIGENTE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_C4areediconcentrazionedelleattrezzaturecollettive.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_C4CUEBORGOFORO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_C3areediconcentrazionedelleattrezzaturecollettive.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_C2areediconcentrazionedelleattrezzaturecollettive.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_B3COMPLETAMENTOABASSADENSITA.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_B2COMPLETAMENTOAMEDIADENSITA.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_B1COMPLETAMENTOADALTADENSITA.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ACENTROSTORICO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AREADIRISPETTODELDEPURATORE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_VINCOLODIRISPETTOCIMITERIALE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_VINCOLOARCHEOLOGICO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_NUMEROEDIFICI.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PARCOURBANOATTREZZATO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PARCHEGGI.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_areeaserviziodegliEDIFICIPUBBLICI.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EDIFICIPUBBLICI.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AREEDICONCENTRAZIONEDEGLISTANDARD.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_VIABILITAESISTENTE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_VIABILITADIPROGETTO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'path': 'path', });
lyr_PERIMETRODELTERRITORIOURBANIZZATO.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_FogliCatastali.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_CONFINE_COMUNALE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Acque.set('fieldImages', {'fid': '', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Strade.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Particelle.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'Det_PRG': '', 'CATASTO': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Fabbricati.set('fieldImages', {'fid': '', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_NumeriParticelle.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_STRADARIO.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'Hidden', 'name': 'Hidden', 'maxspeed': 'Hidden', 'highway': 'Hidden', 'path': 'Hidden', 'join_DENOM_COMPLETA': 'TextEdit', 'n': 'Hidden', 'distance': 'Hidden', 'feature_x': 'TextEdit', 'feature_y': 'TextEdit', 'nearest_x': 'TextEdit', 'nearest_y': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CIVICI.set('fieldImages', {'fid': 'TextEdit', 'CODICE_COMUNE': 'Hidden', 'PROGR_NAZIONALE': 'Hidden', 'PROGR_STRADA': 'Hidden', 'PROGR_CIVICO': 'Hidden', 'CIV': 'Range', 'ESPONENTE': 'TextEdit', 'SEZIONE_DI_CENSIMENTO': 'Range', 'COORDINATA_X': 'TextEdit', 'COORDINATA_Y': 'TextEdit', 'COORDINATA_Z': 'Range', 'VIA': 'TextEdit', 'VIA E CIVICO': 'TextEdit', 'CIVICO': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_STRADEEAREENONCENSITEDIPRG.set('fieldImages', {'fid': 'TextEdit', 'Area_mq': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CORSIDACQUADIPRG.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_TRATTUROLAQUILAFOGGIA.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREEDIRISPETTODEICORSIDACQUA.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_VERDEPRIVATO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_F3_4AREACIMITERIALE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_F3_3DISCARICA.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_F3_2DEPURATORE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_F3_1ATTREZZATURETECNOLOGICHE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_EXF2SERVIZIDIINTERESSEGENERALE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_E4UNITADIVICINATO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_E3ZONAAGRICOLADITUTELA.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_E2ZONAAGRICOLADIPREGIO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_E1ZONAAGRICOLANORMALE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_D5PIANOPERATTIVITAPRODUTTIVE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_PEEPPRGVIGENTE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_C4areediconcentrazionedelleattrezzaturecollettive.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_C4CUEBORGOFORO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_C3areediconcentrazionedelleattrezzaturecollettive.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_C2areediconcentrazionedelleattrezzaturecollettive.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_B3COMPLETAMENTOABASSADENSITA.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_B2COMPLETAMENTOAMEDIADENSITA.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_B1COMPLETAMENTOADALTADENSITA.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_ACENTROSTORICO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREADIRISPETTODELDEPURATORE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_VINCOLODIRISPETTOCIMITERIALE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_VINCOLOARCHEOLOGICO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_NUMEROEDIFICI.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_PARCOURBANOATTREZZATO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_PARCHEGGI.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_areeaserviziodegliEDIFICIPUBBLICI.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_EDIFICIPUBBLICI.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREEDICONCENTRAZIONEDEGLISTANDARD.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_VIABILITAESISTENTE.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_VIABILITADIPROGETTO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHand': 'Hidden', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHand': 'Hidden', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHandle': 'Hidden', 'Text': 'Hidden', 'path': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_PERIMETRODELTERRITORIOURBANIZZATO.set('fieldImages', {'fid': 'Hidden', 'Layer': 'TextEdit', 'PaperSpace': 'Hidden', 'SubClasses': 'Hidden', 'Linetype': 'Hidden', 'EntityHand': 'Hidden', 'Text': 'Hidden', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FogliCatastali.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CONFINE_COMUNALE.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Acque.set('fieldLabels', {'fid': 'no label', 'Codice_comune': 'no label', 'Foglio': 'no label', 'Mappale': 'no label', 'Allegato': 'no label', 'Sviluppo': 'no label', 'Htxt': 'no label', 'Rtxt': 'no label', 'Xtxt': 'no label', 'Ytxt': 'no label', });
lyr_Strade.set('fieldLabels', {'fid': 'no label', 'Codice_comune': 'no label', 'Foglio': 'no label', 'Mappale': 'no label', 'Allegato': 'no label', 'Sviluppo': 'no label', 'Htxt': 'no label', 'Rtxt': 'no label', 'Xtxt': 'no label', 'Ytxt': 'no label', });
lyr_Particelle.set('fieldLabels', {'fid': 'hidden field', 'Codice_comune': 'hidden field', 'Foglio': 'hidden field', 'Mappale': 'hidden field', 'Allegato': 'hidden field', 'Sviluppo': 'hidden field', 'Htxt': 'hidden field', 'Rtxt': 'hidden field', 'Xtxt': 'hidden field', 'Ytxt': 'hidden field', 'Det_PRG': 'no label', 'CATASTO': 'header label - always visible', });
lyr_Fabbricati.set('fieldLabels', {'fid': 'hidden field', 'Codice_comune': 'hidden field', 'Foglio': 'hidden field', 'Mappale': 'no label', 'Allegato': 'hidden field', 'Sviluppo': 'hidden field', 'Htxt': 'hidden field', 'Rtxt': 'hidden field', 'Xtxt': 'hidden field', 'Ytxt': 'hidden field', });
lyr_NumeriParticelle.set('fieldLabels', {'fid': 'no label', 'Codice_comune': 'no label', 'Foglio': 'no label', 'Mappale': 'no label', 'Allegato': 'no label', 'Sviluppo': 'no label', 'Htxt': 'no label', 'Rtxt': 'no label', 'Xtxt': 'no label', 'Ytxt': 'no label', });
lyr_STRADARIO.set('fieldLabels', {'fid': 'hidden field', 'join_DENOM_COMPLETA': 'no label', 'feature_x': 'hidden field', 'feature_y': 'hidden field', 'nearest_x': 'hidden field', 'nearest_y': 'hidden field', });
lyr_CIVICI.set('fieldLabels', {'fid': 'hidden field', 'CIV': 'hidden field', 'ESPONENTE': 'hidden field', 'SEZIONE_DI_CENSIMENTO': 'hidden field', 'COORDINATA_X': 'hidden field', 'COORDINATA_Y': 'hidden field', 'COORDINATA_Z': 'hidden field', 'VIA': 'hidden field', 'VIA E CIVICO': 'no label', 'CIVICO': 'hidden field', });
lyr_STRADEEAREENONCENSITEDIPRG.set('fieldLabels', {'fid': 'no label', 'Area_mq': 'no label', });
lyr_CORSIDACQUADIPRG.set('fieldLabels', {'Layer': 'no label', 'Text': 'no label', });
lyr_VERDEDIRISPETTOEDIFILTROINAMBITOURBANIZZATO.set('fieldLabels', {'Layer': 'no label', });
lyr_AREADIRIQUALIFICAZIONEAMBIENTALEDELLECAVEDIPIANADIMAREEBOSCOMEZZANOTTE.set('fieldLabels', {'Layer': 'no label', });
lyr_TRATTUROLAQUILAFOGGIA.set('fieldLabels', {'Layer': 'no label', });
lyr_AREEDITUTELADIFORMAZIONEBOSCHIVADIPREGIO.set('fieldLabels', {'Layer': 'no label', });
lyr_PARCOFLUVIALEATTREZZATODELTORRENTESEREPENNE.set('fieldLabels', {'Layer': 'no label', });
lyr_AREEDIRISPETTODEICORSIDACQUA.set('fieldLabels', {'Layer': 'no label', });
lyr_VERDEPRIVATO.set('fieldLabels', {'Layer': 'no label', 'Text': 'no label', });
lyr_F3_4AREACIMITERIALE.set('fieldLabels', {'Layer': 'no label', });
lyr_F3_3DISCARICA.set('fieldLabels', {'Layer': 'no label', });
lyr_F3_2DEPURATORE.set('fieldLabels', {'Layer': 'no label', });
lyr_F3_1ATTREZZATURETECNOLOGICHE.set('fieldLabels', {'Layer': 'no label', });
lyr_EXF2SERVIZIDIINTERESSEGENERALE.set('fieldLabels', {'Layer': 'no label', });
lyr_F2ZONAPERATTIVITAESPOSITIVEEMANIFESTAZIONIFIERISTICHE.set('fieldLabels', {'Layer': 'no label', });
lyr_F1ZONEPERATTREZZATUREDISERVIZIOALLAMOBILITA.set('fieldLabels', {'Layer': 'no label', });
lyr_E4UNITADIVICINATO.set('fieldLabels', {'Layer': 'no label', });
lyr_E3ZONAAGRICOLADITUTELA.set('fieldLabels', {'Layer': 'no label', });
lyr_E2ZONAAGRICOLADIPREGIO.set('fieldLabels', {'Layer': 'no label', });
lyr_E1ZONAAGRICOLANORMALE.set('fieldLabels', {'Layer': 'no label', });
lyr_D5PIANOPERATTIVITAPRODUTTIVE.set('fieldLabels', {'Layer': 'no label', });
lyr_D4PIANIPERINSEDIAMENTIPRODUTTIVI.set('fieldLabels', {'Layer': 'no label', });
lyr_D3ZONEPERATTIVITARICETTIVEETURISTICHE.set('fieldLabels', {'Layer': 'no label', });
lyr_D2ESPANSIONEPERATTIVITAPROMISCUEcommercioinambitoresidenziale.set('fieldLabels', {'Layer': 'no label', });
lyr_D1AREEDIESPANSIONEDELLEATTIVITAPRODUTTIVESPARSE.set('fieldLabels', {'Layer': 'no label', });
lyr_COMPARTIINCORSODIATTUAZIONECOMEDAPRGVIGENTE.set('fieldLabels', {'Layer': 'no label', });
lyr_COMPARTIDIPREVISIONECOMEDAPRGVIGENTE.set('fieldLabels', {'Layer': 'no label', });
lyr_PEEPPRGVIGENTE.set('fieldLabels', {'Layer': 'no label', });
lyr_C4areediconcentrazionedelleattrezzaturecollettive.set('fieldLabels', {'Layer': 'no label', });
lyr_C4CUEBORGOFORO.set('fieldLabels', {'Layer': 'no label', });
lyr_C3areediconcentrazionedelleattrezzaturecollettive.set('fieldLabels', {'Layer': 'no label', });
lyr_C3ESPANSIONECOMPARTIDIPREVISIONEINAMBITOEXTRAURBANO.set('fieldLabels', {'Layer': 'no label', });
lyr_C2areediconcentrazionedelleattrezzaturecollettive.set('fieldLabels', {'Layer': 'no label', });
lyr_C2ESPANSIONECOMPARTIDIPREVISIONEINAMBITOURBANO.set('fieldLabels', {'Layer': 'no label', });
lyr_C1ESPANSIONEADEDIFICAZIONEDIRETTA.set('fieldLabels', {'Layer': 'no label', });
lyr_B3COMPLETAMENTOABASSADENSITA.set('fieldLabels', {'Layer': 'no label', });
lyr_B2COMPLETAMENTOAMEDIADENSITA.set('fieldLabels', {'Layer': 'no label', });
lyr_B1COMPLETAMENTOADALTADENSITA.set('fieldLabels', {'Layer': 'no label', });
lyr_ACENTROSTORICO.set('fieldLabels', {'Layer': 'no label', });
lyr_AREADIRISPETTODEGLIIMPIANTIRIPETITORI.set('fieldLabels', {'Layer': 'no label', 'Text': 'no label', });
lyr_AREADIRISPETTODELDEPURATORE.set('fieldLabels', {'Layer': 'no label', });
lyr_VINCOLODIRISPETTOCIMITERIALE.set('fieldLabels', {'Layer': 'no label', });
lyr_VINCOLOARCHEOLOGICO.set('fieldLabels', {'Layer': 'no label', 'Text': 'no label', });
lyr_EDIFICIOGGETTODIRECUPERODELPATRIMONIOEDILIZIORURALE.set('fieldLabels', {'Layer': 'no label', });
lyr_NUMEROEDIFICI.set('fieldLabels', {'Layer': 'hidden field', 'Text': 'no label', });
lyr_PARCOURBANOATTREZZATO.set('fieldLabels', {'Layer': 'no label', });
lyr_AREEPERATTREZZATURESPORTIVERICREATIVEDILIVELLOCOMPRENSORIALE.set('fieldLabels', {'Layer': 'no label', });
lyr_PARCHEGGI.set('fieldLabels', {'Layer': 'no label', 'Text': 'no label', });
lyr_areeaserviziodegliEDIFICIPUBBLICI.set('fieldLabels', {'Layer': 'no label', });
lyr_EDIFICIPUBBLICI.set('fieldLabels', {'Layer': 'no label', });
lyr_AREEDICONCENTRAZIONEDEGLISTANDARD.set('fieldLabels', {'Layer': 'no label', });
lyr_AREEPERATTREZZATURECOLLETTIVEimpiantisportivieassimilabili.set('fieldLabels', {'Layer': 'hidden field', 'Text': 'no label', });
lyr_VIABILITAESISTENTE.set('fieldLabels', {'Layer': 'no label', });
lyr_VIABILITADIPROGETTO.set('fieldLabels', {'Layer': 'no label', });
lyr_AREEESCLUSEDALPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.set('fieldLabels', {'Layer': 'no label', 'Text': 'no label', });
lyr_AREEREINCLUSENELPTUDARIPIANIFICAREATTUALMENTEINEDIFICABILI.set('fieldLabels', {'Layer': 'no label', 'Text': 'no label', });
lyr_VIABILITADICOLLEGAMENTOTERRITORIOURBANIZZATO.set('fieldLabels', {'Layer': 'no label', });
lyr_PERIMETRODELTERRITORIOURBANIZZATO.set('fieldLabels', {'Layer': 'no label', });
lyr_FogliCatastali.set('fieldLabels', {'fid': 'no label', 'Codice_comune': 'no label', 'Foglio': 'no label', 'Mappale': 'no label', 'Allegato': 'no label', 'Sviluppo': 'no label', 'Htxt': 'no label', 'Rtxt': 'no label', 'Xtxt': 'no label', 'Ytxt': 'no label', });
lyr_CONFINE_COMUNALE.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
