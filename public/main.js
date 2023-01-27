const btn = document.querySelector('#btn')

btn.addEventListener('click', makeRequest)

async function makeRequest() {
    const response = await fetch('http://localhost:3000/pets')
    const data = await response.json()
    console.log(data)
}