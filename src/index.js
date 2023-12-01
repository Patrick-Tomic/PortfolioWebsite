import './style.scss'
import buildSideBar from './sidebar'
import buildMain from './buildMain'
const name = document.querySelector('.name')
const main = document.querySelector('main')
const body = document.querySelector('body')
name.addEventListener('click',()=>{
    main.innerHTML = ''
    body.style.backgroundColor = '#343434'
    buildMain()  
})
buildMain()
buildSideBar()