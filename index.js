const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#size");
const rgb = document.querySelector("#rgb");
const darken = document.querySelector("#darken");
const reset = document.querySelector("#reset");

//default grid
let userGrid = 16;
run();
draw();

sizeBtn.addEventListener('click', ask);
//reset button
reset.addEventListener('click', () => {
	userGrid = 16;
	run();
	draw();
});

//gridSize button clicked function
function ask() {
	userGrid = prompt("How many squares would you like per side (1-100)?");
	if (userGrid <= 100 && userGrid >= 1) {
		run();
		draw();
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
}

//change colour over hover 
function draw() {
	const squareClasses = document.querySelectorAll(".square");
	let rgber;
	let darkener;

	rgb.addEventListener('click', () => {
		squareClasses.forEach(box => {
			box.style.backgroundColor = "unset";
			box.style.opacity = "1.0";
			box.classList.remove("colour", "coloured");
		});
		rgber = true;
		darkener = false;
	});

	darken.addEventListener('click', () => {
		squareClasses.forEach(box => {box.style.backgroundColor = "unset"; box.style.opacity = "1.0"});
		darkener = true;
		rgber = false;
	});

	squareClasses.forEach(box => box.addEventListener('mouseenter', function () {
		if (rgber) {
			if (box.classList.contains("coloured")) {
				return;
			}
			else {
				let red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
				let green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
				let blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
				box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
				box.classList.add('coloured');
			}
		}
		else if (darkener) {
			if (box.classList.contains('colour')) {
				let opacity = Number(box.style.opacity);
				if (opacity < 1.0) {
					opacity += 0.1;
					box.style.opacity = `${opacity}`;
				}
				else {
					return;
				}
			}
			else {
				let red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
				let green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
				let blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
				box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
				box.style.opacity = '0.1';
				box.classList.add('colour');
			}
		}
		else {
			box.style.backgroundColor = '#AF967D'
		}
	}));
}
