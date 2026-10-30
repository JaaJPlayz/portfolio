document.getElementById("year").textContent = new Date().getFullYear();

// Smooth in-page navigation with a small, accessible reveal.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll('.topbar nav a');
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}
