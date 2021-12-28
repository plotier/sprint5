const jokeFetch = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    })
    const joke = await response.json();
    let chisteFinale = joke.joke;
    const chisteTexto = document.getElementById("chisteTexto");
    chisteTexto.textContent = chisteFinale;
    return lastJoke = chisteFinale;
}
let reportJokes = []
let lastJoke;

const rateJoke = (newScore) => {
    const d = new Date();
    let existentJoke;
    if (lastJoke != undefined) {
        let jokeObject = {
            joke: lastJoke,
            score: newScore,
            date: d.toISOString()
        }
        reportJokes.map(joke => joke.joke == lastJoke ? existentJoke = true : existentJoke = false)
        existentJoke ? console.log("este chiste ya ha sido puntuado") : reportJokes.push(jokeObject);
        console.log(reportJokes)
    }
}

const weatherFetch = async ()=>{
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?id=3128760&units=metric&appid=38a66e799dc1be392da713ec1a07203a")
    const weather = await response.json();
    const temperature = weather.main.temp ;
    const weatherTexto = document.getElementById("weatherTexto");
    weatherTexto.textContent =`La temperatura en Barcelona es :${temperature} º` 
    console.log(temperature);
}
window.addEventListener("load", weatherFetch() );

  

