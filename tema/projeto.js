document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleTheme");
    const content = document.querySelector(".content");

    toggleButton.addEventListener("click", function () {
        content.classList.toggle("dark-theme");
    });
});