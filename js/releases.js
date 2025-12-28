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
const releases = [{
  title: 'Останусь молодым (2025)',
  image: '../img/releases/ostanusmolodim.png',
  window: '<iframe class="frame" allow="clipboard-write" style="border:none;" width="614" height="556" src="https://music.yandex.by/iframe/album/37467968">Слушайте <a href="https://music.yandex.by/album/37467968?utm_source=web&utm_medium=copy_link">Останусь молодым</a> — <a href="https://music.yandex.by/artist/24474793">Страх за дверью</a> на Яндекс Музыке</iframe>'
}, {
  title: 'Постой (2025)',
  image: '../img/releases/postoi.png',
  window: '<iframe class="frame" frameborder="0" allow="clipboard-write" style="border:none;" width="614" height="556" src="https://music.yandex.by/iframe/album/37832164">Слушайте <a href="https://music.yandex.by/album/37832164?utm_source=web&utm_medium=copy_link">Постой</a> — <a href="https://music.yandex.by/artist/24474793">Страх за дверью</a> на Яндекс Музыке</iframe>'
}];
let currentRelease = 0;
function updateRelease() {
  let title = document.querySelector('.release__title'),
    image = document.querySelector('.release__disk > img'),
    window = document.querySelector('.release__window');
  title.textContent = releases[currentRelease].title;
  image.src = releases[currentRelease].image;
  window.innerHTML = releases[currentRelease].window;
  return window; //возвращаем окно с плеером для удобства
}
function showRelease(release) {
  let content = document.querySelector('.release');
  content.classList.add('hide-release');
  content.classList.remove('show-release');
  setTimeout(() => {
    if (release >= releases.length) {
      currentRelease = 0;
    } else if (release < 0) {
      currentRelease = releases.length - 1;
    } else currentRelease = release;
    updateRelease();
    setTimeout(() => {
      content.classList.add('show-release');
      content.classList.remove('hide-release');
    }, 300);
  }, 300);
}
let arrowNext = document.querySelector('.button__next'),
  arrowPrevious = document.querySelector('.button__previous');
arrowNext.addEventListener('click', () => showRelease(currentRelease + 1));
arrowPrevious.addEventListener('click', () => showRelease(currentRelease - 1));
document.addEventListener('DOMContentLoaded', updateRelease());
