const container = document.querySelector("#container");

function createCounter(labelText, counterSetText) {
	const counter = document.createElement("div");
	const label = document.createElement("span");
	const sub = document.createElement("button");
	const count = document.createElement("span");
	const add = document.createElement("button");

	const storageKey = `${counterSetText}/${labelText}`;
	let value = window.localStorage.getItem(storageKey);
	if (value === null) {
		value = 0;
		window.localStorage.setItem(storageKey, value);
	} else {
		value = parseInt(value)
	}
	
	function updateCounter(n) {
		value = value + n;
		count.textContent = value;
		window.localStorage.setItem(storageKey, value);
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
	label.classList.add("label");
	count.classList.add("count");
	

	return counter;
}

function addCounterSet(headerText, extraCounters) {
	const counterSet = document.createElement("div");
	const header = document.createElement("h2");

	header.textContent = headerText;
	counterSet.appendChild(header);
	
	const counters = ["Ringt:", "Svart:", "Solgt:"].concat(extraCounters);
	
	for (const counterText of counters) {
		counterSet.appendChild(createCounter(counterText, headerText));
	}
	
	counterSet.classList.add("counter-set");
	
	container.appendChild(counterSet);

}

addCounterSet("SGJ Service",["+TA", "+PKK", "+DEKK"]);
addCounterSet("SGJ PKK",["+TA", "+Service", "+DEKK"]);
addCounterSet("FGJ Service",["+TA", "+PKK", "+DEKK"]);
addCounterSet("FGJ PKK",["+TA", "+Service", "+DEKK"]);
