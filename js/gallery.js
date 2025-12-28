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
let imageCount = 37,
  gallery = document.querySelector('.gallery');
for (let i = 1; i <= imageCount; i++) {
  let item = document.createElement('a');
  item.href = "../img/gallery/1 (" + i + ").jpg";
  item.innerHTML = "<img src='../img/gallery/1 (" + i + ").jpg' />";
  item.addEventListener('pointerover', () => {
    item.classList.add('active');
  });
  item.addEventListener('pointerleave', () => {
    item.classList.remove('active');
  });
  gallery.appendChild(item);
}
