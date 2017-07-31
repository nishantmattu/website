

// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]


var numSquares = 6;
var colors = [];//generateRandomColors(numSquares);
var pickedColor;// = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyButton = document.querySelector("#easyBtn");
//var hardButton = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
	
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) //can add more modes without adding extra listeners 
	{
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; //ternary operator condition? true : false
			reset(); 
		});
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		// //add initial colors to squares
		// squares[i].style.backgroundColor = colors[i];	//backgroundColor use with more brwosers	
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
			//compare color to pickedColor

		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of the squares on the page
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];	
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

// easyButton.addEventListener("click", function() {

// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardButton.addEventListener("click", function() {
// 	easyButton.classList.remove("selected");
// 	hardButton.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		}
// });

resetButton.addEventListener("click", function() {
	reset();
});


colorDisplay.textContent = pickedColor;



// for(var i = 0; i < squares.length; i++) {
// 	// //add initial colors to squares
// 	// squares[i].style.backgroundColor = colors[i];	//backgroundColor use with more brwosers	
// 	//add click listeners to squares
// 	squares[i].addEventListener("click", function() {
// 		//grab color of clicked square
// 		var clickedColor = this.style.backgroundColor;
// 		if(clickedColor === pickedColor){
// 			messageDisplay.textContent = "Correct!";
// 			h1.style.backgroundColor = clickedColor;
// 			resetButton.textContent = "Play Again?";
// 			changeColors(clickedColor);
// 		} else {
// 			this.style.backgroundColor = "#232323";
// 			messageDisplay.textContent = "Try Again!";
// 		}
// 		//compare color to pickedColor

// 	});


// }

function changeColors(color) {
	//loop through all squares change each color to given color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);//0 - 5.99..floor it..
	//* 6 + 1... 0 - 5.99?
	//Math.floor to chop of decimals..
	return colors[random];
}

function generateRandomColors(num) {
	//make arr
	var arr = [];

	//add num random colors to array, repeat num times
	for(var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}

	//return
	return arr;
}

function randomColor() {
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}