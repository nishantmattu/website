$("html").ready(function() {

	$("#nishantImgTwo").fadeIn(1000, function() {
 		console.log("fade done callback");	
 	});
	console.log("fade done");
});