var map;
var sg = {lat: 1.355379, lng: 103.867744};

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  	center: {lat: 1.355379, lng: 103.867744},
    zoom: 12
  });

var marker = new google.maps.Marker({
		position: sg,
		map: map,
		title: 'First Marker!'
	});
}