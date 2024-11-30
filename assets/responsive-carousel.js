document.addEventListener("DOMContentLoaded", () => {
  const updateCarouselHeight = () => {
    document.querySelectorAll(".carousel-item").forEach((item) => {
      const width = window.innerWidth;
      if (width <= 768) {
        // Mobile
        item.style.height = item.dataset.mobileHeight;
      } else if (width <= 1024) {
        // Tablet
        item.style.height = item.dataset.tabletHeight;
      } else {
        // Desktop
        item.style.height = item.style.height;
      }
    });
  };

  // Update heights on load and resize
  updateCarouselHeight();
  window.addEventListener("resize", updateCarouselHeight);
});
