// Guardar datos en localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Cargar datos desde localStorage
function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

document.addEventListener("input", function (event) {
    if (event.target.tagName === "INPUT") {
        const value = event.target.value.toLowerCase();
        if (value === "rojo") {
            event.target.style.backgroundColor = "red";
        } else if (value === "verde") {
            event.target.style.backgroundColor = "green";
        } else if (value === "azul") {
            event.target.style.backgroundColor = "blue";
        } else {
            event.target.style.backgroundColor = "white";
        }
    }
});
