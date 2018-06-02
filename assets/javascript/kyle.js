
var Rio = "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest.";

var Denver = "Denver, the capital of Colorado, is an American metropolis dating to the Old West era. Larimer Square, the city’s oldest block, features landmark 19th-century buildings. Museums include the Denver Art Museum, an ultramodern complex known for its collection of indigenous works, and the mansion of famed Titanic survivor Molly Brown. Denver is also a jumping-off point for ski resorts in the nearby Rocky Mountains.";

var Sanfran = "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.";

var img1 = document.createElement("img");
img1.src = "./assets/images/rio.jpg";
var img2 = document.createElement("img");
img2.src = "./assets/images/denver.jpg";
var img3 = document.createElement("img");
img3.src = "./assets/images/san.jpg";

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

$("#down_form").on('submit', function(e){
    e.preventDefault();
    var select = $('.form-control option:checked').val();
    console.log(select);
    
   if(select == 0){
    $(".output").html(Denver);
    $("#divdiv").css("background-color", "white");
    $("body").css('background-image','url('+img2.src+')');
   } else if(select == 1){
       $(".output").html(Sanfran)
       $("#divdiv").css("background-color", "white");
       $("body").css('background-image', 'url('+img3.src+')');
   }
   else if(select == 2){
       $(".output").html(Rio)
       $("#divdiv").css("background-color", "white");
       $("body").css('background-image','url('+img1.src+')');
   }


//Jude's js code

if (select != "NULL"){
    $(".selectDestWarning").hide();
    var city = destinations[select].city;
    var lattitude = destinations[select].lattitude;
    var longitude = destinations[select].longitude;

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
});//end of Jude's JS code

// Sunil's airplane code //

var departureDate = [];
    var returnDate = [];
    
     $("#submit1").on("click", function(){
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
            
    
     $("#submit1").on("click", function(){
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
    
    $("#submit2").on("click", function(){
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
         
    $("#submit2").on("click", function(){
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
    
     $("#submit3").on("click", function(){
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
         
    
     $("#submit3").on("click", function(){
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
    
    
