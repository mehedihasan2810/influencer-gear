const addOnEventListener = function (element, type, callback) {
   for(let i = 0; i < element.length; i++){
    element[i].addEventListener(type, callback);
   }
}

const dataNavToggler = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleMenu = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addOnEventListener(dataNavToggler, "click", toggleMenu)