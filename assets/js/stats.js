console.log("tablasssssssssss");
//=========primera tabla=======

// let mayorAsistencia = [];
// let menorAsistencia = [];
// let mayorCapacidad = [];
let currentDate = "";
let columna1 = [];
let columna3 = [];
console.log(columna3);
console.log(columna1);

// const tabla = document.querySelector('#primera');

// mostrarData();
// let eventos = [];

function mostrarData() {
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data => {
        currentDate = data.currentDate;
        eventos = data.events;
        console.log(eventos);
        generarTablas();
    })
}


//=========segunda tabla=======
// let primerasCategoriasUpcoming = [];
// let gananciasUpcoming = [];
// let porcentajeAsistenciaUpcoming = [];

let datosT2 = [];

function generarTablas(){
    console.log(eventos);
    eventos.sort((a,b) => calcularPorcentaje(b) - calcularPorcentaje (a))
    for (let i = 0; i<eventos.length; i++){
        // if (!categorias.includes(eventos[i].category)){
        //     categorias.push(eventos[i].category);
        // }
        columna1.push(eventos[i].name)
    }
    eventos.sort((a,b) => b.capacity - a.capacity)
    for (let i = 0; i<eventos.length; i++){
        columna3.push(eventos[i].name)
    }
    for (let i = 0; i<3; i++){
        completarTabla("body1", columna1[i], columna1[columna1.length - (1+i)], columna3[i])
    }
    let categorias = [];
    for (let i = 0; i<eventos.length; i++){
        if(!categorias.includes(eventos[i].category)){
            categorias.push(eventos[i].category)
        }
    }
    console.log(categorias);
    categorias.forEach(categoria =>{
        completarTabla("body2", categoria, calcularIngresos(categoria, false), calcularPorcentajePorCategoria(categoria, false))
        completarTabla("body3", categoria, calcularIngresos(categoria, true), calcularPorcentajePorCategoria(categoria, true))
    })
}

function completarTabla(tabla, columna1, columna2, columna3){
    let body = document.getElementById(tabla);
    let data = document.createElement("tr");
    data.innerHTML = `<td>${columna1}</td>
    <td>${columna2}</td>
    <td>${columna3}</td>`
    body.appendChild(data);
}

function calcularPorcentaje(evento){
    if(evento.assistance == undefined) return (evento.estimate * 100) / evento.capacity;
    else return (evento.assistance * 100) / evento.capacity;
}

function calcularIngresos(categoria, booleano){
    let ingresos = 0;
    for (let i = 0; i<eventos.length; i++){
        let condicion = (booleano)?eventos[i].date < currentDate:eventos[i].date >= currentDate;
        if(eventos[i].category == categoria && condicion){
            console.log(eventos[i].price);
            console.log(ingresos);
            if(eventos[i].assistance == undefined) ingresos += eventos[i].price * eventos[i].estimate;
            else ingresos += eventos[i].price * eventos[i].assistance;
        }
    }
    return (ingresos != 0) ? ingresos : "No hay eventos";;
}

function calcularPorcentajePorCategoria(categoria, booleano){
    let asistencia = 0;
    let capacidad = 0;
    for (let i = 0; i<eventos.length; i++){
        let condicion = (booleano)?eventos[i].date<currentDate:eventos[i].date>=currentDate
        if(eventos[i].category == categoria && condicion){
            capacidad += eventos[i].capacity;
            if(eventos[i].assistance == undefined) asistencia += eventos[i].estimate;
            else asistencia += eventos[i].assistance;
        }
    }
    return (capacidad != 0) ? (asistencia * 100 / capacidad).toFixed(2).concat("%"): "No hay eventos";
}



mostrarData();

