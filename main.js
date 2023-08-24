const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData');
const count = document.getElementById('count');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const results = document.getElementById('results');

const callAPI = () => {
    fetch ('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(data => {
            count.innerText = `${JSON.stringify(data.count)}`
            next.innerText = `${JSON.stringify(data.next)}`
            previous.innerText = `${JSON.stringify(data.previous)}`
            results.innerText = `${JSON.stringify(data.results)}`
        })
        .catch(e => console.error(new Error(e)));
}

apiButton.addEventListener('click', callAPI);