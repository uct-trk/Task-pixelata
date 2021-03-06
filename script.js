// selectors
const menuIcon = document.querySelector(".header-right-menu_button");
const navbar = document.querySelector(".hamburger-menu");
const form = document.querySelector(".form-section");
const footer = document.querySelector(".container");
const slogan = document.querySelector(".page-info");
const box = document.querySelector(".box2");
const btn = document.querySelector(".header-right-menu_button");



// hamburger menu acılıp kapanıyor
menuIcon.addEventListener("click", toggleMenu);

function toggleMenu(){
    navbar.classList.toggle("hamburger-menu-show")
    form.classList.toggle("form-section-remove")
    footer.classList.toggle("container-removed")
    slogan.classList.toggle("page-info-removed")
    box.classList.toggle("box2-add")
    btn.classList.toggle("header-right-menu_button-active")
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("active");
}
