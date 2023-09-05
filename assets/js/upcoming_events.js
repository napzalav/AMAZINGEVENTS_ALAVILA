// console.log("upcoming_events, la probadera");

const contenedorTarjetas = document.getElementById("contenedorEventos");

let buscador = document.querySelector('input[name=busqueda]');

mostrarUpcomingEvents(data.events, contenedorTarjetas);

mostrarAllCheckbox(data.events, contenedorFiltro)


//a diferencia de la funcion en home, en mostrarUpcomingEvents() necesito obtener y guardar en una variable la fecha actual del array (let currentDate) para poder compararla en el bucle for que recorre todos los eventos
//al inicio del bucle creamos un objeto Date a partir de la fecha del evento (objeto.date) y lo almacenamos en una variable (let eventDate)
//realizamos la comparacion de las variables guardadas (eventDate y currentDate) de esta manera nos aseguramos que solo se creen las tarjetas de aquellos eventos cuya fecha sea anterior a la fecha actual (eventDate < currentDate)

function mostrarUpcomingEvents(arrayData, ubicacion){
    let tarjetas = "";
    let currentDate = new Date(data.currentDate);
    // console.log("=========" + data.currentDate + "===========");

    for (objeto of arrayData) {
        let eventDate = new Date(objeto.date);
        if (eventDate > currentDate) {
            // console.log(eventDate);
            // console.log("//////" + objeto.date + "////////");
            tarjetas += createCard(objeto);
        }
    }
    ubicacion.innerHTML = tarjetas;
}


//=========================FILTRO CHECKBOX===============================vvv

let categoryForm = document.querySelector('#contenedorFiltro');

let dataFiltrada = [];

let categoriasCheckeadas; //inicializacion

categoryForm.addEventListener('change', (e) => { //evento que "escucha" si se produjeron cambios en input

    categoriasCheckeadas = []; //asignacion de valores

    if (e.target.classList.contains('form-check-input')) { //condicion q verifica si el elemento en el q se produjo el evento (input) tiene la clase "form-check-input"

        const checkboxes = document.querySelectorAll('.form-check-input:checked'); //cada vez q un input cambia de estado a "checked" se almacena en la variable "checkboxes"
        console.log(checkboxes);

        checkboxes.forEach(checkbox => {
            if (checkbox.checked && !categoriasCheckeadas.includes(checkbox.value)) {
                categoriasCheckeadas.push(checkbox.value)
            }
        });
    }
    // console.log(categoriasCheckeadas);
    createCard(categoriasCheckeadas);

    //verifico que el array de categoriasCheckeadas sea superor a 0 porque esto quiere decir que existe al menos un elemento dentro.
    //luego almaceno dentro de dataFiltrada cada evento que se encuentra dentro de la data.events y que haya sido checkeada (o sea marcada)

    if (categoriasCheckeadas.length > 0) {
        console.log(categoriasCheckeadas);
        dataFiltrada = data.events.filter(evento => categoriasCheckeadas.includes(evento.category))

        mostrarUpcomingEvents(dataFiltrada, contenedorEventos);
    }
})


//========================= BUSCADOR ===============================

buscador.addEventListener('input', ()=>{
    let busqueda = buscador.value;
    let dataFiltrada = data.events.filter(evento => evento.name.toLowerCase().includes(busqueda.toLowerCase()));
    console.log(dataFiltrada.name);
    mostrarUpcomingEvents(dataFiltrada, contenedorEventos);
})