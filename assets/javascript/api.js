$(document).ready(function(){

//intial topics array
var topics= ["bike fails","animal fails","sport fails","dance fails"];




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

$("button").on("click",function(){

var fail=$(this).attr("data-name");
var queryURL= "http://api.giphy.com/v1/gifs/search?q="+fail+"&api_key=dc6zaTOxFJmzC&limit=10";
 
$.ajax({url: queryURL, method: 'GET'}).done(function(response){
	
	var results = response.data;
	console.log(response);

	for(var j = 0; j<results.length; j++){
		
		var gifDiv =$("<div class='item'>")

		var rating= results[j].rating;

		var ratingText= $("<p>").text("Rating:" + rating);

		var gifImage= $("<img>");
		gifImage.attr("src", results[j].images.fixed_height_still.url);

		gifDiv.append(ratingText)
		gifDiv.append(gifImage)
		$("#watchFails").prepend(gifDiv);
	}

	$("img").on("click", function(){
	
	$(gifImage).attr("src", results.images.fixed_height.url);
		
	
});
});


});



});