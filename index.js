button = document.getElementById("close-button")
button.addEventListener("click", () => {
    button.parentNode.parentNode.removeChild(button.parentNode);
});