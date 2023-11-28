const switchInput = document.querySelector(".switch input");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const cards = document.querySelectorAll(".card"); // Obtén todas las secciones con la clase .card
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

switchInput.addEventListener("change", () => {
    if (switchInput.checked) {
        // Cambia al modo oscuro
        main.style.background = "#343a40";
        if (typeof omitir === 'undefined'){
            main.style.color = "#fff";
        }
        footer.style.background = "#000";
        footer.style.color = "#fff";
        content.style.background = "#343a40";
        body.style.background = "#343a40";

        // Cambia el color de fondo de las secciones .card al color en modo oscuro
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
                p.style.color = "#fff"; // Cambiar a blanco
            });
        }

        if (benefitsli.length > 0) {
            benefitsli.forEach(function(li) {
                li.style.color = "#fff"; // Cambiar a blanco
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
        

    } else {
        // Cambia al modo claro
        main.style.background = "#f9f9f9";
        main.style.color = "#000";
        footer.style.background = "#333";
        footer.style.color = "#fff";
        content.style.background = "#f9f9f9";
        body.style.background = "#f2f2f2";

        // Restaura el color de fondo de las secciones .card al modo claro
        cards.forEach(card => {
            card.style.background = "#f9f9f9"; // Puedes usar el color original si lo deseas
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
