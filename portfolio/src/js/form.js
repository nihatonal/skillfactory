const footerBtn = document.querySelector(".footer__button");
const formClose = document.querySelector(".modal__form-close");
const form = document.querySelector(".modal__form");

export function initForm() {
    footerBtn.addEventListener("click", openForm);
    formClose.addEventListener("click", closeForm);
}

function openForm() {
    form.classList.add("is-active");
}

function closeForm() {
    form.classList.remove("is-active");
}