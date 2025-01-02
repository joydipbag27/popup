const getBtn = document.querySelector('.get-newsletter')
const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.ri-close-large-line')

getBtn.addEventListener('click', () =>{
    popup.classList.add('open')
})
closeBtn.addEventListener('click', () =>{
    popup.classList.remove('open')
})