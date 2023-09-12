let apiURL = 'https://mindhub-xj03.onrender.com/api/amazing';
// let data = {};
let eventos = [];
console.log(eventos);;

async function getEventsData() {
    try {
        const respuesta = await fetch(apiURL);
        const data = await respuesta.json();
        eventos = data.events;
        //hacerLista(eventos);
        console.log(data);
        console.log(eventos);
        //mostrarAllCheckbox(eventos, contenedorFiltro)

    } catch (error) {
        console.log('Error', error);
    }
}

getEventsData();


// function hacerLista(eventos) {
//     let html = "";
//     eventos.forEach(evento => {
//         html += createCard(evento);
//     });
//     document.querySelector('#contenedorEventos').innerHTML = html;
// }






//FUNCIONES
//la funcion createCard() necesita como paramentro un objeto y retorna una estructura HTML la cual contiene algunas caracteristicas del objeto, tales como "objeto.image", "objeto.name", "objeto.description", "objeto.price"
function createCard(objeto) {
    return `<div class="card col-11 col-sm-4 col-md-3 col-xl-2">
                <img src="${objeto.image}" class="card-img-top" alt="${objeto.name}">
                <div class="card-body">
                    <h5 class="card-title">${objeto.name}</h5>
                    <p class="card-text">${objeto.description}</p>
                </div>
                <div class="card-footer">
                    <a href="#">$${objeto.price} USD</a>
                    <a href="./details.html?id=${objeto._id}" class="btn btn-primary">Details</a>
                </div>
            </div>`
}


function createCheckbox(item) {
    return `<div class="form-check">
                <input class="form-check-input" type="checkbox" value="${item.category}" id="${item.category}" >
                <label class="form-check-label" for="${item.category}">
                    ${item.category}
                </label>
            </div>`
}


//funcion para crear todos los checkbox existentes en data sin repetir
function mostrarAllCheckbox(arrayData, ubicacion) {
    const sinRepetirCategory = arrayData.reduce((categorias, objeto) => {
        if (!categorias.includes(objeto.category)) {
            categorias.push(objeto.category);
        }
        return categorias;
    }, []);

    const checkboxes = sinRepetirCategory.map(category => {
        return createCheckbox({ category: category });
    });

    ubicacion.innerHTML = checkboxes.join('');
}


//=======adaptando repaso=========
//let eventos = [];
//en respuesta fetcheamos la url de la API original
//en data no devuelve un objeto con una propiedad "events" que es un array de objetos (todos los eventos)
//cada objeto tiene sus propiedades

// async function getEventos() {
//     try {
//         let respuesta = await fetch(apiURL);
//         let data = await respuesta.json();
//         console.log(data);
//         //con for of obtengo la informacion de cada evento dentro de data
//         for (const evento of data.events) {
//             let eventData = await getEvento(evento);
//             eventos.push(eventData);
//         }
//         console.log(eventos);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getEventos();

//creo una funcion getEvento() a la cual le paso como parametro
// async function getEvento(name) {
//     try {
//         let respuesta = await fetch(name);
//         let eventData = await respuesta.json();
//         return eventData;

//     } catch (error) {
//         console.log(error);
//     }
// }

//=============fin adaptacion========================