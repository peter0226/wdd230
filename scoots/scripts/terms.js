const terms = document.querySelector('#terms');
const agreementCheckbox = document.querySelector('#agreementCheckbox');

function abrirCondiciones(){
    terms.style.display = "block";
}

function aceptarCondiciones(){
    terms.style.display = "none";
    agreementCheckbox.checked = true;
}

function cerrarCondiciones(){
    terms.style.display = "none";
}