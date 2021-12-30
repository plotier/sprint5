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

const chuckFetch = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
        headers: {
            'Accept': 'application/json'
        }
    })
    const chuck = await response.json();
    let chuckFinale = chuck.value;
    const chisteTexto = document.getElementById("chisteTexto");
    chisteTexto.textContent = chuckFinale;
    return lastJoke = chuckFinale;
}

const randomJoke = () => {
    const backgroundPic = document.getElementById("backgroundPic")
    //estos ternarios alternan las clases y cambian el background
    backgroundPic.classList.contains('switchBackground') ? backgroundPic.classList.replace('switchBackground', 'secondBackground')
        : backgroundPic.classList.replace('secondBackground', 'thirdBackground');

    backgroundPic.classList.contains('thirdBackground') ? backgroundPic.classList.replace('thirdBackground', 'fourthBackground')
        : backgroundPic.classList.replace('fourthBackground', 'switchBackground');
    //Si el resultado es par, ejecuta broma random, si no, de Chuck Norris
    let dados = Math.floor(Math.random() * 6)
    let result = (dados % 2 == 0) ? jokeFetch() : chuckFetch()
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
//API del clima openweathermap.org
const weatherFetch = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?id=3128760&units=metric&appid=38a66e799dc1be392da713ec1a07203a")
    const weather = await response.json();
    const temperature = weather.main.temp;
    const weatherTexto = document.getElementById("weatherTexto");
    const iconcode = weather.weather[0].icon;
    let iconurl =`https://openweathermap.org/img/wn/${iconcode}@2x.png`
    document.getElementById("wicon").src = iconurl
    weatherTexto.textContent = `${temperature} º C`
    console.log(temperature);
}
window.addEventListener("load", weatherFetch(),);




