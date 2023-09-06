// console.log("past_events probado probado...");

const contenedorTarjetas = document.getElementById("contenedorEventos");

let buscador = document.querySelector('input[name=busqueda]');

mostrarPastEvents(data.events, contenedorTarjetas);

mostrarAllCheckbox(data.events, contenedorFiltro)


//a diferencia de la funcion en home, en mostrarPastEvents() necesito obtener y guardar en una variable la fecha actual del array (let currentDate) para poder compararla en el bucle for que recorre todos los eventos
//al inicio del bucle creamos un objeto Date a partir de la fecha del evento (objeto.date) y lo almacenamos en una variable (let eventDate)
//realizamos la comparacion de las variables guardadas (eventDate y currentDate) de esta manera nos aseguramos que solo se creen las tarjetas de aquellos eventos cuya fecha sea anterior a la fecha actual (eventDate < currentDate)

function mostrarPastEvents(arrayData, ubicacion) {
    let tarjetas = "";
    let error = document.getElementById("error");
    let currentDate = new Date(data.currentDate);
    // console.log("=========" + currentDate + "===========");

    if (arrayData.length > 0) {
        for (objeto of arrayData) {
            let eventDate = new Date(objeto.date);
            if (eventDate < currentDate) {
                // console.log(eventDate);
                tarjetas += createCard(objeto);
            }
            ubicacion.innerHTML = tarjetas;
            error.innerHTML = "";
        }
    } else {
        console.log("Error: No se encontraron resultados");
        error.innerHTML = `<p><i><b>No se encontraron resultados...</b></i></p>`;
        // ubicacion.innerHTML = "";
    }
}


//=========================FILTRO CHECKBOX===============================vvv

let categoryForm = document.querySelector('#contenedorFiltro');
let dataFiltrada = [];

//let categoriasCheckeadas; //inicializacion

categoryForm.addEventListener('change', (e) => { //evento que "escucha" si se produjeron cambios en input
    categoriasCheckeadas = []; //asignacion de valores

    if (e.target.classList.contains('form-check-input')) { //condicion q verifica si el elemento en el q se produjo el evento (input) tiene la clase "form-check-input"

        filtrarYMostrar(data.events);
    }
})


//====================COMBINACION DE FILTRO Y BUSCADOR ===============================

buscador.addEventListener('input', () => {
    filtrarYMostrar(data.events);
})


function filtrarYMostrar(array) {
    //=========Buscador========
    let busqueda = buscador.value;
    let dataFiltrada = array.filter(evento => evento.name.toLowerCase().includes(busqueda.toLowerCase()));
    // console.log(dataFiltrada.name);

    //=========Filtro checkbox========
    let categoriasCheckeadas = [];

    const checkboxes = document.querySelectorAll('.form-check-input:checked'); //cada vez q un input cambia de estado a "checked" se almacena en la variable "checkboxes"
    // console.log(checkboxes);

    checkboxes.forEach(checkbox => {
        if (checkbox.checked && !categoriasCheckeadas.includes(checkbox.value)) {
            categoriasCheckeadas.push(checkbox.value)
        }
        // console.log(categoriasCheckeadas);
    });

    //verifico que el array de categoriasCheckeadas sea superor a 0 porque esto quiere decir que existe al menos un elemento dentro.
    //luego almaceno dentro de dataFiltrada cada evento que se encuentra dentro de la data.events y que haya sido checkeada (o sea marcada)
    if (categoriasCheckeadas.length > 0) {
        dataFiltrada = dataFiltrada.filter(evento => categoriasCheckeadas.includes(evento.category))
    }

    mostrarPastEvents(dataFiltrada, contenedorEventos)
}