'use strict'
var tileReduce = require('tile-reduce');
var turf = require('turf');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var fs = require('fs');
var area = JSON.parse(argv.area);

tileReduce({
    bbox: area,
    zoom: 12,
    map: path.join(__dirname, '/missing-highway-names-us.js'),
    sources: [{
      name: 'osm',
      mbtiles: argv.osm_mbtiles,
      raw: false
    }, {
      name: 'tiger',
      mbtiles: argv.tiger_mbtiles,
      raw: false
    }]
  })
  .on('reduce', function(result) {})
  .on('end', function() {});