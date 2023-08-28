console.log("home probando probando...")

let contenedorEventos = document.getElementById('contenedorEventos');

for(let event of data.events){
    let card = `<div class="card col-11 col-sm-4 col-md-3 col-xl-2">
    <img src="${event.image}" class="card-img-top" alt="${event.name}">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
    </div>
    <div class="card-footer">
        <a href="#">$${event.price} USD</a>
        <a href="./details.html" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`;
contenedorEventos.innerHTML += card;
}