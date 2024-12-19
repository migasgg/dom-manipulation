const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("form button")
const ulElement = document.querySelector("ul")

buttonElement.onclick = (ev) => {
  ev.preventDefault()

  if (inputElement.value) {
    const textElement = document.createElement("span")
    textElement.innerHTML = inputElement.value
    const liElement = document.createElement("li")
    const deleteButtonElement = document.createElement("button")
    deleteButtonElement.innerHTML = "remover"
    liElement.appendChild(textElement)
    liElement.appendChild(deleteButtonElement)
    deleteButtonElement.onclick = () => {
      ulElement.removeChild(liElement)
    }

    ulElement.appendChild(liElement)
    inputElement.value = ""
  }

  console.log(tasks)
}
