const popup = document.getElementById("popup");
const closeButtons = document.querySelectorAll("[data-popup-close]");
const form = popup.querySelector(".popup__form");
const isClosed = localStorage.getItem("popupClosed");

if (!isClosed) {
  setTimeout(() => {
    popup.classList.add("active");
  }, 1000);
}

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.remove("active");
    localStorage.setItem("popupClosed", "true");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for subscribing!");
  popup.classList.remove("active");
  localStorage.setItem("popupClosed", "true");
});
