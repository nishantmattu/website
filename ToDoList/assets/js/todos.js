console.log("hello");

//check off specific todos by clicking
$("ul").on("click", "li", function() {

	$(this).toggleClass("completed");
	//console.log("clicked li");

	// if($(this).css("color") === "rgb(128, 128, 128)") {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }

	
	// $(this).css("color", "gray");
	// $(this).css("text-decoration", "line-through");
});


//click on x to delete todo

$("ul").on("click", "span", function(event) {

	$(this).parent().fadeOut(500, function() {//this this refers to span
		$(this).remove();//this this refers to parent li
	});

	event.stopPropagation();

	//console.log("clicked x to delete");


});

$("input[type='text']").keypress(function(event) {
	
	if(event.which === 13) {
		console.log("hit enter");
		//grabbing new todo text from input
		var toDoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o' ></i></span> " + toDoText + "</li>")
		
	}

	//console.log("input key press");
});

$(".fa-plus-square-o").click(function() {

	$("input[type='text']").fadeToggle();
});