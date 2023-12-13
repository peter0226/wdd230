const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const rentalContainer = document.getElementById("listRentals");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
    gridbutton.classList.add('selected');
    listbutton.classList.remove('selected');
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
    listbutton.classList.add('selected');
    gridbutton.classList.remove('selected');
}

const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const jsonData = JSON.parse(xhr.responseText);

                // Crear elementos HTML para cada rental
                jsonData.rentals.forEach(rental => {
                    const rentalDiv = document.createElement("section");

                    rentalDiv.innerHTML = `
                        <img src="${rental.image}" alt="${rental.type} photo" />
                        <h3>${rental.type}</h3>
                        <p><span>Max Persons: ${rental.maxPersons}</span></p>
                        <div>
                            <h3>Reservation</h3>
                            <p><span>Half Day (3 hrs):</span> ${rental.reservation[0].halfDay}</p>
                            <p><span>Full Day:</span> ${rental.reservation[0].fullDay}</p>
                        </div>
                        <div>
                            <h3>Walk-In</h3>
                            <p><span>Half Day (3 hrs):</span> ${rental.walkIn[0].halfDay}</p>
                            <p><span>Full Day:</span> ${rental.walkIn[0].fullDay}</p>
                        </div>
                    `;

                    // Agregar el miembro al contenedor
                    rentalContainer.appendChild(rentalDiv);
                });
            }
        };

        // Ruta al archivo JSON
        const jsonFile = "data/rentals.json";

        // Abrir y enviar la solicitud
        xhr.open("GET", jsonFile, true);
        xhr.send();
