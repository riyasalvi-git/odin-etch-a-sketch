const container = document.querySelector("#container");
const square = document.createElement("div");
square.classList.add("square");
square.setAttribute("style", "border: 1px solid #414447;");

//default grid
//create a row and then insert squares in it
for (let i = 0; i < 16; i++) {
	const row = document.createElement("div");
	row.classList.add("row");
	container.append(row);
	row.append(square);
	for (let i = 0; i < 16; i++) {
		copy = square.cloneNode();
		row.insertBefore(copy, square);
	}
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
	const rowClass = document.querySelectorAll(".row");
	rowClass.forEach(box => box.remove());
	const square = document.createElement("div");
	square.style.border = '1px solid #414447';
	square.classList.add("square");
	for (let i = 0; i < userGrid; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		container.append(row);
		row.append(square);
		for (let i = 0; i < userGrid; i++) {
			copy = square.cloneNode();
			row.insertBefore(copy, square);
		}
	}
	//change colour over hover
	const squareClasses = document.querySelectorAll(".square");
	squareClasses.forEach(box => box.addEventListener('mouseenter', () => box.style.backgroundColor = 'black'));
}

