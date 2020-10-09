inputs = [
    document.getElementById("fname-input"),
    document.getElementById("lname-input"),
    document.getElementById("email-input"),
    document.getElementById("phone-input"),
    document.getElementById("conditions-input")
]

submitButton = document.getElementById("submit")
labels = document.getElementsByTagName("label")

for (let input of inputs) {
    input.addEventListener("focusout", () => {
        if (input.value !== "") {
            input.parentNode.childNodes[3].style.visibility = "hidden";
        }
        if (input.value === "") {
            input.parentNode.childNodes[3].style.visibility = "visible";
        }
    });
}

submitButton.addEventListener("click", () => {
    for (let input of inputs) {
        input.value = "";
    }
});