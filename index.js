const burgerMenu = document.getElementById("burger-menu");
const sidebar = document.querySelector(".sidebar");
const body = document.body;

burgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
});

sidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  body.classList.remove("no-scroll");
});
