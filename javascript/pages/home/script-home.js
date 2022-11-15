const btnKnowMoreContent = document.querySelector(".knowmore__icon");
const knowMoreContent = document.querySelector(".knowmore__content");

let btnKnowMoreRotCheck = false;
btnKnowMoreContent.addEventListener("click", (e) => {
  const btn = e.target;
  if (btnKnowMoreRotCheck) {
    btn.style.transform = "rotate(360deg)";
    setTimeout(() => {
      btn.style.transition = "all 0s";
      btn.style.transform = "rotate(0deg)";
      knowMoreContent.classList.add("displayNone");
      setTimeout(() => {
        btn.style.transition = "all 0.3s";
      }, 50);
    }, 300);
  } else {
    btn.style.transform = "rotate(180deg)";
    setTimeout(() => {
      knowMoreContent.classList.remove("displayNone");
    }, 300);
  }
  btnKnowMoreRotCheck = !btnKnowMoreRotCheck;
});

const spotifyBox = document.querySelectorAll(".spotify-box");

spotifyBox.forEach((e) => {
  e.parentElement.classList.add("content-loading");
  e.addEventListener("load", () => {
    e.parentElement.classList.remove("content-loading");
  });
});
