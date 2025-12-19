function toggleProject(header) {
  const projectCard = header.closest(".project-card");
  const isExpanded = projectCard.classList.contains("expanded");

  if (isExpanded) {
    projectCard.classList.remove("expanded");
  } else {
    projectCard.classList.add("expanded");
  }
}

function toggleExperience(header) {
  const experienceCard = header.closest(".experience-card");
  const isExpanded = experienceCard.classList.contains("expanded");

  if (isExpanded) {
    experienceCard.classList.remove("expanded");
  } else {
    experienceCard.classList.add("expanded");
  }
}

function showSection(index) {
  // Hide all sections
  const sections = document.querySelectorAll(".carousel-section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show selected section
  const targetSection = document.querySelector(
    `.carousel-section[data-section="${index}"]`
  );
  if (targetSection) {
    targetSection.classList.add("active");
  }

  // Update navigation buttons
  const navButtons = document.querySelectorAll(".carousel-nav-btn");
  navButtons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function toggleSection(header) {
  const section = header.closest(".section");
  const isExpanded = section.classList.contains("expanded");

  if (isExpanded) {
    section.classList.remove("expanded");
  } else {
    section.classList.add("expanded");
  }
}
