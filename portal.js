inputs = [
    document.getElementById("fname-input"),
    document.getElementById("lname-input"),
    document.getElementById("email-input"),
    document.getElementById("phone-input"),
    document.getElementById("conditions-input")
]
submitButton = document.getElementById("submit")
labels = document.getElementsByTagName("label")
form = document.getElementById("form-container")
submitText = document.getElementById("submit-text-container")
verification = document.getElementById("verification")
warning = document.getElementById("fill-warning")

var opacity = 0;

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

function show() {
    if (opacity < 1) {
        opacity = opacity + 0.1;
        submitText.style.opacity = opacity
    } else {
        clearInterval(0);
    }
}

function submit() {
    warning.style.visibility = "hidden"
    const email = inputs[2].value
    form.classList.toggle("vertTranslate")
    setTimeout(function () {
        form.style.visibility = 'hidden';
    }, 2000);
    setTimeout(function () {
        console.log(verification.innerHTML)
        verification.innerHTML += email + '"'
        setInterval(show, 25)
    }, 1500);
}

function canSubmit() {
    for (let input of inputs) {
        if (input.value === "") {
            warning.style.visibility = "visible"
            return false
        }
    }
    return true
}

submitButton.addEventListener("click", () => {
    if (canSubmit() === true) {
        submit()
    }
});