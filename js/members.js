"use strict";

window.onload = function () {
  document.querySelector('.preloader').classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.querySelector('.preloader').classList.add('loaded');
    document.querySelector('.preloader').classList.remove('loaded_hiding');
    document.body.classList.add('loaded');
  }, 500);
};

//информация на странице участников

const images = [['../img/members/vanya2.jpg', '../img/members/vanya.jpg', '../img/members/vanya3.jpg'], ['../img/members/mrivan.jpg', '../img/members/mrivan2.jpg', '../img/members/mrivan3.jpg'], ['../img/members/senya.jpg', '../img/members/senya2.jpg', '../img/members/senya3.jpg']];
const text = [{
  title: 'Иван "Малолетний панк"',
  description: 'представитель безкультурья и поганой молодёжи. Автор всех текстов группы страх за дверью и прообраз чёрного ловеласа'
}, {
  title: 'Мистер Иван',
  description: '"басс не слышно? да я вам так его накручу, что перепонки лопнут нахуй!" Мистер Иван - универсальный солдат группы сзд. Сейчас отвечает за добавление плотных бас партий в песни.'
}, {
  title: 'Сеня “барабанщик”',
  description: 'Реинкарнация хендрикса и самый настоящий панк, генератор мощнейших соло партий и риффов. '
}];
let currentImage = 0,
  currentMember = 2;
function updateImages() {
  let previous = document.querySelector('.member-gallery__item_previous'),
    active = document.querySelector('.member-gallery__item_active'),
    next = document.querySelector('.member-gallery__item_next');
  previous.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.49)), url(${images[currentMember][getImage(currentImage - 1, images[currentMember])]}) center / cover`;
  active.style.background = `url(${images[currentMember][getImage(currentImage, images[currentMember])]}) center / cover`;
  next.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.49)), url(${images[currentMember][getImage(currentImage + 1, images[currentMember])]}) center / cover`;
}
function showMember(member) {
  let content = document.querySelector('.members__member');
  content.classList.add('hide-member');
  content.classList.remove('show-member');
  if (member >= text.length) {
    currentMember = 0;
  } else if (member < 0) {
    currentMember = text.length - 1;
  } else currentMember = member;
  setTimeout(() => {
    updateImages();
    content.querySelector('.member__name').textContent = text[currentMember].title;
    content.querySelector('.member__description').textContent = text[currentMember].description;
    content.classList.add('show-member');
    content.classList.remove('hide-member');
  }, 300);
}
function getImage(index, array) {
  if (index < 0) {
    return array.length - 1;
  } else if (index === array.length) {
    return 0;
  } else {
    return index;
  }
}
document.addEventListener('DOMContentLoaded', updateImages());
let arrowNext = document.querySelector('.button__next'),
  arrowPrevious = document.querySelector('.button__previous');
arrowNext.addEventListener('click', () => showMember(currentMember + 1));
arrowPrevious.addEventListener('click', () => showMember(currentMember - 1));
//скрипт ещё в разработке