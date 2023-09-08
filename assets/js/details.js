//DOM Selector
const containerCard = document.getElementById('containerCard');
let quearySearch = location.search;
const id = new URLSearchParams(quearySearch).get("id");
let eventito = data.events.find((evento) => evento._id == id);
console.log(eventito);

let concurrencia = '';
if (eventito.estimate){
    concurrencia = `<p><b>Estimate: </b>${eventito.estimate}</p>`;
} else {
    concurrencia = `<p><b>Assistance: </b>${eventito.assistance}</p>`;
}

function detailCard() {
    // console.log(objeto);
    document.getElementById("containerCard").innerHTML =
`<div class="card">
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
</div>`

}

detailCard()
console.log(detailCard);

