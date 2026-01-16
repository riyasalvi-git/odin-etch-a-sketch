const container = document.querySelector("#container");
const btn = document.querySelector("button");

//default grid
let userGrid = 16;
run();

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
	//create a row and then insert squares in it
	for (let i = 0; i < userGrid; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		container.append(row);
		for (let i = 0; i < userGrid; i++) {
			const square = document.createElement("div");
			square.classList.add("square");
			row.append(square);
		}
	}
	//change colour over hover
	const squareClasses = document.querySelectorAll(".square");
	squareClasses.forEach(box => box.addEventListener('mouseenter', () => box.style.backgroundColor = 'black'));
}

