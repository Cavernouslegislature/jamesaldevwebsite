const openMenuBtnElement = document.querySelector('.menu-button');
const closeBtnElement = document.querySelector('.close-menu-btn');
const asideElement = document.querySelector('#aside-element');

openMenuBtnElement.addEventListener("click", function () {
    asideElement.classList.remove("hidden");
});

closeBtnElement.addEventListener("click", function () {
    asideElement.classList.add("hidden");
});