const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const memberContainer = document.getElementById("listMembers");

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

                // Crear elementos HTML para cada miembro
                jsonData.members.forEach(member => {
                    const memberDiv = document.createElement("section");

                    memberDiv.innerHTML = `
                        <img src="${member.image}" alt="${member.name} logo" />
                        <h3>${member.name}</h3>
                        <p>${member.address}</p>
                        <p>${member.phoneNumber}</p>
                        <a href="${member.website}" target="_blank">${member.website}</a>
                    `;

                    // Agregar el miembro al contenedor
                    memberContainer.appendChild(memberDiv);
                });
            }
        };

        // Ruta al archivo JSON
        const jsonFile = "data/members.json";

        // Abrir y enviar la solicitud
        xhr.open("GET", jsonFile, true);
        xhr.send();
