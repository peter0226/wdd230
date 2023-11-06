const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pass.value !== pass2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "#fff";
		pass2.style.color = "#000";
	}
}


/*document.getElementById("email").addEventListener("input", function() {
    const emailInput = this.value;
    const emailPattern = new RegExp("[a-zA-Z0-9._%+-]+@byui\\.edu$");
    if (!emailPattern.test(emailInput)) {
        this.setCustomValidity("Por favor, ingresa una dirección de correo electrónico válida del dominio byui.edu");
    } else {
        this.setCustomValidity("");
    }
});*/