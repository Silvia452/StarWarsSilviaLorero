//VEHICULOS

let dom = {}
var term = sessionStorage.getItem("term");
window.onload = () => {

    dom["nombre"] = document.getElementById("nombre")
    dom["pelicula"] = document.getElementById("pelicula")
    dom["personaje"] = document.getElementById("personaje")
    dom["modelo"] = document.getElementById("modelo")
    dom["fab"] = document.getElementById("fab")
    dom["coste"] = document.getElementById("coste")
    dom["len"] = document.getElementById("len")
    dom["vel"] = document.getElementById("vel")
    dom["trip"] = document.getElementById("trip")
    dom["pasaj"] = document.getElementById("pasaj")
    dom["capac"] = document.getElementById("capac")
    dom["consum"] = document.getElementById("consum")
    dom["clasenav"] = document.getElementById("clasenav")

    obtenerVehiculos(term)
    .then(r => {
        dom["nombre"].innerHTML = r.name
        r.films.forEach(addPelicula)
        r.pilots.forEach(addPersonaje)
        addPropiedades(r)
    })
    
    //mismo proceso que para index
    dom['atras'] = document.getElementById('atras')
    dom['atras'].style.cursor = "pointer"
    dom['atras'].onclick = buttonAtras

}


function addPropiedades(addi) { //añadir propiedades
    modelo.innerHTML = "Modelo: " + addi.model
    fab.innerHTML = "Fabricante: " + addi.manufacturer
    coste.innerHTML = "Coste: " + addi.cost
    len.innerHTML = "Longitud: " + addi.length
    vel.innerHTML = "Velocidad máxima: " + addi.max_atmosphering_speed
    trip.innerHTML = "Tripulación: " + addi.crew
    pasaj.innerHTML = "Pasajeros: " + addi.passengers
    capac.innerHTML = "Capacidad: " + addi.cargo_capacity
    consum.innerHTML = "Consumibles: " + addi.consumables
    clasenav.innerHTML = "Clase de nave: " + addi.starship_class


}

async function addPelicula(pelicula) { //añade las peliculas de la especie
    try {
        const response = await obtenerPeliculas(`films/${obtenerURLRecursoSWAPI(pelicula)}`);
        const peliculaURL = obtenerURLRecursoSWAPI(response.url);
        const a = document.createElement('a');
        a.href = 'pelicula.html';
        a.id = `films/${peliculaURL}`; //guarda el id de la pelicula
        a.innerText = response.title;
        a.addEventListener('mouseover', () => { //al pasar el ratón por encima de la pelicula, guarda el id de la pelicula en el sessionStorage
            sessionStorage.setItem('term', a.id);
        });
        const li = document.createElement('li'); //crea un elemento li
        li.appendChild(a);
        dom.pelicula.appendChild(li);
    } catch (error) {
        console.error(error);
    }
}

async function addPersonaje(personaje) { //añade los personajes de la especie
    try {
        const response = await obtenerPersonajes(personaje);
        const personajeURL = obtenerURLRecursoSWAPI(response.url); //obtiene el id del personaje
        const a = document.createElement('a');
        a.href = 'personaje.html'; //cambiar a personaje.html
        a.id = `people/${personajeURL}`;
        a.innerText = response.name;
        a.addEventListener('mouseover', () => {
            sessionStorage.setItem('term', a.id); //guarda el id del personaje en el sessionStorage
        });
        const li = document.createElement('li');
        li.appendChild(a);
        dom.personaje.appendChild(li); //añade el personaje a la lista
    } catch (error) {
        console.error(error);
    }
}

  
function buttonAtras() {
    window.open("index.html", "_self") //retorna a la página principal
}