import { divFactory, buttonFactory } from './factory.js'

const title = divFactory("SUPERLOCOGROUP", ["title"])

export const homeButton = buttonFactory("Home", "home-button")
export const menuButton = buttonFactory("Menu", "menu-button")
export const contactButton = buttonFactory("Contact", "contact-button")
const navBar = (() => {
    const navBar = divFactory("", ["nav-bar"])
    navBar.appendChild(homeButton)
    navBar.appendChild(menuButton)
    navBar.appendChild(contactButton)

    return navBar
})();

export const header = (() => {
    const header = document.querySelector('.header')
    header.appendChild(title)
    header.appendChild(navBar)
})()

export const resetButtons = (() => {
    const buttons = document.querySelectorAll('.header button')
    buttons.forEach((button) => {
        button.classList.remove("active")
    })
})