

$(function(){
    console.log('start');

})
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
    
});

var Rio = "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest.";

console.log(Rio);

var Denver = "Denver, the capital of Colorado, is an American metropolis dating to the Old West era. Larimer Square, the city’s oldest block, features landmark 19th-century buildings. Museums include the Denver Art Museum, an ultramodern complex known for its collection of indigenous works, and the mansion of famed Titanic survivor Molly Brown. Denver is also a jumping-off point for ski resorts in the nearby Rocky Mountains.";

console.log(Denver);

var Sanfran = "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.";

console.log(Sanfran);

var img1 = document.createElement("img");
img1.src = "./assets/images/rio.jpg";

console.log(img1);

var img2 = document.createElement("img");
img2.src = "./assets/images/denver.jpg";

var img3 = document.createElement("img");
img3.src = "./assets/images/san.jpg";