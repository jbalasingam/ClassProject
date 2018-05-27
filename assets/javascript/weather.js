//this script returns the weather data for the cities selected
$(".selectDestWarning").hide();
var AbsZero = 273;
var proxy = 'https://cors-anywhere.herokuapp.com/';
var APIKEY = "8a93b3dd0526e580ced4a3199d152e6d/"
//
var YTODEN  = {
            id: "UTODEN",
            city: "Denver",
            countryID : "US",
            lattitude : 39.7392,
            longitude : -104.9903,
}       

var YTOSFO  = {
    id: "YTOSFO",
    city: "San Francisco",
    countryID : "US",
    lattitude : 37.774929,
    longitude : -122.419418,
}   

var YTORIO  = {
    id: "YTORIO",
    city: "Rio de Janeiro",
    countryID : "BR",
    lattitude : -22,
    longitude : -42.5,
}   


var destinations = [YTODEN, YTOSFO, YTORIO];   


var startDate = parseInt((new Date('2012-08-10').getTime() / 1000).toFixed(0));
var endDate = parseInt((new Date('2012-12-10').getTime() / 1000).toFixed(0));



$(".submit").on("click", function() {
    //get the id of the current destination selected

    var ID = $('.option:selected').attr("id")

    if (ID != "NULL"){

        var city = destinations[ID].city;
        console.log(city)
        $(".selectDestWarning").hide();
        
    } else {

        $(".selectDestWarning").show();
        
    }
        
    
    // $.getJSON(proxy+"https://api.darksky.net/forecast/"+ APIKEY  + lattitude + "," + longitude + "," + startDate,function(snapshot){
    //     // var currentTemp = json.main.temp - AbsZero;
    //     console.log(snapshot.hourly.summary);
        
    // });

});//end on submit-on-click function