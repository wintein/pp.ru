let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Функция для установки ширины слайдера равной ширине блока "Профили"
function setSliderWidth() {
    const profilesBlock = document.querySelector('.block.profiles');
    const slider = document.querySelector('.slider');

    if (profilesBlock && slider) {
        const profilesWidth = profilesBlock.offsetWidth;
        slider.style.width = `${profilesWidth}px`;
    }
}

// Функция для открытия/закрытия навигационной панели
function toggleNav() {
    const nav = document.querySelector('nav');
    const mainContent = document.querySelector('.main-content');
    nav.classList.toggle('open');
    mainContent.classList.toggle('shift');
}

// Вызов функции при загрузке страницы и при изменении размера окна
window.addEventListener('load', setSliderWidth);
window.addEventListener('resize', setSliderWidth);

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});
