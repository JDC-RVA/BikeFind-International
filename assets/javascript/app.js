$(document).ready(function(){
  // firebase database setup
var config = {
  apiKey: "AIzaSyAM1poplPY_SUqYYanI-ZwgAqrK0z_YnSM",
    authDomain: "bike-find-international.firebaseapp.com",
    databaseURL: "https://bike-find-international.firebaseio.com",
    projectId: "bike-find-international",
    storageBucket: "bike-find-international.appspot.com",
    messagingSenderId: "556431147211"
};
firebase.initializeApp(config);

// A variable to reference the database.
var database = firebase.database();

var location;

if (window.location.search.includes("use_location=true")) {
  setTimeout(function() {
    $("button.mapboxgl-ctrl-geolocate").click()
  });
}



$("#search-link1").on("click", function() {

  location = $("#user-input").val().trim();
  console.log(location)
  var newSearch = {
    location: location,
  }
  console.log(newSearch)

  database.ref().set(newSearch);

});



// CITYBIKE API
var queryURL = "http://api.citybik.es/v2/networks";
function ajaxCall() {

  // ajax call to citybike api
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
}

// calling the ajaxCall function
ajaxCall()
});