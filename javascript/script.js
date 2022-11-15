const aboutMeImg = document.querySelector(".img__pic-of-me");
console.log("hey");

aboutMeImg.addEventListener(
  "mouseover",
  () => (aboutMeImg.src = "../img/flexing me.webp")
);
aboutMeImg.addEventListener(
  "mouseleave",
  () => (aboutMeImg.src = "../img/muscular me.webp")
);
