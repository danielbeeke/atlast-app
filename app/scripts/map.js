define(['jquery', 'twigloader', 'leaflet'], function ($) {

  // create a map in the "map" div, set the view to a given place and zoom
  var map = L.map('leaflet', {
    attributionControl: false,
    zoomControl: false
  });

  window.featureLayer = L.geoJson().addTo(map);

  window.reloadMap = function () {
    $.getJSON('http://atlas.dev.atlastlab.com/atlas/geo-data?callback=?');
  }

  window.atlastGeodata = function(data) {
    L.tileLayer(data.tilesPath).addTo(map);

    map.fitBounds(data.bounds);

    $.each(data.locations, function(index, value) {
      featureLayer.addData(value.geojson);
    });

  }

  reloadMap();

});