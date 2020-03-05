import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});

const logo = document.querySelectorAll('.logo-svg__item path');
for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}


// nav-burger
const navSide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list li');


  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animation Link
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle('toggle');
  });

}

navSide();