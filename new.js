const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

// Переключение меню и иконки
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && e.target !== burger) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
});