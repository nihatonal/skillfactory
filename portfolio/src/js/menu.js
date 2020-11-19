const menuBtn = document.querySelector(".menu__button");
const closeMenuBtn = document.querySelector(".menu__mobile-close");
const menuMobile = document.querySelector(".menu__mobile");
const menu = document.querySelector(".header__wrapper");
const menuLinks = document.querySelectorAll(".header__link");

export function initMenu() {
    menuBtn.addEventListener("click", menuOpen);
    closeMenuBtn.addEventListener("click", menuClose);

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            const target = link.dataset.target;
            const targetSection = document.querySelector(`#section-${target}`);
            targetSection.scrollIntoView({behavior: 'smooth'});
            makeLinkActive(target);
        });
    })
}

function menuOpen() {
    menuMobile.classList.add("is-active");
}

function menuClose() {
    menuMobile.classList.remove("is-active");
}

export function makeLinkActive(id) {
    menu.querySelector(".is-active").classList.remove("is-active");
    menu.querySelector(`[data-target="${id}"]`).classList.add("is-active");
}