// dark-mode.js
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('click', function() {
        toggleDarkMode();
    });

    // Check cookie on page load
    const darkModeCookie = document.cookie.split(';').find(cookie => cookie.includes('darkMode='));
    if (darkModeCookie) {
        const isDarkMode = darkModeCookie.split('=')[1] === 'true';
        setDarkMode(isDarkMode);
    }
});

function toggleDarkMode() {
    const isDarkMode = !document.body.classList.contains('dark-mode');
    setDarkMode(isDarkMode);
    document.cookie = `darkMode=${isDarkMode}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function setDarkMode(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.querySelectorAll('.card, .header').forEach(element => element.classList.toggle('dark-mode', isDarkMode));
}
