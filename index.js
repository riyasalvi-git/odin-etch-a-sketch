const container = document.querySelector("#container");
const square = document.createElement("div");
let copy;
square.classList.add("square");
square.setAttribute("style", "border: 2px solid #414447; background-color: white; height: 30px; width: 30px;");
container.append(square);

//create one row (since container is flex)
for (let i = 0; i < 255; i++) {
	copy = square.cloneNode();
	container.insertBefore(copy, square);
}

