// console.log("upcoming_events, la probadera");

const contenedorTarjetas = document.getElementById("contenedorEventos");

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



// function createCard(objeto) {
//     return `<div class="card col-11 col-sm-4 col-md-3 col-xl-2">
//                 <img src="${objeto.image}" class="card-img-top" alt="${objeto.name}">
//                 <div class="card-body">
//                     <h5 class="card-title">${objeto.name}</h5>
//                     <p class="card-text">${objeto.description}</p>
//                 </div>
//                 <div class="card-footer">
//                     <a href="#">$${objeto.price} USD</a>
//                     <a href="./details.html" class="btn btn-primary">Ver detalles</a>
//                 </div>
//             </div>`;
// }



//<p class="card-text">${objeto.date}</p>