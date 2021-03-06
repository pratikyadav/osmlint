'use strict';
var turf = require('turf');
var users = require('./users.json');

// Filter features touched by list of users defined by users.json
module.exports = function(tileLayers, tile, writeData, done) {
  var layer = tileLayers.osm.osm;
  var result = layer.features.filter(function(val) {
    return users.hasOwnProperty(val.properties._user);
  });

  if (result.length > 0) {
    var fc = turf.featurecollection(result);
    writeData(JSON.stringify(fc) + '\n');
  }

  done(null, null);
};
