import portait from './Tomic.P.jpg'
import buildSkills from './skills'
import './style.scss'
import buildSideBar from './sidebar'
const header = document.querySelector('.header')
const img = document.createElement('img')
img.src = portait
img.classList.add('portrait')
header.appendChild(img)
buildSkills()
buildSideBar()