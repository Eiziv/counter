let counter = 0;
let span = document.querySelector("#counter");
span.textContent = counter;

function updateCounter(n) {
	counter = counter + n;
	span.textContent = counter;
}
