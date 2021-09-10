const joke_container = document.getElementById("joke_container");
const joke_btn = document.getElementById("joke_btn");
joke_btn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
	const jokeRes = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await jokeRes.json();
	joke_container.innerHTML = joke.joke;
}
