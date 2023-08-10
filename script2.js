const input = document.querySelector(".name-input");
const submitBtn = document.querySelector(".submit");

function getLocalStorage() {
  if (JSON.parse(localStorage.getItem("username")))
    return JSON.parse(localStorage.getItem("username"));
  else {
    return [];
  }
}
let clickedIndex = getLocalStorage()[getLocalStorage().length - 1];
let loadedLocal = getLocalStorage();

loadedLocal.length = loadedLocal.length - 1;

let usernames = loadedLocal;

input.value = usernames[clickedIndex];

submitBtn.addEventListener("click", () => {
  usernames[clickedIndex] = input.value;
  loadToLocalStorage(usernames);
});

const loadToLocalStorage = (user) => {
  localStorage.setItem("username", JSON.stringify(user));
};
