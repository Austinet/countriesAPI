let bodyEl = document.getElementById('body')
let modeBtn = document.getElementById('mode-btn')

modeBtn.addEventListener('click', ()=> {
    bodyEl.classList.toggle('dark-mode')
    bodyEl.classList.toggle('light-mode')
})
