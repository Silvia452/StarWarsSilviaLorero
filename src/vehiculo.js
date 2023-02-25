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

function addPelicula(pelicula) {
    obtenerPeliculas("films/" + obtenerURLRecursoSWAPI(pelicula))
    .then(r =>{
    
        let a = document.createElement('a') //creamos un elemento a
        a.href = "pelicula.html"
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.title
        dom['pelicula'].appendChild(li) //añadimos el elemento a a la lista de peliculas

        var aux = obtenerURLRecursoSWAPI(r.url) //obtenemos el id de la pelicula
        a.id = "films/" + aux
        a.onmouseover = () => {
            term = a.id //guardamos el id en la variable term
            sessionStorage.setItem("term", term); //guardamos el id en el sessionStorage
      }
    })
}

function addPersonaje(personaje) { //mismo proceso que para peliculas
    obtenerPersonajes(personaje)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "personaje.html"
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name //añadimos el nombre del personaje
        dom['personaje'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "people/" + aux //guardamos el id en la variable term
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term); //guardamos el id en el sessionStorage
      }
    })
}

  
function buttonAtras() {
    window.open("index.html", "_self") //retorna a la página principal
}