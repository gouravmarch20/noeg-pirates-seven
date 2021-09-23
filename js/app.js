const textInput = document.querySelector('#text-input')
const btnTranslate = document.querySelector('#btn-translate')
const outputDiv = document.querySelector('#output-div')

const url = 'https://api.funtranslations.com/translate/yoda.json'

function translateText () {
  const userInput = textInput.value
  console.log(`${url}?text=${userInput}`)

//   fetch(`${url}?text=${userInput}`)
//     .then(response => response.json())
//     .then(data => {
     outputDiv.innerText = "asfd"
     outputDiv.style.backgroundColor = "#1C8D73"

    // })
    // .catch(error => {
    //   console.error('Error:', error)
    // })
}
btnTranslate.addEventListener('click', translateText)
