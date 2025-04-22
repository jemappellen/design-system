//Theme change

const changeTheme = () => {
    if (document.getElementById('theme-switch').innerHTML === 'Dark Mode') {
        document.getElementsByTagName('body').classList.remove('light-mode', 'dark-theme');
        document.getElementsByTagName('body').classList.add('light-mode');
    } else {
        document.getElementsByTagName('body').classList.remove('light-mode', 'dark-theme');
        document.getElementsByTagName('body').classList.add('dark-mode');
    }
  };

document.getElementById('theme-switch').addEventListener('click', () => changeTheme());