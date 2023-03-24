import './styles/style.css'

import createNavBar from './home.js'
import createInitialContent from './home.js'
import updateHomeBackground from './home.js'
import updateMenuBackground from './home.js'
import updateAboutBackground from './home.js'
import cleanContent from './home.js'

createNavBar()
// need to create the box of text that generates per click
// maybe fix the images

let homeButton = document.getElementById('navHome')
let buttonContent = document.getElementById('buttonContent')
let aboutButton = document.getElementById('navAbout')
let menuButton = document.getElementById('navMenu')


homeButton.onclick = () => {
    buttonContent.classList = "";
    buttonContent.classList.add('homeBackgroundImg')
    homeButton.classList.add('active')
    aboutButton.classList.remove('active')
    menuButton.classList.remove('active')
}

menuButton.onclick = () => {
    buttonContent.classList = "";
    buttonContent.classList.add('menuBackgroundImg')

    homeButton.classList.remove('active')
    aboutButton.classList.remove('active')
    menuButton.classList.add('active')
}

aboutButton.onclick = () => {
    buttonContent.classList = "";
    buttonContent.classList.add('aboutBackgroundImg')
    homeButton.classList.remove('active')
    aboutButton.classList.add('active')
    menuButton.classList.remove('active')
}

