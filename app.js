const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    console.log('Menu clicked'); // Check if this logs in the console
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});