$(document).ready(function(){

//intial topics array
var topics= ["bikeFails","animalFails","sportFails","danceFails"];

function failGifs(){

var fail=$(this).attr("data-name");
var queryURL= "http://api.giphy.com/v1/gifs/search?q="+fail+"&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({url: queryURL, method: 'GET'}).done(function(response){
	
	$("<div/>").append(JSON.stringify(response));
	console.log(response);
});



}
failGifs();


function createButtons(){
	for(var i = 0; i<topics.length; i++){

		var newButtons= $("<button>");
		newButtons.addClass("fail");
		newButtons.attr("data-name", topics[i]);
		newButtons.text(topics[i]);
		$("#failButtons").append(newButtons);
	}
}

createButtons();

});