var isPurple = false;

document.querySelector("button").addEventListener("click", function() {


	// if(isPurple) {
	// 	document.body.style.background = "white";
	// 	//isPurple = false;	
	// } else {
	// 	//isPurple = true;
	// 	document.body.style.background = "purple";
	// }
	// isPurple = !isPurple;

	document.body.classList.toggle("purple");
		
});