let bodyEl = document.getElementById('body')
let modeBtn = document.getElementById('mode-btn')
let modeText = document.getElementById("mode")

//toggle modes
modeBtn.addEventListener('click', ()=> {
    bodyEl.classList.toggle('dark-mode')
    bodyEl.classList.toggle('light-mode')
    modeText.textContent = modeText.textContent == "Dark Mode" ? "Light Mode" : "Dark Mode"
})