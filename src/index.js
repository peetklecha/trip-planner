var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoia2xlY2hhMTMiLCJhIjoiY2sxNmt4ZzJrMDI2MjNobm9zYjB5aW83aCJ9.Ylmfhkrctuv4g-mRRssvLA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
