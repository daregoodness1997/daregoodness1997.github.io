var action = document.querySelector('a')
var body = document.querySelector('body')
var head = document.querySelector('h1')
console.log(head)

function changeColor() {
    body.classList.toggle('dark')
    head.classList.toggle('dark')

}

action.addEventListener('click', changeColor, false)