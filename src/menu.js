import { resetButtons } from "./header"
import { menuFactory, divFactory } from "./factory"
import Burger from "./assets/burger.jpg"
import Bagel from "./assets/bagel.jpg"
import Pizza from "./assets/pizza.jpg"
import Salad from "./assets/salad.jpg"
import Spaghetti from "./assets/spaghetti.jpg"
import Soup from "./assets/soup.jpg"

export const menuPage = () => {
	resetButtons()
	document.querySelector(".menu-button").classList.add("active")
	const menuContainer = divFactory("", [
		"menu-container",
		"animate__animated",
		"animate__fadeInUp",
	])
	const content = document.querySelector("#content")
	content.innerHTML = ""
	content.appendChild(menuContainer)

	menuFactory(Burger, "Burger", 16)
	menuFactory(Bagel, "Bagel", 12)
	menuFactory(Pizza, "Pizza", 23)
	menuFactory(Salad, "Salad", 17)
	menuFactory(Spaghetti, "Spaghetti", 18)
	menuFactory(Soup, "Soup", 9)
}
