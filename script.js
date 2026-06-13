const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "00";
const fechaSorteo =
    new Date("2026-07-15T20:00:00");

function actualizarContador(){

    const ahora = new Date();

    const diferencia =
        fechaSorteo - ahora;

    const dias =
        Math.floor(
            diferencia / (1000*60*60*24)
        );

    const horas =
        Math.floor(
            (diferencia/(1000*60*60)) % 24
        );

    const minutos =
        Math.floor(
            (diferencia/(1000*60)) % 60
        );

    const segundos =
        Math.floor(
            (diferencia/1000) % 60
        );

    document.getElementById("contador")
        .innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;

}

setInterval(actualizarContador,1000);

actualizarContador();

document.getElementById("numero").textContent = id;

fetch("data.json")
    .then(response => response.json())
    .then(data => {

        if (data[id]) {

    document.querySelector(".status").innerHTML =
        "🎉 PARTICIPANDO";

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

