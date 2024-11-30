document.addEventListener("DOMContentLoaded", () => {
  const updateCarouselHeight = () => {
    const width = window.innerWidth;
    document.querySelectorAll(".carousel-item").forEach((item) => {
      // Clear any previously set height
      item.style.height = "";

      if (width <= 768) {
        // Mobile
        item.style.height = item.dataset.mobileHeight || "300px";
      } else if (width <= 1024) {
        // Tablet
        item.style.height = item.dataset.tabletHeight || "400px";
      } else {
        // Desktop
        item.style.height = item.dataset.desktopHeight || "500px";
      }
    });
  };

  // Run on load
  updateCarouselHeight();

  // Run on resize
  window.addEventListener("resize", updateCarouselHeight);
});
