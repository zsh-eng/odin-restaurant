import { inputFactory } from './factory.js'
import { resetButtons } from './header.js'

export const contactPage = (() => {
    resetButtons()
    document.querySelector('.contact-button').classList.add('active')

    const contactButton = document.querySelector('.contact-button')
    contactButton.classList.add('active')
    const content = document.querySelector('#content')
    content.innerHTML = ""
    
    const form = document.createElement('form')
    form.appendChild(inputFactory("Name: ", "name"))
    form.appendChild(inputFactory("Contact: ", "phone"))
    form.setAttribute("class", "animate__animated animate__fadeIn")

    content.appendChild(form)
})