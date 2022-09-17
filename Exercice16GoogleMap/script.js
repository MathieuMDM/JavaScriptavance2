let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.4654291, lng: -0.5612745 },
    zoom: 15,
  });
}