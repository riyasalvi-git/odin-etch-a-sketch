const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#size");
const rgb = document.querySelector("#rgb");
const darken = document.querySelector("#darken");

//default grid
let userGrid = 16;
run();

sizeBtn.addEventListener('click', ask);

//button clicked function
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

function draw() {
	//change colour over hover default
	const squareClasses = document.querySelectorAll(".square");
	squareClasses.forEach(box => box.addEventListener('mouseover', () => box.style.backgroundColor = 'black'));

	//rgb button click
	rgb.addEventListener('click', function () {
		squareClasses.forEach(box => box.style.backgroundColor = "unset");
		squareClasses.forEach(box => box.addEventListener('mouseover', function () {
			let red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
			let green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
			let blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
			box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
		}));
	});

	//darken button click
	darken.addEventListener('click', function () {
		squareClasses.forEach(box => box.style.backgroundColor = "unset");
		squareClasses.forEach(box => box.addEventListener('mouseover', function () {
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
		}));
	});
}
