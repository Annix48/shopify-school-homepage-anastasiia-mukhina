//popup

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

//Form submission

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    alert("Thank you!");

    form.reset(); 
  });
});


//Featured Products Slider

document.addEventListener("DOMContentLoaded", () => {
  
  const VARIANTS = {
    white: {
      price: 260,
      images: [
        "./assets/img/white1.jpg",
        "./assets/img/white2.jpg",
        "./assets/img/white3.jpg",
        "./assets/img/white4.jpg",
        "./assets/img/white5.jpg",
      ],
      sizes: ["UK 5.5", "UK 6 (EU 39)", "UK 6.5", "UK 7"],
    },
    black: {
      price: 270,
      images: [
        "./assets/img/black6.jpg",
        "./assets/img/black7.jpg",
        "./assets/img/black8.jpg",
        "./assets/img/black9.jpg",
        "./assets/img/black10.jpg",
      ],
      sizes: ["UK 5.5", "UK 6 (EU 39)", "UK 7"],
    },
    purple: {
      price: 280,
      images: [
        "./assets/img/color11.jpg",
        "./assets/img/color12.jpg",
        "./assets/img/color13.jpg",
        "./assets/img/color14.jpg",
        "./assets/img/color15.jpg",
      ],
      sizes: [
        "UK 5.5",
        "UK 6 (EU 39)",
        "UK 6 (EU 40)",
        "UK 6.5",
        "UK 7",
        "UK 7.5",
      ],
    },
  };

  
  const thumbsContainer = document.getElementById("thumbs");
  const mainImage = document.querySelector(".product__image");
  const priceEl = document.querySelector(".product__price");
  const colorButtons = document.querySelectorAll(".product__color");
  const sizeContainer = document.querySelector(".product__sizes");

  
  let currentColor = "purple";
  let currentSize = VARIANTS[currentColor].sizes[0];
  let currentImageIndex = 0;


  function renderThumbnails(images) {
    thumbsContainer.innerHTML = "";
    images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `View ${i + 1}`;
      img.className = "product__thumb";
      if (i === currentImageIndex) img.classList.add("is-active");
      img.addEventListener("click", () => {
        currentImageIndex = i;
        updateMainImage();
        document
          .querySelectorAll(".product__thumb")
          .forEach((el) => el.classList.remove("is-active"));
        img.classList.add("is-active");
      });
      thumbsContainer.appendChild(img);
    });
  }

  function updateMainImage() {
    mainImage.src = VARIANTS[currentColor].images[currentImageIndex];
    mainImage.alt = `${currentColor} product image`;
  }

  
  function updatePrice() {
    priceEl.textContent = `$${VARIANTS[currentColor].price.toFixed(2)}`;
  }

  
  function renderSizes(sizes) {
    const label = sizeContainer.querySelector(".product__label");
    sizeContainer.innerHTML = "";
    sizeContainer.appendChild(label);

    sizes.forEach((size) => {
      const btn = document.createElement("button");
      btn.className = "product__size";
      btn.textContent = size;
      if (size === currentSize) btn.classList.add("is-active");

      btn.addEventListener("click", () => {
        currentSize = size;
        document
          .querySelectorAll(".product__size")
          .forEach((el) => el.classList.remove("is-active"));
        btn.classList.add("is-active");
      });

      sizeContainer.appendChild(btn);
    });
  }

 
  colorButtons.forEach((btn, idx) => {
    const keys = Object.keys(VARIANTS);
    const colorKey = keys[idx];

    btn.addEventListener("click", () => {
      if (currentColor === colorKey) return;

      currentColor = colorKey;
      currentImageIndex = 0;
      currentSize = VARIANTS[currentColor].sizes[0];

      
      colorButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      
      renderThumbnails(VARIANTS[currentColor].images);
      updateMainImage();
      updatePrice();
      renderSizes(VARIANTS[currentColor].sizes);
    });
  });


  renderThumbnails(VARIANTS[currentColor].images);
  updateMainImage();
  updatePrice();
  renderSizes(VARIANTS[currentColor].sizes);
});


//======Mobile version accardeon=========

document.addEventListener("DOMContentLoaded", () => {
  const footerTitles = document.querySelectorAll(".footer__title");

  footerTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const list = title.nextElementSibling;

      title.classList.toggle("is-open");
      list.classList.toggle("is-open");
    });
  });
});
