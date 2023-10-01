const inputEl = document.querySelector(".todo__input-text")
const btnEl = document.querySelector(".todo__input-btn")
const fieldEl = document.querySelector(".todo__list")

let nextID = 1

const itemList = []

function render() {
    fieldEl.innerHTML = null
    for (let item of itemList) {
        const el = createHtmlElement(item)
        fieldEl.appendChild(el)
    }
}

function onCheckboxChanged(item) {
    item.isDone = !(item.isDone)
    render()
}

function onRmBtnPressed(id) {
    let idx = itemList.findIndex(i => i.id === id)
    itemList.splice(idx, 1)
    render()
}

function createHtmlElement(item) {
    const divEl = document.createElement("div")
    divEl.classList.add("list__item")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.addEventListener("change", () => { onCheckboxChanged(item) })
    if (item.isDone) {
        checkbox.checked = true
        divEl.classList.add("list__item-done")
    }

    const text  = document.createElement("p")
    text.innerText = item.text
    text.classList.add("list__item-text")
    
    const button = document.createElement("button")
    button.classList.add("list__item-rm-btn")
    button.addEventListener("click", () => { onRmBtnPressed(item.id) })

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
    }
    render()
}

btnEl.onclick = onBtnPressed

render()