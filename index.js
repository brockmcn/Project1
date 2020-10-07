closeButton = document.getElementById("close-button")

closeButton.addEventListener("click", () => {
    closeButton.parentNode.parentNode.removeChild(closeButton.parentNode);
});