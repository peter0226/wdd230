const switchInput = document.querySelector(".switch input");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const cards = document.querySelectorAll(".card"); // Obteniendo todas las secciones con la clase .card
const content = document.querySelector(".content"); 
const body = document.querySelector("body"); 
const benefitsp = document.querySelectorAll('.card.benefits p');
const benefitsli = document.querySelectorAll('.card.benefits li');
const legends = document.querySelectorAll('form legend');
const labels = document.querySelectorAll('form label.top');
const labels2 = document.querySelectorAll('form label.sbs');
const inputs = document.querySelectorAll('form label.top input');
const description = document.querySelector("#description");
const strongs = document.querySelectorAll('.card.benefits strong');

var darkMode = localStorage.getItem("darkMode");

if (darkMode === null) {
    darkMode = "false";
    localStorage.setItem("darkMode", darkMode);
}

if (darkMode === "true") {
    switchInput.checked = true;
    cambiarOscuro();
}

switchInput.addEventListener("change", () => {
    if (switchInput.checked) {
        // Cambia al modo oscuro
        localStorage.setItem("darkMode", true);
        cambiarOscuro();
        

    } else {
        // Cambia al modo claro
        if(pagina=="index"){
            cambiarToClaroIndex();
        }else if(pagina=="rentals"){
            cambiarToClaroRentals();
        }else if(pagina=="reservations" || pagina=="contact"){
            cambiarToClaroForms();

            if(pagina=="contact"){
                cambiarToClaroContact();
            }else{
                cambiarToClaroReservations();
            }
        }

        localStorage.setItem("darkMode", false);
        main.style.background = "white";
        main.style.color = "#000";
        footer.style.background = "#333";
        footer.style.color = "#fff";
        content.style.background = "white";
        body.style.background = "#f2f2f2";

        cards.forEach(card => {
            card.style.background = "#f9f9f9";
            card.style.color = "black";
            
            const links = card.querySelectorAll("a");
            links.forEach(link => {
                link.style.color = "#0017f0";
            });
        });

        if (benefitsp.length > 0) {
            benefitsp.forEach(function(p) {
                p.style.color = "#555";
            });
        }

        if (benefitsli.length > 0) {
            benefitsli.forEach(function(li) {
                li.style.color = "#777";
            });
        }

        if (legends.length > 0) {
            legends.forEach(function(legend) {
                legend.style.color = "var(--blue)";
            });
        }  

        if (labels.length > 0) {
            labels.forEach(function(label) {
                label.style.color = "var(--label)";
            });
        } 

        if (labels2.length > 0) {
            labels2.forEach(function(label) {
                label.style.color = "var(--gray)";
            });
        } 

        if (inputs.length > 0) {
            inputs.forEach(function(input) {
                input.style.color = "var(--gray)";
            });
        } 

        if (description) {
            description.style.color = "var(--gray)";
        }
        
        if (strongs.length > 0) {
            strongs.forEach(function(strong) {
                strong.style.color = "#000";
            });
        }
    }
});

function cambiarOscuro(){

    if(pagina=="index"){
        cambiarToOscuroIndex();
    }else if(pagina=="rentals"){
        cambiarToOscuroRentals();
    }else if(pagina=="reservations" || pagina=="contact"){
        cambiarToOscuroForms();

        if(pagina=="contact"){
            cambiarToOscuroContact();
        }else{
            cambiarToOscuroReservations();
        }
    }

    

    main.style.background = "#343a40";
        if (typeof omitir === 'undefined'){
            main.style.color = "#fff";
        }
        footer.style.background = "#000";
        footer.style.color = "#fff";
        content.style.background = "#343a40";
        body.style.background = "#343a40";

        cards.forEach(card => {
            card.style.background = "#424a4f";
            card.style.color = "#fff";
            const links = card.querySelectorAll("a");
            links.forEach(link => {
                link.style.color = "#82c3f5";
            });
        });

        if (benefitsp.length > 0) {
            benefitsp.forEach(function(p) {
                p.style.color = "#fff";
            });
        }

        if (benefitsli.length > 0) {
            benefitsli.forEach(function(li) {
                li.style.color = "#fff";
            });
        }  

        if (legends.length > 0) {
            legends.forEach(function(legend) {
                legend.style.color = "#83c9ff";
            });
        }  

        if (labels.length > 0) {
            labels.forEach(function(label) {
                label.style.color = "#83c9ff";
            });
        } 

        if (labels2.length > 0) {
            labels2.forEach(function(label) {
                label.style.color = "#fff";
            });
        } 

        if (inputs.length > 0) {
            inputs.forEach(function(input) {
                input.style.color = "#fff";
            });
        } 

        if (description) {
            description.style.color = "#fff";
        }  

        if (strongs.length > 0) {
            strongs.forEach(function(strong) {
                strong.style.color = "#ffe0a7";
            });
        } 
}

function cambiarToOscuroIndex(){
    document.documentElement.style.setProperty('--zebra', '#786b6b');
    var content = document.querySelector(".island_images");
    content.style.background="#343a40";
    content.style.color="white";
}

function cambiarToClaroIndex(){
    document.documentElement.style.setProperty('--zebra', '#e0e0e0');
    var content = document.querySelector(".island_images");
    content.style.background="white";
    content.style.color="black";
}

function cambiarToOscuroRentals(){
    const gridSections = document.querySelectorAll('.grid section');
    gridSections.forEach(function(gridSection) {
        gridSection.style.background = "#7e7575";
    });
}

function cambiarToClaroRentals(){
    var gridSections = document.querySelectorAll('.grid section');
    gridSections.forEach(function(gridSection) {
        gridSection.style.background = "#eee";
    });
}

function cambiarToOscuroForms(){
    var title = document.querySelector(".form_contact h2");
    title.style.color="white";

    var content = document.querySelector(".form_wrap");
    content.style.background="rgb(75 83 90)";
    content.style.color="white";
    var inputs = document.querySelectorAll('.form_contact input');
    inputs.forEach(function(input) {
        input.style.color = "white";
        input.style.backgroundColor = "#848f99";
    });
    var textAreas = document.querySelectorAll('.form_contact textarea');
    textAreas.forEach(function(textArea) {
        textArea.style.color = "white";
        textArea.style.backgroundColor = "#848f99";
    });
    
}

function cambiarToClaroForms(){
    
    var title = document.querySelector(".form_contact h2");
    title.style.color="black";

    var content = document.querySelector(".form_wrap");
    content.style.background="white";
    content.style.color="black";
    var inputs = document.querySelectorAll('.form_contact input');
    inputs.forEach(function(input) {
        input.style.color = "#5A5A5A";
        input.style.backgroundColor = "white";
    });
    var textAreas = document.querySelectorAll('.form_contact textarea');
    textAreas.forEach(function(textArea) {
        textArea.style.color = "#5A5A5A";
        textArea.style.backgroundColor = "white";
    });
}

function cambiarToOscuroContact(){
    var titles = document.querySelectorAll('.maps h2');
    titles.forEach(function(title) {
        title.style.color = "white";
    });
}

function cambiarToClaroContact(){
    var titles = document.querySelectorAll('.maps h2');
    titles.forEach(function(title) {
        title.style.color = "black";
    });
}

function cambiarToOscuroReservations(){
    var content = document.querySelector(".agreement_checkbox label");
    content.style.color="white";

    var content = document.querySelector(".agreement_checkbox a");
    content.style.color="#83c9ff";
    
}

function cambiarToClaroReservations(){
    var content = document.querySelector(".agreement_checkbox label");
    content.style.color="#333";

    var content = document.querySelector(".agreement_checkbox a");
    content.style.color="#0078d4";
}


