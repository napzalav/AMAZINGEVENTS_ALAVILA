// console.log("home probando probando...")

const contenedorTarjetas = document.getElementById("contenedorEventos")


mostrarAllEvents(data.events, contenedorEventos)



//a la funcion mostrarAllEvents() le pasamos dos parametros
//1-arrayData: es de donde vamos a extraer la informacion
//2- ubicacion: es a donde vamos a colocar las tarjetas una vez finalice el for of
//dentro de la funcion declaramos una variable (tarjetas) que se encuentra vacia, lista para almacenar las tarjetas procesadas con el for of, este bucle toma un objeto dentro de arrayData y lo convierte en una tarjeta, usando la funcion createCard()

function mostrarAllEvents(arrayData, ubicacion){
    let tarjetas = ""
    for(objeto of arrayData){
        tarjetas += createCard(objeto)
    }
    ubicacion.innerHTML = tarjetas
}



//la funcion createCard() necesita como paramentro un objeto y retorna una estructura HTML la cual contiene algunas caracteristicas del objeto, tales como "objeto.image", "objeto.name", "objeto.description", "objeto.price"

// function createCard(objeto){
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
//             </div>`
// }






//******este codigo fue rediseñado y adaptado en las funciones createCard() y mostrarAllEvents() */

// let contenedorEventos = document.getElementById('contenedorEventos');

// for(let event of data.events){
//     let card = `<div class="card col-11 col-sm-4 col-md-3 col-xl-2">
//     <img src="${event.image}" class="card-img-top" alt="${event.name}">
//     <div class="card-body">
//         <h5 class="card-title">${event.name}</h5>
//         <p class="card-text">${event.description}</p>
//     </div>
//     <div class="card-footer">
//         <a href="#">$${event.price} USD</a>
//         <a href="./details.html" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>`;
// contenedorEventos.innerHTML += card;
// }