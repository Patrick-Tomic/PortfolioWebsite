import portait from './Tomic.P.jpg'
import './style.scss'
const header = document.querySelector('.header')
const img = document.createElement('img')
img.src = portait
img.classList.add('portrait')
header.appendChild(img)