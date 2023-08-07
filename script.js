"use strict";

const asideEl = document.querySelector("aside");
const barsEl = document.querySelector(".fa-bars");
const headPEl = document.querySelector(".aside-head-title p");
const headEl = document.querySelector(".aside-head-title");
const ulEl = document.querySelector(".aside-rest ul");
const topP = document.querySelector(".top-blue p");

barsEl.addEventListener("click", (e) => {
  if (barsEl.classList.contains("yes")) {
    barsEl.classList.remove("yes");
    headPEl.style.display = "block";
    topP.style.display = "block";
    headEl.style.justifyContent = "flex-start";
    ulEl.style.visibility = "visible";
    asideEl.style.width = "260px";
  } else {
    barsEl.classList.add("yes");
    headPEl.style.display = "none";
    topP.style.display = "none";
    headEl.style.justifyContent = "center";
    ulEl.style.visibility = "hidden";
    asideEl.style.width = "60px";
  }
});
