const inputEl = document.querySelector(".todo__input-text")
const btnEl = document.querySelector(".todo__input-btn")
const fieldEl = document.querySelector(".todo__list")

let nextID = 1

const itemList = []

function onCheckboxChanged(element, item) {
    item.isDone = !(item.isDone)

    const text = element.querySelector(".list__item-text")
    if (item.isDone) {
        element.style.background = "#EAFFEC"
        text.style.textDecoration = "line-through"
    }
    else {
        element.style.background = "#FFEBEC"
        text.style.textDecoration = "none"
    }
}

function onRmBtnPressed(element, id) {
    let idx = itemList.findIndex(i => i.id === id)
    itemList.splice(idx, 1)
    
    element.style.opacity = 0
    setTimeout(() => { element.remove() }, 1000)
}

function createHtmlElement(item) {
    const divEl = document.createElement("div")
    divEl.classList.add("list__item")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.addEventListener("change", () => { onCheckboxChanged(divEl, item) })
    if (item.isDone) {
        checkbox.checked = true
        divEl.classList.add("list__item-done")
    }

    const text  = document.createElement("p")
    text.innerText = item.text
    text.classList.add("list__item-text")
    
    const button = document.createElement("button")
    button.classList.add("list__item-rm-btn")
    button.addEventListener("click", () => { onRmBtnPressed(divEl, item.id) })

    const image = document.createElement("img")
    image.src = "img/trash.png"
    image.classList.add("list__item-img")

    button.appendChild(image)

    divEl.appendChild(checkbox)
    divEl.appendChild(text)
    divEl.appendChild(button)

    return divEl
}

function onBtnPressed() {
    if (inputEl.value) {
        const obj = {}
        obj.id = nextID++
        obj.text = inputEl.value
        obj.isDone = false
        inputEl.value = null
        itemList.push(obj)
        divEl = createHtmlElement(obj)
        fieldEl.appendChild(divEl)
    }
}

btnEl.onclick = onBtnPressed