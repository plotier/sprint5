const jokeFetch = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    })
    const joke = await response.json();
    let chisteFinale = joke.joke;
    const chisteTexto = document.getElementById("chisteTexto");
    return chisteTexto.textContent = await chisteFinale;

}

