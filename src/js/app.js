import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from "swiper";

// const swiper = new Swiper();
const menu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuChildren = document.querySelector(".menu__icon").children;

menu.addEventListener("click", () => {
    menu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    // Array.from(menuChildren).forEach((child) =>
    //     child.classList.toggle("_active")
    // );
});
