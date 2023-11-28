import buildHeader from './header'
import weather from './pics/weatherImg.png'
import buildSkills from './skills'
import buildProject from './project'
export default function buildMain(){
buildHeader()
buildSkills()
 
buildProject(weather,'https://patrick-tomic.github.io/WeatherAPI/','https://github.com/Patrick-Tomic/WeatherAPI','This application is my first time utilizing a API, I do some simple animations within this project and learned alot through the use of responsive design and animation','Weather Application')
}
 
