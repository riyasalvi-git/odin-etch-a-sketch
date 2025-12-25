const container = document.querySelector("#grid");
const square = document.createElement("div");
square.classList.add("square");

//default grid
square.setAttribute("style", "border: 1px solid #414447; height: 50px; width: 50px;");
container.append(square);
//create grid boxes continuously in one line(since container is flex)
for (let i = 0; i < 255; i++) {
	copy = square.cloneNode();
	container.insertBefore(copy, square);
}
//change colour over hover
const squareClass = document.querySelectorAll(".square");
squareClass.forEach(box => box.addEventListener('mouseenter', () => box.style.backgroundColor = 'black'));
let userGrid;

//when button clicked
const btn = document.querySelector("button");
btn.addEventListener('click', ask);

//button clicked function
function ask() {
	userGrid = prompt("How many squares would you like per side (1-100)?");
	if (userGrid <= 100 && userGrid >= 1) {
		run();
	}
	else {
		ask();
	}
}

function run() {
	const squareClass = document.querySelectorAll(".square");
	squareClass.forEach(box => box.remove());
	const square = document.createElement("div");
	let totalSquares = (userGrid * userGrid) - 1;
	let squareSize = 800 / userGrid;
	square.style.border = '1px solid #414447';
	square.style.height = `${squareSize}px`;
	square.style.width = `${squareSize}px`;
	square.classList.add("square");
	container.append(square);
	for (let i = 0; i < totalSquares; i++) {
		copy = square.cloneNode();
		container.insertBefore(copy, square);
	}
	//change colour over hover
	const squareClasses = document.querySelectorAll(".square");
	squareClasses.forEach(box => box.addEventListener('mouseenter', () => box.style.backgroundColor = 'black'));
}

