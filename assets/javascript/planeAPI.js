
 
 $("#YTODEN").on("click", function(){
    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=YTO&destination=den&one-way=true"
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
});
 $("#DENYTO").on("click", function(){
    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=DEN&destination=YTO&one-way=true"
    console.log(queryURL);
     
    $.ajax({
        url: queryURL,
        method: "GET"
    })
  
});
 $("#YTOSFO").on("click", function(){
    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=YTO&destination=sfo&one-way=true"
    console.log(queryURL);
     
    $.ajax({
        url: queryURL,
        method: "GET"
    })
  
});
$("#SFOYTO").on("click", function(){
    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=SFO&destination=YTO&one-way=true"
    console.log(queryURL);
     
    $.ajax({
        url: queryURL,
        method: "GET"
    })
  
});
 $("#YTORIO").on("click", function(){
    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=YTO&destination=RIO&one-way=true"
    console.log(queryURL);
     
    $.ajax({
        url: queryURL,
        method: "GET"
    })
  
});
 $("#RIOYTO").on("click", function(){
    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=xk3REPS1QyCZ7ASNWU5CIB2GmRm0DYlF&origin=RIO&destination=YTO&one-way=true"
    console.log(queryURL);
     
    $.ajax({
        url: queryURL,
        method: "GET"
    })
  
});
