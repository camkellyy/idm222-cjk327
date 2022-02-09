// TOGGLE MENU
const toggleBtn = document.getElementsByClassName('nav__toggle')[0];
const items = document.getElementsByClassName('nav__item');
const menu = document.getElementsByClassName('nav__menu');

toggleBtn.addEventListener('click', function() {
    for (var i=0; i<items.length; i++)
    items[i].classList.toggle('active');
});


