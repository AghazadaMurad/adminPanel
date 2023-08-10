"use strict";

const asideEl = document.querySelector("aside");
const barsEl = document.querySelector(".fa-bars");
const headPEl = document.querySelector(".aside-head-title p");
const headEl = document.querySelector(".aside-head-title");
const ulEl = document.querySelector(".aside-rest ul");
const topP = document.querySelector(".top-blue p");

const editBtns = document.querySelectorAll(".edit");
const lists = document.querySelector(".lists");

const bg = document.querySelector(".bg");
const modal = document.querySelector(".modal");
const addBtn = document.querySelector(".addNew");

const addNewBtn = document.querySelector(".addNewBtn");
const addNewInput = document.querySelector(".addNewInput");

function getLocalStorage() {
  if (JSON.parse(localStorage.getItem("username")))
    return JSON.parse(localStorage.getItem("username"));
  else {
    return [];
  }
}

// let users = ["Murad Aghazada", "Qaqas Azizov", "Elnur Hesenov"];
let users = [];
users = getLocalStorage();

barsEl.addEventListener("click", (e) => {
  if (!barsEl.classList.contains("yes")) {
    barsEl.classList.add("yes");
    headPEl.style.display = "block";
    topP.style.display = "block";
    headEl.style.justifyContent = "flex-start";
    ulEl.style.visibility = "visible";
    asideEl.style.width = "260px";
  } else {
    barsEl.classList.remove("yes");
    headPEl.style.display = "none";
    topP.style.display = "none";
    headEl.style.justifyContent = "center";
    ulEl.style.visibility = "hidden";
    asideEl.style.width = "60px";
  }
});

const displayUsers = () => {
  lists.innerHTML = "";
  users.forEach((user, index) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdEdit = document.createElement("td");
    const a = document.createElement("a");
    const aBin = document.createElement("a");

    tdName.innerText = user;
    tdName.className = "names";
    a.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    aBin.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    a.className = "edit";
    aBin.className = "edit";
    a.href = "/index2.html";

    tdEdit.append(a, aBin);
    tr.append(tdName, tdEdit);
    lists.append(tr);

    a.addEventListener("click", (e) => {
      users.push(index);
      loadToLocalStorage(users);
    });

    aBin.addEventListener("click", (e) => {
      deleteUser(index);
    });
  });
};

const deleteUser = (index) => {
  users.splice(index, 1);
  displayUsers();
  loadToLocalStorage(users);
};

displayUsers();
const loadToLocalStorage = (users) => {
  localStorage.setItem("username", JSON.stringify(users));
};

const openModal = () => {
  bg.classList.remove("hidden");
  modal.classList.remove("hidden");
};
const closeModal = () => {
  bg.classList.add("hidden");
  modal.classList.add("hidden");
};

addBtn.addEventListener("click", () => {
  openModal();
  addNewInput.focus();
});
bg.addEventListener("click", closeModal);

addNewBtn.addEventListener("click", () => {
  if (!addNewInput.value) return;
  users.push(addNewInput.value);
  loadToLocalStorage(users);
  addNewInput.value = "";
  closeModal();
  displayUsers();
});

console.log(bg, modal);
