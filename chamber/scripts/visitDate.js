// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Get the current date in milliseconds
    var currentDate = Date.now();

    // Retrieve the previous visit date from localStorage
    var previousVisitDate = localStorage.getItem("previousVisitDate");

    if (previousVisitDate) {
        // Calculate the difference in milliseconds
        var timeDifference = currentDate - previousVisitDate;

        // Convert milliseconds to days
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Display the appropriate message based on the time difference
        var message = "";

        if (daysDifference === 0) {
            message = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = "You last visited " + daysDifference + " days ago.";
        }

        // Display the message inside the container
        document.getElementById("messageContainer").textContent = message;
    } else {
        // First visit
        document.getElementById("messageContainer").textContent = "Welcome! Let us know if you have any questions.";
    }

    // Update the previous visit date in localStorage
    localStorage.setItem("previousVisitDate", currentDate);
} else {
    // Browser does not support localStorage
    document.getElementById("messageContainer").textContent = "Sorry, your browser does not support localStorage.";
}