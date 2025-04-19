const navbar = document.getElementById('navbar');
const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const typewriter = document.querySelector('.typewriter-text');
const content = typewriter.textContent;
typewriter.textContent = '';
let index = 0;

function typeText() {
    if (index < content.length) {
        typewriter.textContent += content.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}
typeText();
