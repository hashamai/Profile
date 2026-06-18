(function () {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      toggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("open")
      );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    const isProjectsPage =
      href === "projects.html" &&
      (currentPage === "projects.html" || currentPage === "project.html");
    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      isProjectsPage
    ) {
      link.classList.add("active");
    }
  });
})();
