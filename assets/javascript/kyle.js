
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
var select;

$("#down_form").on('submit', function(e){
//kyles code
    e.preventDefault();
    select = $('.form-control option:checked').val();
    
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

});//end of Jude's JS code

// Sunil's airplane code //

var departureDate = [];
    var returnDate = [];
    
     $("#submit1").on("click", function(){
<<<<<<< HEAD
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=VHzZ53TQXAJZvU3Zj8rWIKHlRh3i2Bd2&origin=YTO&destination=den&one-way=true";
=======
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=mRIoU7QG9mM6rewSvr88b6nk6gSzGZoo&origin=YTO&destination=den&one-way=true";
>>>>>>> 3e042572ab18f325b823b37b360651c189a58229
          
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
<<<<<<< HEAD
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=VHzZ53TQXAJZvU3Zj8rWIKHlRh3i2Bd2&origin=DEN&destination=YTO&one-way=true"
=======
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=mRIoU7QG9mM6rewSvr88b6nk6gSzGZoo&origin=DEN&destination=YTO&one-way=true"
>>>>>>> 3e042572ab18f325b823b37b360651c189a58229
          
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
                    weather(returnDate);
                });    
                    
        });
    });
    
    $("#submit2").on("click", function(){
<<<<<<< HEAD
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=VHzZ53TQXAJZvU3Zj8rWIKHlRh3i2Bd2&origin=YTO&destination=sfo&one-way=true"
=======
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=mRIoU7QG9mM6rewSvr88b6nk6gSzGZoo&origin=YTO&destination=sfo&one-way=true"
>>>>>>> 3e042572ab18f325b823b37b360651c189a58229
         
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
<<<<<<< HEAD
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=VHzZ53TQXAJZvU3Zj8rWIKHlRh3i2Bd2&origin=SFO&destination=YTO&one-way=true"
=======
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=mRIoU7QG9mM6rewSvr88b6nk6gSzGZoo&origin=SFO&destination=YTO&one-way=true"
>>>>>>> 3e042572ab18f325b823b37b360651c189a58229
         
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
                    weather(returnDate);
                });    
                    
        });
    });
    
     $("#submit3").on("click", function(){
<<<<<<< HEAD
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=VHzZ53TQXAJZvU3Zj8rWIKHlRh3i2Bd2&origin=YTO&destination=RIO&one-way=true"
=======
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=mRIoU7QG9mM6rewSvr88b6nk6gSzGZoo&origin=YTO&destination=RIO&one-way=true"
>>>>>>> 3e042572ab18f325b823b37b360651c189a58229
           
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
<<<<<<< HEAD
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=VHzZ53TQXAJZvU3Zj8rWIKHlRh3i2Bd2&origin=RIO&destination=YTO&one-way=true"
=======
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=mRIoU7QG9mM6rewSvr88b6nk6gSzGZoo&origin=RIO&destination=YTO&one-way=true"
>>>>>>> 3e042572ab18f325b823b37b360651c189a58229
          
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
                    weather(returnDate);
                });    
                    
        });
    });


function weather(){        
        //get the id of the current destination selected
    console.log("function weather");

    var a = moment(departureDate,'YYYY-M-D');
    var b = moment(returnDate,'YYYY-M-D');
    // var diffDays = b.diff(a, 'days');
    var diffDays = 15;


    
    
            if (select != "NULL"){
                $(".selectDestWarning").hide();
                var city = destinations[select].city;
                var lattitude = destinations[select].lattitude;
                var longitude = destinations[select].longitude;
    
                var today = new Date(departureDate);

                var i;
                for (i = 0; i < diffDays; i++) { 
    
                    var tomorrow = today.setDate(today.getDate() + i);
                    tomorrow = tomorrow/1000;
                    convert(tomorrow);

                    $.getJSON(proxy+"https://api.darksky.net/forecast/"+ APIKEY  + lattitude + "," + longitude + "," + tomorrow,function(snapshot){
                        Celcius = Math.round((snapshot.currently.temperature - Constant)*(fraction));
                        tempTimeSeries.push(Celcius);
                        precipTimeSeries.push(Math.round(snapshot.currently.cloudCover*100));
                        humidTimeSeries.push(Math.round(snapshot.currently.humidity*100));
                    }).done(() => {
                        
                    });
                }//end for loop
            } else {
                $(".selectDestWarning").show();
            }//end if statement checking for NULL
            setTimeout(temp,300);
            setTimeout(precip,300);
            setTimeout(humid,300);
            
    };

function temp(x) {
    console.log("function temp");
    //creating the precipitation chart.
            //Width and height\\
            var w = 300;
            var h = 150;
            var barPadding = 1;
    
            var dataset = tempTimeSeries

            //Create SVG element
            var svg = d3.select(".temp")
                        // .append("svg")
                        .attr("width", w)
                        .attr("height", h)
            
            svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", function(d, i) {
                        return i * (w / dataset.length);
                })
                
                .attr("y", function(d) {
                        return h - (d * 10);
                })
                
                .attr("width", w / dataset.length - barPadding)
                .attr("height", function(d) {
                        return d * 100;
                })
                
                .attr("fill", function(d) {
                    return "rgb(255,51, " + (d * 0.5) + ")";
                    
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
                        return h - (d * 1);
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "white");

};//end of graphing weather data

function precip(x) {
    //creating the precipitation chart.
            //Width and height\\
            var w = 300;
            var h = 100;
            var barPadding = 1;
        
            // x = [10,20,3,25,1]

            console.log(x);

            var dataset = precipTimeSeries

            //Create SVG element
            var svg = d3.select(".precip")
                        // .append("svg")
                        .attr("width", w)
                        .attr("height", h)
            
            svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", function(d, i) {
                        return i * (w / dataset.length);
                })
                
                .attr("y", function(d) {
                        return h - (d * 1);
                })
                
                .attr("width", w / dataset.length - barPadding)
                .attr("height", function(d) {
                        return d * 1;
                })
                
                .attr("fill", function(d) {
                    return "rgb(7,39,255)";
                    
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
                        return h - (d * 1);
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "white");

};//end of graphing weather data

function humid(x) {
    //creating the precipitation chart.
            //Width and height\\
            var w = 300;
            var h = 100;
            var barPadding = 1;
        
            // x = [10,20,3,25,1]

            console.log(x);

            var dataset = humidTimeSeries

            //Create SVG element
            var svg = d3.select(".humid")
                        // .append("svg")
                        .attr("width", w)
                        .attr("height", h)
            
            svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", function(d, i) {
                        return i * (w / dataset.length);
                })
                
                .attr("y", function(d) {
                        return h - (d * 1);
                })
                
                .attr("width", w / dataset.length - barPadding)
                .attr("height", function(d) {
                        return d * 1;
                })
                
                .attr("fill", function(d) {
                    return "rgb(0,0,255)";
                    
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
                        return h - (d * 1);
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "white");

};//end of graphing weather data
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

