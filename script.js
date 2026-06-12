const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "00";

document.getElementById("numero").textContent = id;

fetch("data.json")
    .then(response => response.json())
    .then(data => {

        if (data[id]) {

    document.querySelector(".status").innerHTML =
        "✅ REGISTRADO";

    document.getElementById("nombre").textContent =
        data[id].nombre;

    const tel = data[id].telefono;

    document.getElementById("telefono").textContent =
        tel.substring(0,2) + "******" + tel.substring(tel.length-2);

    document.getElementById("fecha").textContent =
        data[id].fecha;

} else {

    document.getElementById("info").style.display = "none";

    document.getElementById("pendiente").style.display = "block";

}

    })
    .catch(error => {
        console.error(error);
    });
