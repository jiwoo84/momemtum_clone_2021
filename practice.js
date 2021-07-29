const title = document.querySelector("div h1");

function titleMouseEnter() {
  title.innerText = "Mouse is comming!";
}

function titleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("mouseenter", titleMouseEnter);
title.addEventListener("mouseleave", titleMouseLeave);
