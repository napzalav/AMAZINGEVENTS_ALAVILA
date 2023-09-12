const contenedorTarjetas = document.getElementById("contenedorEventos");
let buscador = document.querySelector('input[name=busqueda]');
// let data = {};
// let eventosFuturos = [];

async function getUpcomingEventsData() {
    try {
        const respuesta = await fetch(apiURL);
        data = await respuesta.json();
        eventosFuturos = data.events.filter(evento => new Date(evento.date) > new Date(data.currentDate));
        mostrarUpcomingEvents(eventosFuturos, contenedorTarjetas);
        mostrarAllCheckbox(eventosFuturos, contenedorFiltro);
        console.log(data);
        console.log(eventosFuturos);
    } catch (error) {
        console.log(error);
    }
}

getUpcomingEventsData();

// hacerLista(eventosFuturos);


function mostrarUpcomingEvents(arrayData, ubicacion) {
    let tarjetas = "";
    let errorTarjeta = document.getElementById("error");
    // let currentDate = new Date(data.currentDate);
    // console.log("=========" + data.currentDate + "===========");

    if (arrayData.length > 0) {
        errorTarjeta.innerHTML = "";
        for (objeto of arrayData) {
            // let eventDate = new Date(objeto.date);
            tarjetas += createCard(objeto);
            // if (eventDate > currentDate) {
            //     // console.log(eventDate);
            // }
            ubicacion.innerHTML = tarjetas;
        }
    } else {
        console.log("Error: No se encontraron resultados");
        tarjetas = "";
        errorTarjeta.innerHTML = `<p><i><b>No se encontraron resultados...</b></i></p>`;
    }
}



//=========================FILTRO CHECKBOX===============================vvv

let categoryForm = document.querySelector('#contenedorFiltro');
//let dataFiltrada = [];

//let categoriasCheckeadas; //inicializacion

categoryForm.addEventListener('change', (e) => { //evento que "escucha" si se produjeron cambios en input
    //categoriasCheckeadas = []; //asignacion de valores

    if (e.target.classList.contains('form-check-input')) { //condicion q verifica si el elemento en el q se produjo el evento (input) tiene la clase "form-check-input"

        filtrarYMostrar(eventosFuturos);
    }
})

//====================COMBINACION DE FILTRO Y BUSCADOR ===============================

buscador.addEventListener('input', () => {
    filtrarYMostrar(eventosFuturos);
});

function filtrarYMostrar(array) {
    //=========Buscador========
    let busqueda = buscador.value;
    let dataFiltrada = array.filter(evento => evento.name.toLowerCase().includes(busqueda.toLowerCase()));

    //=========Filtro checkbox========
    const checkboxes = document.querySelectorAll('.form-check-input:checked');
    let categoriasCheckeadas = Array.from(checkboxes).map(checkbox => checkbox.value);

    if (categoriasCheckeadas.length > 0) {
        dataFiltrada = dataFiltrada.filter(evento => categoriasCheckeadas.includes(evento.category))
    }
    console.log(dataFiltrada);
    mostrarUpcomingEvents(dataFiltrada, contenedorEventos);
}