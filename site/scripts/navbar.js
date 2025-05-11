function toggleNav() {
    const nav = document.querySelector('nav');
    const mainContent = document.querySelector('.main-content');
    nav.classList.toggle('open');
    mainContent.classList.toggle('shift');
}
