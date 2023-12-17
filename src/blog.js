export default function buildBlog(){
    const main = document.querySelector('main')
    const blog = document.createElement('ol')
    blog.classList.add('blog')
    blog.appendChild(post('December 17th, 2023', "Today's Work", 'Today I am learning alot and creating the blog portion of my site. I am excited to start writing in here and putting my thoughts for anyone to see. The past few days I have been learning about Jest and the possibilities that I can use the framework with. I watched a bit of "Fun Fun Function" and he did a great job explaining test runners and the basic syntax of Jest through if statements. It was a little daunting at first but I feel able. I started a repo for practicing the framework and I am diving more in depth into TypeScript as I would prefer to use the language over Javascript for ease of seeing errors and keeping track of my code. In turn of using Jest I am exploring Babel the Javascript Transpiler I hope it gets some good use. Hoping to do alot of testing on my break and to produce a bit of The fighter foundation home page once I get home later. Thats about it for today, excited to keep learning and building, Ciao<br>-Patrick'))
    const listItems = document.querySelectorAll('li')

   
   
    main.appendChild(blog)
   
}
function post(date, title, detail) {
const li = document.createElement('li')
const h2 = document.createElement('h2')
const text = document.createElement('p')
li.innerHTML = date
h2.innerHTML = title
text.innerHTML = detail
li.appendChild(h2)
li.appendChild(text)
li.addEventListener('click', () => {
    if(h2.style.display === 'block') {
        h2.style.display = 'none'   
        text.style.display = 'none'
        return
    }
    h2.style.display = 'block'
    text.style.display = 'block'
})
return li
}
