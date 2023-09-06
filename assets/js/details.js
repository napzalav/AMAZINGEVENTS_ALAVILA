//DOM Selector
const containerCard = document.getElementById('containerCard');
let quearySearch = location.search;
const id = new URLSearchParams(quearySearch).get("id");
let eventito = data.events.find((evento) => evento._id == id);
console.log(eventito);

function detailCard() {
    // console.log(objeto);
    document.getElementById("containerCard").innerHTML =
`<div class="card">
<div class="card-img">
    <img src="${eventito.image}" class="card-img-top" alt="{eventito.name}">
</div>
<div class="info">
    <div class="card-body">
        <h2>${eventito.name}</h2>
        <p>${eventito.category}</p>
        <p>${eventito.description}</p>
        <p>Capacity: ${eventito.capacity}</p>
        <p>Place: ${eventito.place}</p>
    </div>
    <div class="card-footer">
        <p>Price: $${eventito.price} USD</p>
        <p>Date: ${eventito.date}</p>
    </div>
</div>
</div>`

}

detailCard()
console.log(detailCard);

