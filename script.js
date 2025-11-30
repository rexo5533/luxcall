function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

/* SCROLL FADE-IN */
const fadeElements = document.querySelectorAll('.fade');

function fadeCheck() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", fadeCheck);
window.addEventListener("load", fadeCheck);
