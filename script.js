const inputEl = document.querySelector(".todo__input-text")
const btnEl = document.querySelector(".todo__input-btn")
const fieldEl = document.querySelector(".todo__list")

const taskList = [
    {
        id: 1,
        text: "Something",
        isDone: false
    }
]

function onCheckboxChanged() {
    let parent = this.parentNode
    let text = parent.querySelector(".list__item-text")
    if (this.checked) {
        parent.style.background = "#EAFFEC"
        text.style.textDecoration = "line-through"
    } else {
        parent.style.background = "#FFEBEC"
        text.style.textDecoration = "none"
    }
}

function onRmBtnPressed() {
    let parent = this.parentNode
    parent.style.opacity = 0
    setTimeout(() => { parent.remove() }, 1000)
}

function onBtnPressed() {
    if (inputEl.value.length) {
        let newItem = document.createElement("div")
        newItem.className = "list__item"
        
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.onchange = onCheckboxChanged
        newItem.appendChild(checkbox)
        
        let text = document.createElement("p")
        text.className = "list__item-text"
        text.textContent = inputEl.value
        newItem.appendChild(text)
        
        let button = document.createElement("button")
        button.className = "list__item-rm-btn"
        button.onclick = onRmBtnPressed
        newItem.appendChild(button)
        
        let image = document.createElement("img")
        image.src = "img/trash.png"
        image.className = "list__item-img"
        button.appendChild(image)
        
        fieldEl.appendChild(newItem)
        inputEl.value = null;
    }
}

btnEl.onclick = onBtnPressed