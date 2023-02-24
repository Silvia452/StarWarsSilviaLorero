"use strict";

let dom = {}
var term = sessionStorage.getItem("term");
window.onload = () => {

    dom['descripcion'] = document.getElementById('descripcion')
    dom["titulo"] = document.getElementById("titulo")
    dom["personaje"] = document.getElementById("personaje")
    dom["planeta"] = document.getElementById("planeta")
    dom["veh"] = document.getElementById("veh")
    dom["nave"] = document.getElementById("nave")
    dom["especie"] = document.getElementById("especie")


    obtenerPeliculas(term)
    .then(r => {
        dom["titulo"].innerHTML = r.title +" (Episode " + r.episode_id + ")"
        dom["descripcion"].innerHTML = r.opening_crawl
        r.characters.forEach(addPersonaje)
        r.planets.forEach(addPlaneta)
        r.starships.forEach(addNave)
        r.vehicles.forEach(addVeh)
        r.species.forEach(addEspecie)
    })
    
    
    dom['Back'] = document.getElementById('Back')
    dom['Back'].style.cursor = "pointer"
    dom['Back'].onclick = ClickB

    


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

function addPlaneta(planeta) {
    obtenerPlanetas(planeta)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "planeta.html"
        
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['planeta'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "planets/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
        
    })
}

function addNave(nave) {
    obtenerNaves(nave)
    .then(r =>{

        let a = document.createElement('a')
        a.href = "nave.html"
        
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['nave'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "starships/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
    })
}


function addVeh(veh) {
    obtenerVehiculos(veh)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "vehiculo.html"
        
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['veh'].appendChild(li)
        
        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "vehicles/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
    })
}


function addEspecie(especie) {
    obtenerEspecies(especie)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "especie.html"
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['especie'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "species/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
    })
}
  
function ClickB() {
    window.open("index.html", "_self")
    
}
