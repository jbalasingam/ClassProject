// //firebase login authentication added by kyle
// var config = {
//   apiKey: "AIzaSyDs0SsPna9FyA2v3VYvR4pBToiOzEStXyw",
//   authDomain: "class-project-24004.firebaseapp.com",
//   databaseURL: "https://class-project-24004.firebaseio.com",
//   projectId: "class-project-24004",
//   storageBucket: "class-project-24004.appspot.com",
//   messagingSenderId: "560655777785"
// };
// firebase.initializeApp(config);






//this script returns the weather data for the cities selected
$(".selectDestWarning").hide();
var Constant = 32;
var fraction = 5/9;

var proxy = 'https://cors-anywhere.herokuapp.com/';
var APIKEY = "8a93b3dd0526e580ced4a3199d152e6d/"

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

var barData = [{
  'x': 1,
  'y': 5
}, {
  'x': 20,
  'y': 20
}, {
  'x': 40,
  'y': 10
}, {
  'x': 60,
  'y': 40
}, {
  'x': 80,
  'y': 5
}, {
  'x': 100,
  'y': 60
}];


var dateTimeSeries = [];
var tempTimeSeries = [];
var precipTimeSeries = [];
var humidTimeSeries = [];
var weatherData = [];

var destinations = [YTODEN, YTOSFO, YTORIO];   


var startDate = parseInt((new Date('2012-08-30').getTime() / 1000).toFixed(0));
var endDate = parseInt((new Date('2012-08-31').getTime() / 1000).toFixed(0));



$(".submit").on("click", function() {
    return true;
    //get the id of the current destination selected
    var ID = $('.option:selected').attr("id")
    //clear the arrays
    // var tempTimeSeries = [];
    // var precipTimeSeries = [];
    // var humidTimeSeries = [];


});  
    //Sunil's flight data goes here//



    var departureDate = [];
    var returnDate = [];
    
     $("#0 infoD").on("click", function(){
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=YTO&destination=den&one-way=true";
          
        $.ajax({
            url: queryURL,
            method: "GET"
        })       
        .then(function(response) {
          
            for (var i = 0; i < 10; i++) {
                var button = $('<button>').attr("id",i).attr("class","departure");
                button.text(response.results[i].departure_date)
                $("#depdisp").append(button)
                console.log(button)
            };   
    
          $(".departure").on("click", function() {
                var departure_date = this.innerHTML;
                console.log(departure_date);
                $("#depdisp").html("Departure " + departure_date);
                departureDate.push(departure_date)
                $(".departure").hide();
                console.log(departureDate)
            });    
        });
    });
            
    
     $("#DENYTO").on("click", function(){
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=DEN&destination=YTO&one-way=true"
          
        $.ajax({
            url: queryURL,
            method: "GET"
        })       
        .then(function(response) {
          for (var i = 0; i < 10; i++) {
                var button = $('<button>').attr("id",i).addClass("return");
                button.text(response.results[i].departure_date);
                $("#retdisp").append(button);
            };
                $(".return").on("click", function() {
                    var departure_date = this.innerHTML;
                    $("#retdisp").html("Return " + departure_date);
                    returnDate.push(departure_date);  
                    $(".return").hide();
                    console.log(returnDate)
                });    
                    
        });
    });
    
    $("#YTOSFO").on("click", function(){
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=YTO&destination=sfo&one-way=true"
         
        $.ajax({
            url: queryURL,
            method: "GET"
        })       
        .then(function(response) {
          
            for (var i = 0; i < 10; i++) {
                var button = $('<button>').attr("id",i).attr("class","departure");
                button.text(response.results[i].departure_date)
                $("#depdisp").append(button)
            }; 
    
          $(".departure").on("click", function() {
                var departure_date = this.innerHTML;
                console.log(departure_date);
                $("#depdisp").html("Departure " + departure_date);
                departureDate.push(departure_date)
                $(".departure").hide();
                console.log(departureDate)
            });    
        });
    });
         
    $("#SFOYTO").on("click", function(){
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=SFO&destination=YTO&one-way=true"
         
        $.ajax({
            url: queryURL,
            method: "GET"
        })       
        .then(function(response) {
          for (var i = 0; i < 10; i++) {
                var button = $('<button>').attr("id",i).addClass("return");
                button.text(response.results[i].departure_date);
                $("#retdisp").append(button);
            };
                $(".return").on("click", function() {
                    var departure_date = this.innerHTML;
                    $("#retdisp").html("Return " + departure_date);
                    returnDate.push(departure_date);  
                    $(".return").hide();
                    console.log(returnDate)
                });    
                    
        });
    });
    
     $("#YTORIO").on("click", function(){
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=YTO&destination=RIO&one-way=true"
           
        $.ajax({
            url: queryURL,
            method: "GET"
        })       
        .then(function(response) {
          
            for (var i = 0; i < 10; i++) {
                var button = $('<button>').attr("id",i).attr("class","departure");
                button.text(response.results[i].departure_date)
                $("#depdisp").append(button)
            }; 
    
          $(".departure").on("click", function() {
                var departure_date = this.innerHTML;
                console.log(departure_date);
                $("#depdisp").html("Departure " + departure_date);
                departureDate.push(departure_date)
                $(".departure").hide();
                console.log(departureDate)
            });    
        });
    });
         
    
     $("#RIOYTO").on("click", function(){
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=RIO&destination=YTO&one-way=true"
          
        $.ajax({
            url: queryURL,
            method: "GET"
        })       
        .then(function(response) {
          for (var i = 0; i < 10; i++) {
                var button = $('<button>').attr("id",i).addClass("return");
                button.text(response.results[i].departure_date);
                $("#retdisp").append(button);
            };
                $(".return").on("click", function() {
                    var departure_date = this.innerHTML;
                    $("#retdisp").html("Return " + departure_date);
                    returnDate.push(departure_date);  
                    $(".return").hide();
                    console.log(returnDate)
                });    
                    
        });
    });


    //end of Sunil's flight data//


    //make sure that the user selects a destion before passing on a value to city
    if (ID != "NULL"){
        $(".selectDestWarning").hide();
        var city = destinations[ID].city;
        var lattitude = destinations[ID].lattitude;
        var longitude = destinations[ID].longitude;

        var today = new Date('2017-08-27');
        var tomorrow = today.setDate(today.getDate() + 1)
        tomorrow = tomorrow/1000;
        
        var i;
        for (i = 0; i < 3; i++) { 

            var tomorrow = today.setDate(today.getDate() + i);
            tomorrow = tomorrow/1000;
            
           
            
            
            $.getJSON(proxy+"https://api.darksky.net/forecast/"+ APIKEY  + lattitude + "," + longitude + "," + tomorrow,function(snapshot){
                
                Celcius = Math.round((snapshot.currently.temperature - Constant)*(fraction));
                tempTimeSeries.push(Celcius);
                precipTimeSeries.push(snapshot.currently.precipType);
                humidTimeSeries.push(snapshot.currently.humidity);
             }).done(() => {

                        // weatherData = dateTimeSeries.map(function(d, i){
                        // return { 'x' : d , 'y': tempTimeSeries[i]};
                        // });
             })
                
            //end on submit-on-click function
            
        }//end if statement

        if (i>2){
            InitChart(tempTimeSeries);
            };
        
    } else {
        $(".selectDestWarning").show();
    }//end if statement checking for NULL
})



//converting unix timestamp to date
function convert(snapshot){
    // Unixtimestamp
    var unixtimestamp = snapshot;
    // Months array
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp*1000);
    // Year
    var year = date.getFullYear();
    // Month
    var month = months_arr[date.getMonth()];
    // Day
    var day = date.getDate();
    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime = day+'-'+month+'-'+year;
    
    dateTimeSeries.push(convdataTime);
   
}

// create a single array using all the time series

//creating a chart with d3.js for the weather data

function InitChart(snapshot) {

    //creating the precipitation chart.
			//Width and height\\
			var w = 200;
			var h = 200;
            var barPadding = 1;
            
            var x = [10,20,30,40,50,60];
    

            var dataset = x

			//Create SVG element
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			svg.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
               })
               
			   .attr("y", function(d) {
			   		return h - (d * 4);
               })
               
			   .attr("width", w / dataset.length - barPadding)
			   .attr("height", function(d) {
			   		return d * 4;
               })
               
			   .attr("fill", function(d) {
					return "rgb(0, 0, " + (d * 10) + ")";
			   });

			svg.selectAll("text")
			   .data(dataset)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
			   })
			   .attr("y", function(d) {
			   		return h - (d * 4) + 14;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "white");
};//end of graphing weather data

