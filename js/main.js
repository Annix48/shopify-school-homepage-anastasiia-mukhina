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


//FAQ
document.addEventListener("DOMContentLoaded", () => {
  const spollers = document.querySelectorAll("[data-spollers]");

  spollers.forEach((spollerContainer) => {
    const items = spollerContainer.querySelectorAll("[data-spoller]");

    items.forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isOpen = btn.classList.contains("active");

        if (spollerContainer.hasAttribute("data-one-spoller")) {
          
          items.forEach((otherBtn) => {
            otherBtn.classList.remove("active");
            otherBtn.nextElementSibling.style.maxHeight = null;
          });
        }

        if (!isOpen) {
          btn.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          btn.classList.remove("active");
          content.style.maxHeight = null;
        }
      });
    });
  });
});
