function getProjectBySlug(slug) {
  return PORTFOLIO.projects.find((p) => p.slug === slug);
}

function renderLocalVideo(project) {
  const poster = project.thumbnail || project.screenshots?.[0]?.src || "";
  const posterAttr = poster ? ` poster="${poster}"` : "";

  return `
    <div class="video-wrapper video-wrapper-native">
      <video controls preload="metadata"${posterAttr} playsinline>
        <source src="${project.video}" type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <p class="video-hint">Place your demo video at <code>${project.video}</code></p>
    </div>`;
}

function renderScreenshotGallery(screenshots) {
  if (!screenshots?.length) return "";

  const items = screenshots
    .map(
      (s) => `
      <figure class="screenshot-item">
        <img src="${s.src}" alt="${s.caption}" loading="lazy" />
        <figcaption>${s.caption}</figcaption>
      </figure>`
    )
    .join("");

  return `
    <section class="project-section">
      <h2>Screenshots</h2>
      <div class="screenshot-gallery">${items}</div>
    </section>`;
}

function renderProjectCard(project) {
  const thumb = project.thumbnail || project.screenshots?.[0]?.src;
  const tags = project.tags.map((t) => `<span class="tag">${t}</span>`).join("");

  return `
    <a href="project.html?slug=${project.slug}" class="card project-card project-card-link">
      ${
        thumb
          ? `<div class="project-thumb"><img src="${thumb}" alt="${project.title} preview" loading="lazy" /></div>`
          : ""
      }
      <div class="project-card-body">
        <h3>${project.title}</h3>
        <div class="project-tags">${tags}</div>
        <p class="project-desc">${project.summary}</p>
        <span class="project-card-cta">View project →</span>
      </div>
    </a>`;
}

function initPortfolioChrome() {
  document.getElementById("nav-name").textContent = PORTFOLIO.name.split(" ")[0];
  document.getElementById("footer-name").textContent = PORTFOLIO.name;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-github").href = PORTFOLIO.github;
  document.getElementById("footer-linkedin").href = PORTFOLIO.linkedin;
}

function initProjectVideos() {
  document.querySelectorAll(".video-wrapper-native video").forEach((video) => {
    const hideHint = () => {
      video.parentElement.querySelector(".video-hint")?.remove();
    };
    video.addEventListener("loadeddata", hideHint);
    video.addEventListener("canplay", hideHint);
  });
}
