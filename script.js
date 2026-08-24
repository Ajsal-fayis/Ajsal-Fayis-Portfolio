const container = document.getElementById('projects-list');
projects.forEach(project => {
  const tags = project.highlights.map(item => `<span>${item}</span>`).join('');
  container.innerHTML += `
    <article class="project">
      <div class="project-no">${project.number}</div>
      <div>
        <div class="project-type">${project.type}</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${tags}</div>
      </div>
      <a class="project-link" href="${project.github}" target="_blank" rel="noopener">VIEW ON GITHUB ↗</a>
    </article>`;
});
document.getElementById('year').textContent = new Date().getFullYear();
