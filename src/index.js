import { divFactory, buttonFactory } from "./factory.js"
import "./style.css"
import "animate.css"

import { header, homeButton, menuButton, contactButton } from "./header.js"
import { homePage } from "./home.js"
import { contactPage } from "./contact.js"
import { menuPage } from './menu.js'

menuPage()

homeButton.onclick = homePage
contactButton.onclick = contactPage
menuButton.onclick = menuPage
