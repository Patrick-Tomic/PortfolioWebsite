export default function buildBlog(){
    const main = document.querySelector('main')
    const blog = document.createElement('ol')
    blog.classList.add('blog')
    blog.appendChild(post('December 17th, 2023', "Today's Work", 'Today I am learning alot and creating the blog portion of my site. I am excited to start writing in here and putting my thoughts for anyone to see. The past few days I have been learning about Jest and the possibilities that I can use the framework with. I watched a bit of "Fun Fun Function" and he did a great job explaining test runners and the basic syntax of Jest through if statements. It was a little daunting at first but I feel able. I started a repo for practicing the framework and I am diving more in depth into TypeScript as I would prefer to use the language over Javascript for ease of seeing errors and keeping track of my code. In turn of using Jest I am exploring Babel the Javascript Transpiler I hope it gets some good use. Hoping to do alot of testing on my break and to produce a bit of The fighter foundation home page once I get home later. Thats about it for today, excited to keep learning and building, Ciao<br>-Patrick'))
    blog.appendChild(post('December 19th, 2023', 'Jest, TypeScript, and Holidays', "Alright so alot of documentation today, I have gone over a fair bit of TS's documentation and I am learning I should of done this earlier. I sort of been going into the unknown with TS and I had enough with it today when I couldnt import the logo for the fighter foundation. Browsing anything I could find on the web made me learn I have to do a dive into TS and I am willing to beat the language and learn everything I need. The most daunting thing for me was the tsconfig.json but after going over a few flags like noImplicitAny I honestly dont think its too bad anymore<br><br> yesterday I went over alot of the essentials of Jest and read some articles about pure functions, mocking, and Unit Tests, heres a brief overview:<br><b onclick= `window.open('https://www.geeksforgeeks.org/pure-functions-in-javascript/')`>Pure Functions</b><br> A function is pure if it always returns the same result if the same arguments are passed, it doesnt depend on any use state or data, it must only depend on the input arguments. The function must not produce any observable side effects such as network requests, input or output devices or data mutation.<br><b>Mocking</b><br> A mock is a test double that stands in for real implementation code during the unit testing process<br><b>Unit Test</b><br>A unit test tests individual units in isolation from the rest of the program<br> There is also the idea of test coverage and that refers to the amount of code that is covered by test cases, code coverage shouldnt ever be 100% as it does not result in 100% case coverage<br>Tight Coupling is the reason why mocking exists. Tight coupling makes code rigid and brittle, and less coupling is very desirable for the sake of making code easier to extend and maintain, also it allows for the elimination of mocking.<br> The holidays are somewhat stressful as always but I am just excited to spend some time with my family and to enjoy the cold.<br> Thats if from me for know, Merry Christmas to whoever see this and I hope 2023 was a great year for you<br>-Patrick"))
   

   
   
    main.appendChild(blog)
   
}
function post(date, title, detail, img) {
    
const li = document.createElement('li')
const h2 = document.createElement('h2')
const text = document.createElement('p')
li.innerHTML = date
h2.innerHTML = title
text.innerHTML = detail
if (img != undefined) {
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')
    const img = document.createElement('img')
    img.src = img
    headerDiv.appendChild(h2)
    headerDiv.appendChild(img)
}else {
li.appendChild(h2)
}
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
