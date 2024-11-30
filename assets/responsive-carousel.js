document.addEventListener("DOMContentLoaded", () => {
  const updateCarouselHeight = () => {
    const width = window.innerWidth;
    document.querySelectorAll(".carousel-item").forEach((item) => {
      if (width <= 768) {
        // Mobile
        item.style.height = item.dataset.mobileHeight || "300px";
      } else if (width <= 1024) {
        // Tablet
        item.style.height = item.dataset.tabletHeight || "400px";
      } else {
        // Desktop
        item.style.height = item.style.height =
          item.getAttribute("style")?.match(/height:\s*([^;]+)/)?.[1] ||
          "500px"; // Default desktop height if not explicitly set
      }
    });
  };

  // Run on load
  updateCarouselHeight();

  // Run on resize
  window.addEventListener("resize", updateCarouselHeight);
});
