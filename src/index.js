import portait from './Tomic.P.jpg'
import weather from './weatherImg.png'
import buildSkills from './skills'
import buildProject from './project'
import './style.scss'
import buildSideBar from './sidebar'
const header = document.querySelector('.header')
const img = document.createElement('img')
img.src = portait
img.classList.add('portrait')
header.appendChild(img)
buildSkills()
buildSideBar()
buildProject(weather,'https://patrick-tomic.github.io/WeatherAPI/','https://github.com/Patrick-Tomic/WeatherAPI','This application is my first time utilizing a API, I do some simple animations within this project and learned alot through the use of responsive design and animation','Weather Application')
