//Theme change
const changeTheme = () => {
    const body = document.body;
    if (body.id === 'light-mode') {
        body.id = 'dark-mode';
        document.getElementById('theme-switch').innerHTML = 'Light Mode';
    } else {
        body.id = 'light-mode';
        document.getElementById('theme-switch').innerHTML = 'Dark Mode';
    }
};


document.getElementById('theme-switch').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default action of the anchor tag
    changeTheme();
});