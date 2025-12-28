"use strict";

window.onload = function () {
  document.querySelector('.preloader').classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.querySelector('.preloader').classList.add('loaded');
    document.querySelector('.preloader').classList.remove('loaded_hiding');
    document.body.classList.add('loaded');
  }, 500);
};
let menu = document.querySelector('.header__burger');
menu.addEventListener("click", () => {
  let elems = document.querySelectorAll('.header__burger, .header__menu_burger');
  for (let elem of elems) {
    elem.classList.toggle('active');
  }
});
