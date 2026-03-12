document.addEventListener("DOMContentLoaded", function () {
  const welcomeBtn = document.getElementById("welcomeBtn");

  if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function () {
      alert("Willkommen bei NightStalkerZ!");
    });
  }
});