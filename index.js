"use strict";
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const header = document.querySelector(".header");

const slider = document.querySelectorAll(".slider ");
const personalElement = document.querySelectorAll(".personal__list--elm");
const sliderBtn = document.getElementById("slider__btn--next");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const sectionServices = document.getElementById("section--1");
const slides = document.querySelectorAll(".slide");
const btnOne = document.querySelector(".slider__btn--1");
const btnTwo = document.querySelector(".slider__btn--2");

const bars = document.querySelector(".bars");

const sectionPersonalList = document.querySelector(".section__personal--list");

// nav function
document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

//   functia pentru btn programeaza-te
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// menu

bars.addEventListener("click", function () {
  navLinks.classList.toggle("hidden");
});

// nav bar
const navMenu = function () {
  if (window.innerWidth < 900) {
    navLinks.classList.add("hidden");
  }
};
navMenu();

// slider
let currentSlide = 0;
const maxSlide = slider.length;

const goToSlide = function (se, px) {
  slider.forEach((s, i) => {
    s.style.transform = `translateX(${px * (i - se)}%)`;
  });
};
const btnTwoActive = function () {
  btnTwo.classList.add("slider__active");
  btnOne.classList.remove("slider__active");
};
const btnOneActive = function () {
  btnTwo.classList.remove("slider__active");
  btnOne.classList.add("slider__active");
};
const inToView = function (e) {
  e.classList.remove("hidden");
};
//next slide
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
    btnOneActive();
  } else {
    currentSlide++;
    btnTwoActive();
  }

  goToSlide(currentSlide, 130);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
    btnOneActive();
  }

  goToSlide(currentSlide, 130);
};

const init = function () {
  goToSlide(0, 130);
};
init();

sliderBtn.addEventListener("click", nextSlide);
btnTwo.addEventListener("click", nextSlide);
btnOne.addEventListener("click", prevSlide);

//menu fade animation
const handleHover = function (e, op) {
  // console.log(this);
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// carousel
let l = 0;
const right_mover = () => {
  l++;
  for (const i of personalElement) {
    if (l == 0) {
      i.style.left = "0rem";
    }
    if (l == 1) {
      i.style.left = "-15.5rem";
    }
    if (l == 2) {
      i.style.left = "-37rem";
    }
    if (l > 3) {
      l = 3;
    }
  }
};
const left_mover = () => {
  l--;
  for (const i of personalElement) {
    if (l == 0) {
      i.style.left = "0rem";
    }
    if (l == 1) {
      i.style.left = "-14.5rem";
    }
    if (l == 2) {
      i.style.left = "-21rem";
    }
    if (l < 0) {
      l = 0;
    }
  }
};

btnRight.addEventListener("click", right_mover);
btnLeft.addEventListener("click", left_mover);
