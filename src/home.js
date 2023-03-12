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
  navBarItem1.className = 'navBarItem'
  navBarItem1.innerText = 'Home'
  let navBarItem2 = document.createElement('div')
  navBarItem2.className = 'navBarItem'
  navBarItem2.innerText = 'Menu'
  let navBarItem3 = document.createElement('div')
  navBarItem3.className = 'navBarItem'
  navBarItem3.innerText = 'About'

  // Icons for right side of nav bar
  let navBarIcons = document.createElement('div')
  navBarIcons.setAttribute('id', 'navBarIcons')
  let navBarIcon1 = document.createElement('div')
  navBarIcon1.className = 'navBarIcon'
  navBarIcon1.innerText = 'Icon'
  let navBarIcon2 = document.createElement('div')
  navBarIcon2.className = 'navBarIcon'
  navBarIcon2.innerText = 'Icon'
  let navBarIcon3 = document.createElement('div')
  navBarIcon3.className = 'navBarIcon'
  navBarIcon3.innerText = 'Icon'

  navBarMenu.append(navBarItem1, navBarItem2, navBarItem3)
  navBarIcons.append(navBarIcon1, navBarIcon2, navBarIcon3)

  navContainer.append(logoContainer, navBarMenu, navBarIcons)

  let mainContainer = document.getElementById('content')
  mainContainer.appendChild(navContainer)
}

export function createMainImage() {
  const MainImage = new Image()
  MainImage.src = ImageMain
  let imageContainer = document.createElement('div')
  imageContainer

  let mainContainer = document.getElementById('content')
  mainContainer.appendChild(navContainer)
}
