export function initializeCommon() {
    document.addEventListener('DOMContentLoaded', () => {
        const hamButton = document.querySelector('#menu');
        const navigation = document.querySelector('.navigation');

        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const currentLocation = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentLocation) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });


    document.addEventListener('DOMContentLoaded', () => {
        const currentYear = new Date().getFullYear();
        const lastModified = document.lastModified;
        const copyrightYearElement = document.getElementById('currentyear');
        const lastModifiedElement = document.getElementById('lastModified');
        copyrightYearElement.textContent = currentYear;
        lastModifiedElement.textContent = `Last update: ${lastModified}`;
    });
}