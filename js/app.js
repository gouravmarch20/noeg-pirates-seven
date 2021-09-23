const textInput = document.querySelector('#text-input')
const btnTranslate = document.querySelector('#btn-translate')
const outputDiv = document.querySelector('#output-div')

const url = 'https://api.funtranslations.com/translate/yoda.json'

function translateText () {
  const userInput = textInput.value
  console.log(`${url}?text=${userInput}`)

  fetch(`${url}?text=${userInput}`)
    .then(response => response.json())
    .then(data => {
      outputDiv.innerText = data.contents.translated
      outputDiv.style.backgroundColor = "#120E43"
      outputDiv.style.color = "#E21717"
    })
    .catch(error => {
      console.log('object')
      outputDiv.innerText = 'api failed'
      outputDiv.style.backgroundColor = "#120E43"
      outputDiv.style.color = "#E21717"


    })
}
btnTranslate.addEventListener('click', translateText)
