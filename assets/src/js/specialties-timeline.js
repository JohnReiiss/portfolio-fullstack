document.addEventListener("DOMContentLoaded", () => {
  const specialtiesSection = document.querySelector("section.especialidades");

  if (specialtiesSection) {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          specialtiesSection.classList.add("section-visible");
        } else {
          specialtiesSection.classList.remove("section-visible");
        }
      });
    }, observerOptions);

    observer.observe(specialtiesSection);
  }
});
