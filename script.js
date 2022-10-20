// https://dog.ceo/api/breeds/image/random
// .then - promises
// asynchronous programing - (you have to wait for stuff)
// anytime you use fetch(), you must use the two .then()


const dogImageDiv = document.getElementById('dogImg')
const dogButton = document.getElementById('dogButton')

const getDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
    })
}

dogButton.onclick = () => getDog()