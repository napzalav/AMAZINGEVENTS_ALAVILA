//DOM Selector
const containerCard = document.getElementById('containerCard');

let quearySearch = location.search;

const id = new URLSearchParams(quearySearch).get("id");

let eventito = data.events.find((evento) => evento._id == id);
console.log(eventito);

//==========DETAILS==============
// const containerCard = document.getElementById('containerCard');

function detailCard() {
    // console.log(objeto);
    document.getElementById("containerCard").innerHTML =
    // `<div class="card col-11 col-sm-4 col-md-3 col-xl-2">
    //             <div class="card-img">
    //                 <img src="${eventito.image}" class="card-img-top" alt="...">
    //             </div>
    //             <div class="card-body">
    //                 <h2>${eventito.name}</h2>
    //                 <p>${eventito.category}</p>
    //                 <p>${eventito.description}</p>
    //             </div>
    //             <div class="card-footer">
    //                 <p>$${eventito.price} USD</p>
    //                 <p>${eventito.date}</p>
    //             </div>
    //         </div>`
`<div class="card col-11 col-xl-2">
<div class="card-img">
    <img src="${eventito.image}" class="card-img-top" alt="{eventito.name}">
</div>
<div class="info">
    <div class="card-body">
        <h2>${eventito.name}</h2>
        <p>${eventito.category}</p>
        <p>${eventito.description}</p>
    </div>
    <div class="card-footer">
        <p>$${eventito.price} USD</p>
        <p>${eventito.date}</p>
    </div>
</div>
</div>`

}

detailCard()
console.log(detailCard);

