// Menu

const btnMenu = document.querySelector(".fixed-menu-logo");

const menuDesktop = document.querySelector(".menu__desktop");
const menuItems = document.querySelector(".menu__desktop-list-item");
const menuLogo = document.querySelector(".fixed-menu-icon");

btnMenu.addEventListener("click", () => {
  if (!menuDesktop.classList.contains("an__menu-desktop-open")) {
    menuDesktop.classList.add("an__menu-desktop-open");
    menuDesktop.classList.remove("an__menu-desktop-close");
    btnMenu.style.transform = "rotate(360deg)";
    menuItems.classList.add("an__menu-fade-top");
    setTimeout(() => (menuLogo.name = "close-outline"), 100);
  } else {
    menuDesktop.classList.add("an__menu-desktop-close");
    menuDesktop.classList.remove("an__menu-desktop-open");
    btnMenu.style.transform = "rotate(0deg)";
    menuItems.classList.remove("an__menu-fade-top");
    setTimeout(() => (menuLogo.name = "menu-outline"), 100);
  }
});

// Drop down

const dropDownElement = document.querySelectorAll(".dropdown-element");

dropDownElement.forEach((dropdown) => {
  const dropDownTitle = dropdown.querySelector(".dropdown-element-title");
  const dropDownIcon = dropdown.querySelector(".dropdown-icon");
  const dropDownContent = dropdown.querySelector(".dropdown-content");
  let check = false;
  dropDownTitle.addEventListener("click", () => {
    if (check) {
      setTimeout(() => dropDownContent.classList.add("displayNone"), 500);
      dropDownContent.classList.add("dropdown-content-an-c");
      dropDownContent.classList.remove("dropdown-content-an-o");
      dropDownIcon.style.transform = "rotate(0)";
    } else {
      dropDownContent.classList.remove("displayNone");
      dropDownContent.classList.add("dropdown-content-an-o");
      dropDownContent.classList.remove("dropdown-content-an-c");
      dropDownIcon.style.transform = "rotate(180deg)";
    }
    check = !check;
  });
});
