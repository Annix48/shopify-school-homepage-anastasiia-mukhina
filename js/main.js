const popup = document.getElementById("popup");
const openBtn = document.querySelector("[data-modal-open]");
const closeButtons = document.querySelectorAll("[data-popup-close]");
const form = popup.querySelector(".popup__form");

openBtn.addEventListener("click", () => {
  popup.classList.add("active");
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for subscribing!");
  popup.classList.remove("active");
});


