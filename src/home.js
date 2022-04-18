import { divFactory } from "./factory.js"
import { resetButtons } from "./header.js"

export const homePage = () => {
    resetButtons()
    document.querySelector('.home-button').classList.add('active')

	const container = divFactory("", [
		"container",
		"animate__animated",
		"animate__fadeIn",
	])
	const words = ["CLEAN", "FRESH", "TASTY"]

	for (const text of words) {
		container.appendChild(divFactory(text, []))
	}

	const content = document.querySelector("#content")
	content.innerHTML = ""
	content.appendChild(container)
}

