import buildHeader from './header'
import weather from './pics/weatherImg.png'
import battleShip from './pics/Battleship.png'
import FF from './pics/FF.png'
import buildSkills from './skills'
import buildProject from './project'
export default function buildMain(){
buildHeader()
buildSkills()
buildProject(FF, 'https://fighter-foundation2-0.vercel.app/', 'https://github.com/Patrick-Tomic/FighterFoundation2.0', 'So this is my first Volunteering project for a nonprofit in my area, The Fighter Foundation. I absolutely love the mission presented within this organization and I hope to help and make a difference in the growth. <br> for this project I am using React, Tailwind CSS, TypeScript, and Vite. Hosting on Vercel.','Fighter Foundation Rebuild')
buildProject(battleShip,'https://patrick-tomic.github.io/BattleShip/','https://github.com/Patrick-Tomic/BattleShip','From this project I implemented my first TDD in building, I did large amounts of code review and learned that smaller quantities of code can definetly be as strong as hundreds of lines','BattleShip') 
buildProject(weather,'https://patrick-tomic.github.io/WeatherAPI/','https://github.com/Patrick-Tomic/WeatherAPI','This application is my first time utilizing a API, I do some simple animations within this project and learned alot through the use of responsive design and animation','Weather Application')
 const formDiv = document.createElement('div')
 formDiv.classList.add('formDiv')
const form = document.createElement('form')
form.action = "processForm.php"
form.method = "post"
for(let i=0; i<4;i++){
    const input = document.createElement('input')
    const label = document.createElement('label')
    input.required = true
    switch(i){
        case 0:
            label.for = 'name'
            label.innerHTML = 'Full Name:'
            input.type ='text'
            input.name = 'name'
            input.placeholder = 'Johnathan Ramsey Doe'
            form.appendChild(label)
            form.appendChild(input)
            break
        case 1:
            label.for = 'email'
            label.innerHTML = 'Email Address:'
            input.placeholder = 'johnRdoe@hotmail.com'
           
            input.type ='email'
            input.name = 'email'
            form.appendChild(label)
            form.appendChild(input)
            break
        case 2:
            label.for = 'phone'
            label.innerHTML = 'Phone Number:'
            input.type ='tele'
            input.placeholder= '***-***-****'
            input.name = 'phone'
            form.appendChild(label)
            form.appendChild(input)
            break
        case 3:
            label.for = 'description'
            label.innerHTML = 'Give context to project'
            const textArea = document.createElement('textarea')
            textArea.name = 'description'
            textArea.cols = '10'
            textArea.rows = '5'
            form.appendChild(label)
            form.appendChild(textArea)
            break
     } 
    }
    const input = document.createElement('input')
    input.type = 'submit'
    input.value = 'submit'
    input.classList.add('submit')
    form.appendChild(input)
    const main = document.querySelector('main')
    const contactMe = document.createElement('div')
    contactMe.classList.add('contact')
    const h3 = document.createElement('h3')
    h3.innerHTML = 'How to get in touch'
    contactMe.appendChild(h3)
    const p = document.createElement('p')
    p.innerHTML = 'I am willing to work with anyone on any project or idea that they have in mind! fill out this form and I will message you as soon as I am available.<br> Have a great day and may we all live long and prosper<br><br> -Patrick '
    contactMe.appendChild(p)
    formDiv.appendChild(contactMe)
    formDiv.appendChild(form)
    main.appendChild(formDiv)

}
 
