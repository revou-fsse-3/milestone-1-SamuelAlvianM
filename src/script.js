// sticky navbar
window.onscroll = () =>{
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
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

    // Ganti kata setiap 3 detik
    setInterval(changeWord, 2000);
});