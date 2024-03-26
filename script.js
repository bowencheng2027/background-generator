var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomNum() {
	return Math.floor(Math.random() * 256);
}

function randomColor1() {
	return "rgb("
		+ randomNum()
		+ ", "
		+ randomNum()
		+ ", "
		+ randomNum()
		+ ")";
}

function randomColor2() {
	return "rgb("
		+ randomNum()
		+ ", "
		+ randomNum()
		+ ", "
		+ randomNum()
		+ ")";
}

function randomColor () {
	return "linear-gradient(to right, "
		+ randomColor1() + ", " + randomColor2() + ")";
}

function setRandom() {
	var str = randomColor();
	body.style.background = str;
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandom);