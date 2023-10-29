const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;
const lastModified = new Date(document.lastModified);

const formattedDate = lastModified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});

document.getElementById("lastModified").textContent = `Last modified: ${formattedDate}`;