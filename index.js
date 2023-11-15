const button = document.getElementById('button');
button.addEventListener('click', (e) => {
    e.preventDefault()
    const jokeText = document.createElement('p')
    jokeText.textContent = fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(res => {
        jokeText.textContent = res.value
        document.body.append(jokeText)  
    })
})