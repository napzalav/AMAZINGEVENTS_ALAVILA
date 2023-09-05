const data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};
// console.log(data.events);


//FUNCIONES
//la funcion createCard() necesita como paramentro un objeto y retorna una estructura HTML la cual contiene algunas caracteristicas del objeto, tales como "objeto.image", "objeto.name", "objeto.description", "objeto.price"
function createCard(objeto) {
  return `<div class="card col-11 col-sm-4 col-md-3 col-xl-2">
              <img src="${objeto.image}" class="card-img-top" alt="${objeto.name}">
              <div class="card-body">
                  <h5 class="card-title">${objeto.name}</h5>
                  <p class="card-text">${objeto.description}</p>
                  <p class="card-text">${objeto.category}</p>

              </div>
              <div class="card-footer">
                  <a href="#">$${objeto.price} USD</a>
                  <a href="./details.html" class="btn btn-primary">Ver detalles</a>
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








//filtrar eventos por categoría
//uso querySelectorAll para capturar todos los elementos con la clase .form-check-input
//El método forEach se utiliza para ejecutar una función proporcionada, una vez por cada elemento en una lista o arreglo
//eventoFiltrado: filtro la lista de eventos según la categoría seleccionada
//mostrarEventoFiltrado(): Llamo a la función para mostrar los eventos filtrados

// const checkboxes = document.querySelectorAll('.form-check-input');
// console.log(checkboxes);

// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('input', () => {
//     const categoriaSeleccionada = checkbox.value;

//     const eventoFiltrado = data.events.filter(event => event.category === categoriaSeleccionada);

//     console.log(mostrarEventoFiltrado);
//     mostrarEventoFiltrado(eventoFiltrado, contenedorEventos);

//   });
// });

//========================================================vvv

// let categoriaSeleccionada = [];
let categoryForm = document.querySelector('#contenedorFiltro');

let dataFiltrada = [];

let categoriasCheckeadas; //inicializacion

// categoryForm.addEventListener('change', (e) => {
//   checkboxes
// })

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
  console.log(categoriasCheckeadas);
  createCard(categoriasCheckeadas);

  //comparo el valor almacenado en categoriasCheckeadas con el de del valor de data.event.category y si coincide imprimo la tarjeta
  // if (categoriasCheckeadas == data.events.category){
  //   console.log(events.category);
  // }
  //const inputCheckeado = checkboxes.filter(checkbox => inputSeleccionado === checkbox.checked);

  // checkboxes.forEach(checkbox => {
  //   if(checkbox.value === events.category){
  //     createCard(events);
  //   }
  // })

  //1-nombre del checkbox:
  //2tomar las categorias checheadas y mapearlas y por cada categoria filtrar la data de la base de datos (event)
  //3- comparar el evento con mi dato y guardarlo en la variable
  //4- pushear la data encontrada dentro de la variable


  //console.log(inputCheckeado);

  if (categoriasCheckeadas.length > 0) {
    console.log(categoriasCheckeadas);
    dataFiltrada = data.events.filter(evento => categoriasCheckeadas.includes(evento.category))

    mostrarEventoFiltrado(dataFiltrada, contenedorEventos);
  }


})



//convierto toda la coleccion de checkboxes en un array y lo mapeo para obtener un array de categorias y almacenarlo en categoriaSeleccionada
// let categoriaSeleccionada = Array.from(checkboxes)
// .map(checkbox => 
//   checkbox.dataset.category); 
// console.log(checkbox))
// console.log(categoriaSeleccionada);

// const filtrarEventoPorCategoria = data.events.filter(event => categoriaSeleccionada.includes(event.category)); //filtro todos los eventos desde el array "data"




//comparo valores
// if(checkboxes.length === 0){
//   // mostrarAllEvents(arrayData, ubicacion);
//   mostrarEventoFiltrado(filtrarEventoPorCategoria, contenedorEventos);
// }else {
//   let categoriaSeleccionada = data.events.filter(event => categoriaSeleccionada.includes(event.category));
// };
// mostrarEventoFiltrado(categoriaSeleccionada, contenedorEventos)










// function updateFilteredEvents(events, ubicacion) {
//   const checkboxes = document.querySelectorAll('input[name="category"]');
//   const selectedCategories = Array.from(checkboxes)
//     .filter((checkbox) => checkbox.checked)
//     .map((checkbox) => checkbox.value);
//   if (selectedCategories.length === 0) {
//     mostrarEventoFiltrado(events, idContenedor);
//   } else {
//     const arrayFiltrado = events.filter((e) =>
//       selectedCategories.includes(e.category)
//     );
//     mostrarEventoFiltrado(arrayFiltrado, ubicacion);
//   }
// }









//=======================================================^^^^
// funcion para mostrar eventos filtrados tiene la estructura igual a mostrarAllEvents()
function mostrarEventoFiltrado(arrayFiltrado, ubicacion) {
  let tarjetas = "";
  for (objeto of arrayFiltrado) {
    tarjetas += createCard(objeto);
  }
  ubicacion.innerHTML = tarjetas;
}
//=========================================================


// function filtrarEventoPorCategoria(events, categories) {
//   if (categories.length > 0) {
//     return events;
//   }
//   return events.filter(event => categories.includes(event.category));
// }


// checkboxes.forEach(input => {
//   input.addEventListener('change', () => {
//     let arrayCheckeados = Array.from(checkboxes);
//     arrayCheckeados = arrayCheckeados.filter(check => check.checked).map(input => input.value == "true");
//     if (arrayCheckeados.length > 0) {
//       let filtrarEventoPorCategoria = events.filter(event => arrayCheckeados.includes(events.category));
//       mostrarEventoFiltrado(filtrarEventoPorCategoria, contenedorFiltro)
//     }
//   })
// })

