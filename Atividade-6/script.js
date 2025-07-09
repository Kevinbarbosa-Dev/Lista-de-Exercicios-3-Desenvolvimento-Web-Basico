const hamburger = document.getElementById('hamburger')
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

function abrirMenu() {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    body.classList.toggle('menu-open')
}

hamburger.addEventListener('click', abrirMenu);

const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    });
});