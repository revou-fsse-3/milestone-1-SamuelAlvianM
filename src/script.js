// make toggle for hamburger
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
};


// sticky navbar &scroll section active link
const sections =document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x-circle');
navbar.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const dynamicWord = document.getElementById('dynamicText');
    const words = ['Service', 'Progress', 'Achievements'];
    let index = 0;

    function changeWord() {
        dynamicWord.style.opacity = 0;
        setTimeout(function () {
            dynamicWord.textContent = words[index];
            dynamicWord.style.opacity = 1;
            index = (index + 1) % words.length;
        }, 500);
    }
});
