const menuToggle = document.querySelector('.nav-toggle input')
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
})

