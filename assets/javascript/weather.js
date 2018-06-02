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
var dateTimeSeries = [];
var tempTimeSeries = [];
var precipTimeSeries = [];
var humidTimeSeries = [];


var destinations = [YTODEN, YTOSFO, YTORIO];   


var startDate = parseInt((new Date('2012-08-30').getTime() / 1000).toFixed(0));
var endDate = parseInt((new Date('2012-08-31').getTime() / 1000).toFixed(0));



$(".submit").on("click", function() {
    return true;
    //get the id of the current destination selected
    var ID = $('.option:selected').attr("id")
    //clear the arrays
    tempTimeSeries = [];
    precipTimeSeries = [];
    humidTimeSeries = [];



    //Sunil's flight data goes here//



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
            
            console.log(tomorrow);

            $.getJSON(proxy+"https://api.darksky.net/forecast/"+ APIKEY  + lattitude + "," + longitude + "," + tomorrow,function(snapshot){
                // var currentTemp = json.main.temp - AbsZero;
                tempTimeSeries.push(snapshot.currently.temperature);
                precipTimeSeries.push(snapshot.currently.precipType);
                humidTimeSeries.push(snapshot.currently.humidity);
             });//end get json

             convert(tomorrow);
             InitChart();
        }
        
        console.log(tempTimeSeries);
        console.log(precipTimeSeries);
        console.log(humidTimeSeries);
        console.log(dateTimeSeries);
    } else {
        $(".selectDestWarning").show();
    }//end if statement checking for NULL
});//end on submit-on-click function

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


//creating a chart with d3.js for the weather data

function InitChart() {

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

  var vis = d3.select('#visualisation'),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    },
    xRange = d3.scale.ordinal().rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.1).domain(barData.map(function (d) {
      return d.x;
    })),


    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,
      d3.max(barData, function (d) {
        return d.y;
      })
    ]),

    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
      .tickSubdivide(true),

    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient("left")
      .tickSubdivide(true);


  vis.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis);

  vis.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis);

  vis.selectAll('rect')
    .data(barData)
    .enter()
    .append('rect')
    .attr('x', function (d) {
      return xRange(d.x);
    })
    .attr('y', function (d) {
      return yRange(d.y);
    })
    .attr('width', xRange.rangeBand())
    .attr('height', function (d) {
      return ((HEIGHT - MARGINS.bottom) - yRange(d.y));
    })
    .attr('fill', 'grey');

}
  //end of graphing weather data