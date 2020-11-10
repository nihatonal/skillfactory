function pageLoaded(){
    const menuBtn = document.querySelector(".menu__button");
    const closeMenuBtn = document.querySelector(".menu__mobile-close");
    const menu = document.querySelector(".menu__mobile");
    const footerBtn = document.querySelector(".footer__button");
    const footerClose = document.querySelector(".modal__form-close");
    const form  =document.querySelector(".modal__form");

    menuBtn.addEventListener("click", menuOpen);
    closeMenuBtn.addEventListener("click", menuClose);

    function menuOpen (){
        menu.classList.add("is-active");
    }
    function menuClose (){
        menu.classList.remove("is-active");
    }

    footerBtn.addEventListener("click", openForm);
    footerClose.addEventListener("click", closeForm);

    function openForm (){
        form.classList.add("is-active");
    }
    function closeForm (){
        form.classList.remove("is-active");
    }

}


document.addEventListener("DOMContentLoaded", pageLoaded);