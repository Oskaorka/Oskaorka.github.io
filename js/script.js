"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const closeElem = document.querySelector(".menu__close");
  const inputtCharacters = document.querySelector(".input-number__input");
  const numTop = document.querySelector(".plus-dollar");
  const numBottm = document.querySelector(".minus-dollar");
  const activeModalbtn = document.querySelectorAll(".btn");
  const activeModalRange = document.querySelectorAll(".range-active_max");
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector(".close");
  const getCommingSoon = document.querySelectorAll(".get-comming-soon");

  let num = 1;

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
  });
  closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  numTop.addEventListener("click", () => {
    inputtCharacters.value = "$" + num++;
  });

  numBottm.addEventListener("click", () => {
    inputtCharacters.value = "$" + num--;
  });

  function modalView(activeElem) {
    [].forEach.call(activeElem, (item) => {
      item.addEventListener("click", () => {
        modal.classList.add("show");
      });
    });
  }
  modalView(activeModalbtn);
  modalView(activeModalRange);
  modalView(getCommingSoon);
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.classList.add("hide");
  });
});
