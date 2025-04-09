// Kiçik bir animasiya nümunəsi: səhifə yükləndikdə bəzi elementlərin üzə çıxması
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const projectCards = document.querySelectorAll(".project-card");
  
    // Sadə fade-in animasiyası (Intersection Observer və ya scroll event istifadə oluna bilər)
    const fadeInOnLoad = (elements) => {
      elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(15px)";
        setTimeout(() => {
          el.style.transition = "all 0.6s ease";
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }, 200 * index);
      });
    };
  
    fadeInOnLoad([...timelineItems, ...projectCards]);
  });
  