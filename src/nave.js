//NAVES

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
    dom["hyperdrive"] = document.getElementById("hyperdrive")
    dom["megalaser"] = document.getElementById("megalaser")
    dom["clasenav"] = document.getElementById("clasenav")
    
    obtenerNaves(term)
    .then(r => {
        dom["nombre"].innerHTML = r.name
        r.films.forEach(addPelicula)
        r.pilots.forEach(addPersonaje)
        addPRO(r)

    })

    //mismo proceso que para el index
    dom['atras'] = document.getElementById('atras')
    dom['atras'].style.cursor = "pointer"
    dom['atras'].onclick = butonAtras

}

function butonAtras() {
    window.open("index.html", "_self") //volver a página principal
}


function addPRO(addi) {
    modelo.innerHTML = "Modelo: " + addi.model
    clasenav.innerHTML = "Clase de nave: " + addi.starship_class
    fab.innerHTML = "Fabricante: " + addi.manufacturer
    coste.innerHTML = "Coste: " + addi.cost
    len.innerHTML = "Longitud: " + addi.length
    vel.innerHTML = "Velocidad máxima: " + addi.max_atmosphering_speed
    trip.innerHTML = "Tripulación: " + addi.crew
    pasaj.innerHTML = "Pasajeros: " + addi.passengers
    capac.innerHTML = "Capacidad: " + addi.cargo_capacity
    consum.innerHTML = "Consumibles: " + addi.consumables
    hyperdrive.innerHTML = "Calificación de hiperimpulsor: " + addi.hyperdrive_rating
    megalaser.innerHTML = "MGLT: " + addi.MGLT



}

function addPelicula(pelicula) {
    obtenerPeliculas("films/" + obtenerURLRecursoSWAPI(pelicula))
    .then(r =>{
    
        let a = document.createElement('a')
        a.href = "pelicula.html"
    
        let li = document.createElement('li')
    
        li.appendChild(a)
        a.innerText = r.title
        dom['pelicula'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "films/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
      }
    })
}

function addPersonaje(personaje) {
    obtenerPersonajes(personaje)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "personaje.html"
        
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['personaje'].appendChild(li)
        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "people/" + aux
        
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
      }
    })
}


  
