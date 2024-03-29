import java from './pics/java.png'
import sass from './pics/sass.png'
import css from './pics/css.png'
import html from './pics/html.png'
import js from  './pics/js.png'
import py from './pics/python.png'
import sql from './pics/sql.png'
import wp from './pics/webpack.png'
import ts from './pics/ts.png'
import jest from './pics/jest.png'
import tailwind from './pics/tailwind.png'
import react from './pics/react.png'
import vite from './pics/Vitejs-logo.svg'
export default function buildSkills(){
    const wrap = document.createElement('div')
    const main = document.querySelector('main')
    wrap.classList.add('skills')
    const skills = document.createElement('div')
    skills.classList.add('wrap')
    const h2 = document.createElement('h2')
    h2.innerHTML = "My Skillset"
    wrap.appendChild(h2)
    let count = 0
    while(count < 13){
        const img = document.createElement('img')
        const p = document.createElement('p')
        const card = document.createElement('div')
  
        card.classList.add('card')
        switch(count){
            case 0:
                img.title = 'Java'               
                img.src = java
                img.alt = 'Java'
                img.id = 'java'
                p.innerHTML = img.title
                p.classList.add('java')
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 1:
                img.title = 'Python'
                img.src = py
                img.alt = 'Python'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 2:
                img.title = 'HTML'
                img.src = html
                p.classList.add('html')

                img.alt = 'HTML'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 3:
                img.title = 'CSS'
                img.src = css
                img.alt = 'CSS'
               
                p.classList.add('css')
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 4:
                img.title = 'JavaScript'
                img.style.marginLeft = '20px'
                img.src = js
                img.alt = 'JavaScript'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 5:
                img.title = 'mySQL'
                img.src = sql
                img.alt = 'mySQL'
                p.style.marginLeft = '8px'
                p.classList.add('sql')
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 6:
                img.title = 'Sass'
                img.src = sass
                img.alt = 'Sass'
                p.style.marginLeft = '5px'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 7:
                img.title = 'Webpack'
                img.src = wp
                img.classList.add('webpack')
                img.alt = 'Webpack'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 8:
                img.title = 'TypeScript'
                img.src = ts
                img.style.marginLeft = '20px'
                img.alt = 'Typescript'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 9:
                img.title = 'Jest'
                img.src = jest
                img.alt = 'Jest'
                p.innerHTML = img.title
                p.style.marginLeft='10px'
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 10:
                img.title = 'Tailwind'
                img.src = tailwind
                img.alt = 'Tailwind'
                p.innerHTML = img.title
            img.classList.add('tailwind')
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 11:
                img.title = 'React'
                img.src = react
                p.id = 'react'
                img.alt = 'React'
                img.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 12:
                img.title = 'Vite'
                p.id = 'vite'
                img.src = vite
                img.alt = 'Vite'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
        }
        wrap.appendChild(skills)
        main.appendChild(wrap)
    }
}