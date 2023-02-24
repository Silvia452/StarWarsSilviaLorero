"use strict";

let dom = {}
var term = sessionStorage.getItem("term");
window.onload = () => {

    dom["nombre"] = document.getElementById("nombre")
    dom["pelicula"] = document.getElementById("pelicula")
    dom["personaje"] = document.getElementById("personaje")
    dom["name"] = document.getElementById("name")
    dom["clima"] = document.getElementById("clima")
    dom["grav"] = document.getElementById("grav")
    dom["terreno"] = document.getElementById("terreno")
    dom["surface"] = document.getElementById("surface")
    dom["popul"] = document.getElementById("popul")
    dom["rotation"] = document.getElementById("rotation")
    dom["orbit"] = document.getElementById("orbit")
    dom["diam"] = document.getElementById("diam")
    
    obtenerPlanetas(term)
    .then(r => {
        dom["nombre"].innerHTML = r.name
        r.films.forEach(addPelicula)
        r.residents.forEach(addPersonaje)
        addPropiedades(r)

    })
    
    
    dom['Back'] = document.getElementById('Back')
    dom['Back'].style.cursor = "pointer"
    dom['Back'].onclick = ClickB




}
function addPropiedades(addi) {

    name.innerHTML = "Nombre: " + addi.name
    clima.innerHTML = "Clima: " + addi.climate
    diam.innerHTML = "Diámetro: " + addi.diameter
    popul.innerHTML = "Población: " + addi.population
    rotation.innerHTML = "Rotación: " + addi.rotation_period
    orbit.innerHTML = "Órbita: " + addi.orbital_period
    grav.innerHTML = "Gravedad: " + addi.gravity
    terreno.innerHTML = "Terreno: " + addi.terrain
    surface.innerHTML = "Superficie de Agua: " + addi.surface_water

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


  
function ClickB() {
    window.open("index.html", "_self")
}