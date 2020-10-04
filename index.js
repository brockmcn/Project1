closeButton = document.getElementById("close-button")
menuButton = document.getElementById("menu-button")
navigation = document.getElementById("navigation")

closeButton.addEventListener("click", () => {
    closeButton.parentNode.parentNode.removeChild(closeButton.parentNode);
});

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});