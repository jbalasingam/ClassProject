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
    lattitude : -22.9068,
    longitude : -43.1729,
}   

var tempTimeSeries = [];
var precipTimeSeries = [];
var humidTimeSeries = [];

var destinations = [YTODEN, YTOSFO, YTORIO];   


var startDate = parseInt((new Date('2012-08-30').getTime() / 1000).toFixed(0));
var endDate = parseInt((new Date('2012-08-31').getTime() / 1000).toFixed(0));



$(".submit").on("click", function() {
    //get the id of the current destination selected
    var ID = $('.option:selected').attr("id")
    //clear the arrays
    tempTimeSeries = [];
    precipTimeSeries = [];
    humidTimeSeries = [];

    //make sure that the user selects a destion before passing on a value to city
    if (ID != "NULL"){
        $(".selectDestWarning").hide();
        var city = destinations[ID].city;
        var lattitude = destinations[ID].lattitude;
        var longitude = destinations[ID].longitude;

        console.log(city);
        console.log(lattitude);
        console.log(longitude);

        var today = new Date('2017-08-27');
        var tomorrow = today.setDate(today.getDate() + 1)
        tomorrow = tomorrow/1000;
        
        var i;
        for (i = 0; i < 3; i++) { 

            var tomorrow = today.setDate(today.getDate() + i);
            tomorrow = tomorrow/1000;
            
            console.log(tomorrow);

            $.getJSON(proxy+"https://api.darksky.net/forecast/"+ APIKEY  + lattitude + "," + longitude + "," + tomorrow,function(snapshot){
                // var currentTemp = json.main.temp - AbsZero;
                console.log(snapshot);
                tempTimeSeries.push(snapshot.currently.temperature);
                precipTimeSeries.push(snapshot.currently.precipType);
                humidTimeSeries.push(snapshot.currently.humidity);
             });//end get json

        }
        
        console.log(tempTimeSeries);
        console.log(precipTimeSeries);
        console.log(humidTimeSeries);


    } else {

        $(".selectDestWarning").show();
        
    }//end if statement checking for NULL

    

});//end on submit-on-click function