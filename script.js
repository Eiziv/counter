const container = document.querySelector("#container");

function createCounter(labelText) {
	const counter = document.createElement("div");
	const label = document.createElement("span");
	const sub = document.createElement("button");
	const count = document.createElement("span");
	const add = document.createElement("button");
	
	let value = 0;
	
	function updateCounter(n) {
		value = value + n;
		count.textContent = value;
	}
	
	label.textContent = labelText;
	count.textContent = value;
	sub.textContent = "-";
	add.textContent = "+";
	sub.addEventListener("click", () => updateCounter(-1));
	add.addEventListener("click", () => updateCounter(1));
	
	counter.appendChild(label);
	counter.appendChild(sub);
	counter.appendChild(count);
	counter.appendChild(add);
	
	counter.classList.add("counter");

	return counter;
}

function addCounterSet(headerText, extraCounters) {
	const counterSet = document.createElement("div");
	const header = document.createElement("h2");

	header.textContent = headerText;
	counterSet.appendChild(header);
	counterSet.appendChild(createCounter("Ringt:"));
	counterSet.appendChild(createCounter("Svart:"));
	counterSet.appendChild(createCounter("Solgt:"));

	for (const counterText of extraCounters) {
		counterSet.appendChild(createCounter(counterText));
	}
	
	counterSet.classList.add("counter-set");
	
	container.appendChild(counterSet);

}

addCounterSet("SGJ Service",["+TA", "+PKK"]);
addCounterSet("SGJ PKK",["+TA", "+Service"]);
