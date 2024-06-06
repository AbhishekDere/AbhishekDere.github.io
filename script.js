document.addEventListener('DOMContentLoaded', () => {
    const cursorRounded = document.querySelector('.cursor.rounded');
    const cursorPointed = document.querySelector('.cursor.pointed');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('#hero');
        const mainContent = document.querySelector('main');
        const sections = document.querySelectorAll('main section');

        if (window.scrollY > window.innerHeight) {
            heroSection.style.opacity = '0';
            mainContent.classList.add('show-content');
        } else {
            heroSection.style.opacity = '1';
            mainContent.classList.remove('show-content');
        }

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight) {
                section.classList.add('active');
            }
        });
    });
});
