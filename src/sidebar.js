import buildMain from './buildMain'
import buildAboutMe from './about'
export default function buildSideBar(){
    const side = document.querySelector('.side')
    const btn = document.querySelector('.sideBarBtn')
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove')
    const sideBar = document.createElement('div')
    sideBar.setAttribute('class','sideBar')
    removeBtn.innerHTML = '<svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="43.6846" height="7.9553" rx="3.97765" transform="matrix(0.74681 0.665037 -0.787811 0.615917 6.26721 1.9906)" fill="white"/> <rect width="42.9248" height="8.08818" rx="4.04409" transform="matrix(-0.678302 0.734783 -0.841244 -0.540656 37.3516 4.37292)" fill="white"/> </svg>'
    btn.addEventListener('click',()=>{
    
       sideBar.setAttribute('id','active')
    })
    removeBtn.addEventListener('click',()=>{
        sideBar.removeAttribute('id','active')
    })
    sideBar.appendChild(removeBtn)
   const homeDiv = document.createElement('div')
   homeDiv.classList.add('btnDiv')
const p = document.createElement('p')
p.innerHTML = '<svg width="40" height="40" viewBox="0 0 183 150" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="41" y="50" width="100" height="100" rx="10" fill="#FFBF00"/> <path d="M84.626 6.50611C88.482 2.85646 94.518 2.85645 98.374 6.5061L152.502 57.7372C159.069 63.9529 154.671 75 145.628 75H37.3717C28.3295 75 23.9305 63.9529 30.4977 57.7372L84.626 6.50611Z" fill="#FFBF00"/><path d="M74 106C74 100.477 78.4772 96 84 96H98C103.523 96 108 100.477 108 106V150H74V106Z" fill="black"/></svg>'
   const home = document.createElement('button')
   const main = document.querySelector('main')
    home.innerHTML = 'Home'
    home.classList.add('btn')
    const body = document.querySelector('body')
    home.addEventListener('click',()=>{
        main.innerHTML = ''
        body.style.backgroundColor = '#343434'
        buildMain()
    })
    homeDiv.appendChild(home)
    homeDiv.appendChild(p)
    sideBar.appendChild(homeDiv)
    const aboutDiv = document.createElement('div')
    aboutDiv.classList.add('btnDiv')
     const aboutP = document.createElement('p')
     const aboutBtn = document.createElement('button')
     aboutBtn.addEventListener('click',()=>{
        main.innerHTML = ''
        body.style.backgroundColor = '#F4BB44'
        buildAboutMe()
     })
     aboutBtn.innerHTML = 'About Me'
     aboutBtn.classList.add('btn')
     aboutDiv.appendChild(aboutBtn)
     aboutDiv.appendChild(aboutP)
     sideBar.appendChild(aboutDiv)
    side.appendChild(sideBar)
}