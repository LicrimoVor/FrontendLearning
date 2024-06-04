const theme = localStorage.getItem('theme') || 'app_dark_theme';
const preload = document.querySelector('#preload');
preload.className = theme;
