const togglemenu =document.querySelector(".toggle__menu");
const headermenu = document.querySelector(".header__nav")
togglemenu.addEventListener("click", () => {
    togglemenu.classList.toggle('open');
    headermenu.classList.toggle("open");
    headermenu.style=("transition: .5s ease");
})