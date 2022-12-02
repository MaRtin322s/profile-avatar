import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    const image = document.querySelector('.image img');
    image.addEventListener('click', () => {
        image.style.transform = "scale(2)";
    });

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        alert("💣");
    });
});
