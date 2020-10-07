menuButton = document.getElementById("menu-button")
navigation = document.getElementById("navigation")

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});