// teks typing
const typing = document.querySelector('.teks3 span');
const profesi = ['Youtuber', 'Developer', 'Freelancer'];

let indexProfesi = 0;
let indexChar = 0;
let hapus = false;

function typeEffect() {
    const curProfesi = profesi[indexProfesi];
    const curChar = curProfesi.substring(0, indexChar);
    typing.textContent = curChar;
    typing.classList.add('stop-blink');

    if (!hapus && indexChar < curProfesi.length) {
        indexChar++;
        setTimeout(typeEffect, 200);
    } else if (hapus && indexChar > 0) {
        indexChar--;
        setTimeout(typeEffect, 100);
    } else {
        hapus = !hapus;
        typing.classList.remove('stop-blink');
        if (!hapus) {
            indexProfesi = (indexProfesi + 1) % profesi.length;
        }
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

const navbar = document.querySelector('.navbar');

window.onscroll = function() {
    if (window.scrollY > 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


typing.classList.add('typing-cursor');
