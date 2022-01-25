const input_txt = document.getElementById('todotxt')
const add_btn = document.querySelector(".add-btn")
const todolst = document.getElementById('todo-view')

add_btn.addEventListener('click',() => {
    const li = document.createElement('li')

    const text = document.createTextNode(input_txt.value)
    li.appendChild(text)
    
    // li.appendChild(textnode)
    todolst.appendChild(li)
    input_txt.value = ''
    li.addEventListener('dblclick', ()=> {
        todolst.removeChild(li)
    })
    
})
function Darkmode() {
    const body = document.body;
    body.classList.add("dark")
    if(body.classList.contains("dark")) {
        todolst.style.color = '#000'
    }
}