const container = document.querySelector("#container");
const square = document.createElement("div");
square.classList.add("square");
square.setAttribute("style", "border: 2px solid #414447; height: 30px; width: 30px;");
container.append(square);

//create one row (since container is flex)
for (let i = 0; i < 255; i++) {
	copy = square.cloneNode();
	container.insertBefore(copy, square);
}

//change colour over hover
let box;
const squareClass = document.querySelectorAll(".square");
squareClass.forEach(box => box.addEventListener('mouseenter', e => box.setAttribute("style", "border: 2px solid #414447; height: 30px; width: 30px; background-color: black;")));

function change() {
	box.setAttribute("style", "border: 2px solid #414447; height: 30px; width: 30px; background-color: black;");
}
