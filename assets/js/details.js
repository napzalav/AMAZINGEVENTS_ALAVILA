const containerCard = document.getElementById('containerCard');
let quearySearch = location.search;
const id = new URLSearchParams(quearySearch).get("id");
let data = {}; // Objeto de datos vacío inicialmente

// Agrega una función para cargar los datos desde la API
async function detailData() {
    try {
        const respuesta = await fetch(apiURL); // Asegúrate de que apiURL esté definido en tu entorno
        data = await respuesta.json();

        // Una vez que los datos se han cargado, busca el evento por ID
        const eventito = data.events.find((evento) => evento._id == id);
        console.log(eventito);

        let concurrencia = '';
        if (eventito.estimate) {
            concurrencia = `<p><b>Estimate: </b>${eventito.estimate}</p>`;
        } else {
            concurrencia = `<p><b>Assistance: </b>${eventito.assistance}</p>`;
        }

        // Resto del código para mostrar los detalles del evento
        document.getElementById("containerCard").innerHTML = `<div class="card">
                    <div class="card-img">
                        <img src="${eventito.image}" class="card-img-top" alt="{eventito.name}">
                    </div>
                    <div class="info-details">
                        <div class="card-body">
                            <h2><b><i>${eventito.name}</i></b></h2>
                            <i>
                            <p><b>Category: </b>${eventito.category}</p>
                            <p><b>Place: </b>${eventito.place}</p>
                            <p><b>Capacity: </b>${eventito.capacity}</p>
                            ${concurrencia}
                            <p>${eventito.description}</p>
                            </i>
                        </div>
                        <div class="card-footer">
                            <p><b><i>Price: </i></b>$${eventito.price} USD</p>
                            <p><b><i>Date: </i></b>${eventito.date}</p>
                        </div>
                    </div>
                </div>`;
    } catch (error) {
        console.error(error);
    }
}

detailData(); // Llama a la función para cargar los datos y mostrar los detalles del evento
