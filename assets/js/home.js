// console.log("home probando probando...")

const contenedorTarjetas = document.getElementById("contenedorEventos")

let buscador = document.querySelector('input[name=busqueda]');

mostrarAllEvents(data.events, contenedorEventos)

mostrarAllCheckbox(data.events, contenedorFiltro)

// mostrarEventoFiltrado(categoriaSeleccionada, contenedorFiltro)
//a la funcion mostrarAllEvents() le pasamos dos parametros
//1-arrayData: es de donde vamos a extraer la informacion
//2- ubicacion: es a donde vamos a colocar las tarjetas una vez finalice el for of
//dentro de la funcion declaramos una variable (tarjetas) que se encuentra vacia, lista para almacenar las tarjetas procesadas con el for of, este bucle toma un objeto dentro de arrayData y lo convierte en una tarjeta, usando la funcion createCard()

function mostrarAllEvents(arrayData, ubicacion) {
    let tarjetas = ""
    for (objeto of arrayData) {
        tarjetas += createCard(objeto)
    }
    ubicacion.innerHTML = tarjetas
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

        mostrarEventoFiltrado(dataFiltrada, contenedorEventos);
    }
})


//========================= BUSCADOR ===============================

buscador.addEventListener('input', ()=>{
    let busqueda = buscador.value;
    let dataFiltrada = data.events.filter(evento => evento.name.toLowerCase().includes(busqueda.toLowerCase()));
    console.log(dataFiltrada.name);
    mostrarEventoFiltrado(dataFiltrada, contenedorEventos);
})