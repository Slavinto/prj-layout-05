import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const menu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuList = document.querySelector(".menu__list");


menu.addEventListener("click", () => {
    menu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    menuList.classList.toggle("_active");
});
