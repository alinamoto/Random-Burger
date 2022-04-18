const display = document.querySelector(".display");
const button = document.querySelector(".button");

//

function getData() {
	fetch("https://my-burger-api.herokuapp.com/burgers/")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);

			const mathRandom = Math.random() * data.length;
			const randomInteger = Math.floor(mathRandom);

			const name = data[randomInteger].name;
			display.innerHTML = name;
			console.log(name);
		});
}

button.addEventListener("click", getData);
