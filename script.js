document.addEventListener("DOMContentLoaded", (e) => {
  const tabs = document.querySelectorAll(".tab-name");
  const tabContentContainers = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      tabContentContainers.forEach(function (container) {
        container.classList.remove("active");
      });

      const contentElement = document.querySelector(
        `[data-content="${this.dataset.tab}"]`
      );

      contentElement.classList.add("active");
    });
  });
});
