const hambergerBars = document.getElementById('hamberger-bars')

hambergerBars.addEventListener('click', () => {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('active')
})