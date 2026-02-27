const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function setActiveLink() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const index = Math.round(scrollPosition / windowHeight);

  navLinks.forEach((link) => link.classList.remove("active"));

  if (navLinks[index]) {
    navLinks[index].classList.add("active");
  }
}

window.addEventListener("scroll", setActiveLink);

setActiveLink();
