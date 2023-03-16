// dark mode toggle switch

const toggleSwitch = document.getElementById("switch");

toggleSwitch.addEventListener("change", (e) => {
	document.body.classList.toggle("dark-theme");
});




// console

const consoleInput = document.querySelector(".console-input");
const historyContainer = document.querySelector(".console-history");
const runButton = document.getElementById("run-button");
const clrButton = document.getElementById("clr-button");

function addResult(inputAsString, output) {
	const outputAsString =
		output instanceof Array ? `[${output.join(", ")}]` : output.toString();
	const inputLogElement = document.createElement("div");
	const outputLogElement = document.createElement("div");

	inputLogElement.classList.add("console-input-log");
	outputLogElement.classList.add("console-output-log");

	inputLogElement.textContent = `> ${inputAsString}`;
	outputLogElement.textContent = outputAsString;

    historyContainer.append(inputLogElement, outputLogElement);
}

runButton.addEventListener("click", (e) => {
	const code = consoleInput.value.trim();

	if (code.length === 0) {
		return;
	}

	try {
		addResult(code, eval(code));
	} catch (err) {
		addResult(code, err);
	}

	historyContainer.scrollTop = historyContainer.scrollHeight;
});

clrButton.addEventListener("click", ()=> {
    consoleInput.value = "";
    historyContainer.replaceChildren();
})


