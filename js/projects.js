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

function renderNoMedia() {
  return `
    <div class="no-media">
      <span class="no-media-icon" aria-hidden="true">▶</span>
      <p>No demo video or screenshots available for this project yet.</p>
    </div>`;
}

function renderMediaSection(project) {
  const hasVideo = !!project.video;
  const hasScreenshots = !!project.screenshots?.length;

  if (!hasVideo && !hasScreenshots) {
    return `
      <section class="project-section">
        <h2>Demo & Media</h2>
        ${renderNoMedia()}
      </section>`;
  }

  if (!hasVideo) return ""; // screenshots are rendered in their own section

  return `
    <section class="project-section" data-media-section>
      <h2>Demo Video</h2>
      ${renderLocalVideo(project)}
    </section>`;
}

function renderDocumentsSection(project) {
  const docs = project.documents;

  const items = docs?.length
    ? `<div class="doc-list">${docs
        .map(
          (d) => `
          <a class="doc-item" href="${d.file}" target="_blank" rel="noopener" download>
            <span class="doc-icon" aria-hidden="true">📄</span>
            <span class="doc-info">
              <strong>${d.title}</strong>
              ${d.description ? `<span>${d.description}</span>` : ""}
            </span>
            <span class="doc-download" aria-hidden="true">↓</span>
          </a>`
        )
        .join("")}</div>`
    : `<p class="empty-note">No documents uploaded yet. Add files to <code>assets/docs/</code> and list them in the <code>documents</code> array in <code>js/data.js</code>.</p>`;

  return `
    <section class="project-section">
      <h2>Documentation</h2>
      ${items}
    </section>`;
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

function initProjectVideos(project) {
  document.querySelectorAll(".video-wrapper-native video").forEach((video) => {
    const hideHint = () => {
      video.parentElement.querySelector(".video-hint")?.remove();
    };
    video.addEventListener("loadeddata", hideHint);
    video.addEventListener("canplay", hideHint);

    // Video file missing or unplayable → fall back gracefully.
    const onError = () => {
      const section = video.closest("[data-media-section]");
      if (!section) return;
      if (project?.screenshots?.length) {
        section.remove(); // screenshots still shown in their own section
      } else {
        section.innerHTML = `<h2>Demo & Media</h2>${renderNoMedia()}`;
      }
    };
    video.addEventListener("error", onError);
    video.querySelector("source")?.addEventListener("error", onError);
  });
}
