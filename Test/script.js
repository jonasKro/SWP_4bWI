// Finde den Button und das aufklappbare div
const toggleButton = document.getElementById("toggleButton");
const myDiv = document.getElementById("myDiv");

// Füge einen Event Listener zum Button hinzu
toggleButton.addEventListener("click", function() {
    // Überprüfe, ob das div sichtbar ist
    if (myDiv.style.display === "none" || myDiv.style.display === "") {
        // Wenn es ausgeblendet ist, zeige es an
        myDiv.style.display = "block";
        toggleButton.textContent = "Zuklappen"; // Ändere den Button-Text
    } else {
        // Wenn es angezeigt wird, blende es aus
        myDiv.style.display = "none";
        toggleButton.textContent = "Aufklappen"; // Ändere den Button-Text
    }
});