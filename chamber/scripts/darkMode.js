const switchInput = document.querySelector(".switch input");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const cards = document.querySelectorAll(".card"); // Obtén todas las secciones con la clase .card
const content = document.querySelector(".content"); 
const body = document.querySelector("body"); 

switchInput.addEventListener("change", () => {
    if (switchInput.checked) {
        // Cambia al modo oscuro
        main.style.background = "#343a40";
        main.style.color = "#fff";
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
    }
});
