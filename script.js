document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const popupMenu = document.getElementById("popup-menu");
  const closePopup = document.getElementById("close-popup");
  const searchToggle = document.getElementById("search-toggle");
  const searchContainer = document.getElementById("search-container");

  hamburger.addEventListener("click", () => {
    popupMenu.style.display = "block";
  });

  closePopup.addEventListener("click", () => {
    popupMenu.style.display = "none";
  });

  searchToggle.addEventListener("click", () => {
    searchContainer.classList.toggle("hidden");
  });
});

// Add fade-out class before navigating
function transitionToPage(newPageUrl) {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = newPageUrl;
  }, 500); // Match the transition duration
}

// Usage example:
document.querySelector("#search-button").addEventListener("click", () => {
  transitionToPage("search.html");
});
// Add fade-in class when the page loads
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("fade-out");
  document.body.classList.add("fade-in");
});
