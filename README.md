## Learnings:
- Create a rows of squares with for loop and make multiple of these rows and fit them in the container with flex-wrap.
- apply flex to all parents and give the children min dimensions if needed. Then let all the children just flex-grow in the direction we want.
- make border-box to be able to fit elements in a compact way with each other.
- when using querySelectorAll make sure to apply functions like event listeners to each one of them with forEach or something like that.
- declare each variable right above the function it is going to be used in.
- when using a variable for css values do not list them in setAttribute() and such. List each of the css property seperately.
- values of the properties are strings so if want to put the variable there then use the template literals with the units.
- can run a function on loop in a conditional statement until its requirement is met.
- one child follows the parent while the other follows the children probably because the dimensions of the parent take precedence to the dimensions of the children.
- always if else is not needed. code works by steps.
- object properties are more accessible to a eventListener in function expressions than in a seperate function.
- convert variables we get to numbers by using Number() to make the further calculations easier.
- always pass second argument in an eventListener as an arrow function at least.
- backgroundColor if needed to be empty should be set to 'unset'.
- function run inside if statement or a block of code, ends there and does not read the script ahead.
- multiple of the same eventListeners do interact with each other no matter what. To have one work for different functions put those functions in conditional statements and use booleans values as conditions for them. 
- if an event acts right in certain conditions and acts wrong in others. There is definetely something interacting with it in the other conditions.
- remember to reset all the styles and modifications on any eventListener or a modifier like 'button clicks' etc.
- normally changing the colours fixes a lot of the UI.


