console.log(document.location);
console.log(document.location.search);

//DOM Selector
// const containerCard = document.getElementById('containerCard');


//Filtrando eventos - desestructuramos los eventos desde la data
const { events } = data;
// console.log(events);
const eventoDetallado = events.filter( evento => evento.category)
console.log(eventoDetallado);


//Creando nuestro objeto de eventos con la data obtenida
const nuevoDetalle = eventoDetallado.map(evento => {
    let eventoDt = {};
    eventoDt.id = evento._id;
    eventoDt.name = evento.name;
    eventoDt.image = evento.image;
    eventoDt.date = evento.date;
    eventoDt.description = evento.description;
    eventoDt.category = evento.category;
    eventoDt.price = evento.price;

    return eventoDt;
})

//URLSearchParams
//Creacion de card
detailCard(data.events);