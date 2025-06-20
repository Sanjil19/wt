document.addEventListener("DOMContentLoaded", () => {
  const profileLink = document.getElementById("profile-link");
  const modal = document.getElementById("auth-modal");
  const closeBtn = document.querySelector(".close-btn");

  // Show modal when "Profile" is clicked
  profileLink.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  // Close modal when "X" is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});