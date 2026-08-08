const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open");
  });
}

const englishYouTubeUrl = "https://www.youtube.com/@zahnklar-dentistrymadesimple";
document.querySelectorAll("[data-youtube-en]").forEach((link) => {
  link.href = englishYouTubeUrl;
});
