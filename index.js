let map = L.map('map').setView([-34.61315, -58.37723], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords, 13);
})

var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png');

var miniMap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false, 
        position: "bottomleft"
    }). addTo(map);

    new L.Control.scale({imperial:false}).addTo(map);
    