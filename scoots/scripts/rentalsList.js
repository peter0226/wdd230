const rentalSelect = document.getElementById("rentalType");


const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const jsonData = JSON.parse(xhr.responseText);
                var rentals='';
                // Crear elementos HTML para cada rental
                jsonData.rentals.forEach(rental => {
                    rentals += `
                        <option value="${rental.id}">${rental.type}</option>
                    `;

                    // Agregar el miembro al contenedor
                    
                });

                rentalSelect.innerHTML = rentals;
            }
        };

        // Ruta al archivo JSON
        const jsonFile = "data/rentals.json";

        // Abrir y enviar la solicitud
        xhr.open("GET", jsonFile, true);
        xhr.send();


function verificarCambio(val){
    if(val==0){
        document.querySelector("#period").value = "0.5";
    }
}

function changeImage(id){
    //obtener imagen de json jsonFile = "data/rentals.json";
    //document.querySelector("#period").src="";

    const jsonFile = "data/rentals.json";

    
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const rental = data.rentals.find(rental => rental.id === id);

            if (rental) {
                
                const periodImage = document.querySelector("#productSelect");
                periodImage.src = rental.image;

                if (!rental.image) {
                    periodImage.src = "";
                }
            } else {
                console.error("No entry found in the JSON for the given ID.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}