const container = document.querySelector("#container");
const square = document.createElement("div");
let copy;
square.setAttribute("style", "border: 1px solid #414447; background-color: white; height: 30px; width: 30px;");
container.append(square);

//create one row (since container is flex)
for (let i = 0; i < 15; i++) {
	copy = square.cloneNode();
	container.insertBefore(copy, square);
}

