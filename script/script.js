const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
});

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
