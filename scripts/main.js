document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    // Footer information
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last update: ${lastModified}`;
});
