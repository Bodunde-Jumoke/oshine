// script.js
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPageId = link.getAttribute('data-page');
        
        pages.forEach((page) => {
            if (page.id === targetPageId) {
                page.classList.remove('fade-out');
                page.classList.add('fade-in');
                page.style.display = 'block';
            } else {
                page.classList.remove('fade-in');
                page.classList.add('fade-out');
                page.style.display = 'none';
            }
        });
    });
});
