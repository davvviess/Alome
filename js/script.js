const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {

    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
        // Close menu
        mobileMenu.classList.add(
            'max-h-0',
            'opacity-0',
            '-translate-y-3'
        );

        mobileMenu.classList.remove(
            'max-h-96',
            'opacity-100',
            'translate-y-0'
        );

        menuBtn.innerHTML = '&#9776;';
        menuBtn.setAttribute('aria-expanded', 'false');

    } else {
        // Open menu
        mobileMenu.classList.remove(
            'max-h-0',
            'opacity-0',
            '-translate-y-3'
        );

        mobileMenu.classList.add(
            'max-h-96',
            'opacity-100',
            'translate-y-0'
        );

        menuBtn.innerHTML = '&times;';
        menuBtn.setAttribute('aria-expanded', 'true');
    }

});

// Close menu after clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {

        mobileMenu.classList.add(
            'max-h-0',
            'opacity-0',
            '-translate-y-3'
        );

        mobileMenu.classList.remove(
            'max-h-96',
            'opacity-100',
            'translate-y-0'
        );

        menuBtn.innerHTML = '&#9776;';
        menuBtn.setAttribute('aria-expanded', 'false');

    });
});

document.getElementById('current-year').textContent =
        new Date().getFullYear();