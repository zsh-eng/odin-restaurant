export const divFactory = (text, classes) => {
	const element = document.createElement("div")
	element.textContent = text

	for (const item of classes) {
		element.classList.add(item)
	}

	return element
}

export const buttonFactory = (text, classes) => {
	const element = document.createElement("button")
	element.textContent = text
	element.classList.add(classes)

	return element
}

export const inputFactory = (text, id) => {
	const formContainer = divFactory("", ["form-container"])
	const label = document.createElement("label")
	label.for = id
	label.textContent = text
	const input = document.createElement("input")
	input.id = id

	formContainer.appendChild(label)
	formContainer.appendChild(input)

	return formContainer
}

export const menuFactory = (image, name, price) => {
	const menuItem = divFactory("", ["menu-item"])
	const img = document.createElement("img")
	img.src = image

	menuItem.appendChild(img)
	menuItem.appendChild(divFactory(name, ["menu-text"]))
	menuItem.appendChild(divFactory("$" + price, ["menu-price"]))

    const menuContainer = document.querySelector('.menu-container')
    menuContainer.appendChild(menuItem)
}

