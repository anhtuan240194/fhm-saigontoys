const inputs = document.querySelectorAll("input");
Array.from(inputs).forEach((input) => {
  const placeHolderCurrent = input.getAttribute("placeholder");
  input.addEventListener("focus", function () {
    this.setAttribute("placeholder", "");
    const clearInput = this.parentElement.querySelector(".clear-input");

    if (clearInput) {
      // show x when focus
      clearInput.classList.remove("d-none");
      this.addEventListener("input", function () {
        if (this.value == "") {
          clearInput.querySelector(".clear-input svg path").style.fill =
            "#c8c8c8";
        } else {
          clearInput.querySelector(".clear-input svg path").style.fill = "#000";
        }
      });

      // click x clear input
      clearInput.addEventListener("click", () => {
        clearInput.previousElementSibling.value = "";
        clearInput.querySelector("svg path").style.fill = "#c8c8c8";
        input.focus();
      });
    }
    this.addEventListener("focusout", function (e) {
      this.setAttribute("placeholder", placeHolderCurrent);
      if (this.value == "") {
        this.style.outline = "none";
      }
    });

    // click outside input
    window.addEventListener("click", (e) => {
      if (
        e.target.parentElement == input.parentElement ||
        e.target.parentElement.parentElement == input.parentElement ||
        e.target.parentElement.parentElement.parentElement ==
          input.parentElement
      ) {
        return false;
      } else {
        if (clearInput) {
          clearInput.classList.add("d-none");
        }
      }
    });
  });
});

// password show/hide
const passwordInputs = document.querySelectorAll(".password-input");
Array.from(passwordInputs).forEach((passwordInput) => {
  // show x when focus
  passwordInput.classList.remove("d-none");
  passwordInput.addEventListener("click", function () {
    const input = this.parentElement.querySelector("input");
    console.log(input.type);
    if (input.type == "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});

//quantity
const plusbtn = document.querySelectorAll(".plus");
plusbtn.forEach((plus) => {
  plus.addEventListener("click", () => {
    const quantity = plus.parentElement.querySelector(".qty");
    quantity.value = parseInt(quantity.value) + 1;
  });
});
const minusbtn = document.querySelectorAll(".minus");
minusbtn.forEach((minus) => {
  minus.addEventListener("click", () => {
    const quantity = minus.parentElement.querySelector(".qty");
    if (parseInt(quantity.value) > 0) {
      quantity.value = parseInt(quantity.value) - 1;
    }
  });
});

// recently slider
const recentlySlider = new Swiper(".recently-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 1200,
  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 32,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 32,
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".recently-slider-next",
    prevEl: ".recently-slider-prev",
  },
});
