const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const githubLogo = document.getElementById("github");
const gitHubCarouselLogo = document.getElementById("gitHubCarouselImg");

const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️";
    githubLogo.src = "images/logos/github-light.svg";
    gitHubCarouselLogo.src = "images/logos/github-light.svg";
  } else {
    btn.textContent = "🌙";
    githubLogo.src = "images/logos/github-dark.svg";
    gitHubCarouselLogo.src = "images/logos/github-dark.svg";
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
