const textInput = document.querySelector('#text-input')
const btnTranslate = document.querySelector('#btn-translate')
const outputDiv = document.querySelector('#output-div')

const url = 'https://api.funtranslations.com/translate/yoda.json?'

function translateText () {
  const userInput = textInput.value
  fetch(`url${userInput}`)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch(error => {
      console.error('Error:', error)
    })
}
btnTranslate.addEventListener('click', translateText)
