import ImageMain from './assets/img/home-page-big.jpg'
import LogoImage from './assets/img/Logo.png'

export default function createNavBar() {
  //Main container for Nav bar
  let navContainer = document.createElement('div')
  navContainer.setAttribute('id', 'navContainer')

  // Nav bar Logo for left side
  let logoContainer = document.createElement('div')
  const Logo = new Image()
  Logo.src = LogoImage
  logoContainer.setAttribute('id', 'logoContainer')
  logoContainer.appendChild(Logo)

  // Nav Bar Menu Items for center of nav bar
  let navBarMenu = document.createElement('div')
  navBarMenu.setAttribute('id', 'navBarMenu')
  let navBarItem1 = document.createElement('div')
  navBarItem1.setAttribute('id', 'navHome')
  navBarItem1.className = 'navBarItem'
  navBarItem1.innerText = 'Home'
  let navBarItem2 = document.createElement('div')
  navBarItem2.setAttribute('id', 'navMenu')
  navBarItem2.className = 'navBarItem'
  navBarItem2.innerText = 'Menu'
  let navBarItem3 = document.createElement('div')
  navBarItem3.setAttribute('id', 'navAbout')
  navBarItem3.className = 'navBarItem'
  navBarItem3.innerText = 'About'

  // Icons for right side of nav bar
  let navBarIcons = document.createElement('div')
  navBarIcons.setAttribute('id', 'navBarIcons')
  let navBarIcon1 = document.createElement('span')
  navBarIcon1.className = 'material-symbols-outlined'
  navBarIcon1.innerText = 'search'
  let navBarIcon2 = document.createElement('span')
  navBarIcon2.className = 'material-symbols-outlined'
  navBarIcon2.innerText = 'favorite'
  let navBarIcon3 = document.createElement('span')
  navBarIcon3.className = 'material-symbols-outlined'
  navBarIcon3.innerText = 'settings'

  navBarMenu.append(navBarItem1, navBarItem2, navBarItem3)
  navBarIcons.append(navBarIcon1, navBarIcon2, navBarIcon3)

  navContainer.append(logoContainer, navBarMenu, navBarIcons)

  let mainContainer = document.getElementById('content')
  
  let homeContainer = document.createElement('div')
  homeContainer.setAttribute('id', 'buttonContent')
  homeContainer.classList.add('homeBackgroundImg')
  mainContainer.append(navContainer, homeContainer)
}

export function createMainImage() {
  const MainImage = new Image()
  MainImage.src = ImageMain
  let imageContainer = document.createElement('div')

  let mainContainer = document.getElementById('content')
  mainContainer.appendChild(navContainer)
}

export function updateHomeBackground() {
  let buttonContent = document.getElementById('buttonContent')
  buttonContent.classList.add('homeBackgroundImg')
  buttonContent.classList.remove('menuBackgroundImg')
  buttonContent.classList.remove('aboutBackgroundImg')

}

export function updateMenuBackground() {
  let buttonContent = document.getElementById('buttonContent')
  buttonContent.classList.remove('homeBackgroundImg')
  buttonContent.classList.add('menuBackgroundImg')
  buttonContent.classList.remove('aboutBackgroundImg')

}

export function updateAboutBackground() {
  let buttonContent = document.getElementById('buttonContent')
  buttonContent.classList.remove('homeBackgroundImg')
  buttonContent.classList.remove('menuBackgroundImg')
  buttonContent.classList.add('aboutBackgroundImg')}

export function cleanContent() {
  let mainContainer = document.getElementById('content')
  mainContainer.removeChild(mainContainer.firstChild)

}