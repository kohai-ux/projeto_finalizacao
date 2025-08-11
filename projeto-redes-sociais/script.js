// Efeito fade-in ao rolar a página
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
