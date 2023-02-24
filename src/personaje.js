"use strict";

let dom = {}
var term = sessionStorage.getItem("term");
window.onload = () => {

    dom["nombre"] = document.getElementById("nombre")
    dom["descripcion"] = document.getElementById("descripcion")
    dom["pelicula"] = document.getElementById("pelicula")
    dom["planeta"] = document.getElementById("planeta")
    dom["veh"] = document.getElementById("veh")
    dom["nave"] = document.getElementById("nave")
    dom["especie"] = document.getElementById("especie")
    
    obtenerPersonajes(term)
    .then(r => {
        dom["nombre"].innerHTML = r.name
        addCAR(r)
        r.films.forEach(addPelicula)
        addPlaneta(r.homeworld)
        r.starships.forEach(addNave)
        r.vehicles.forEach(addVeh)
        r.species.forEach(addEspecie)
    })
    
    
    dom['Back'] = document.getElementById('Back')
    dom['Back'].style.cursor = "pointer"
    dom['Back'].onclick = ClickB




}
function addCAR(addi) {
    dom["descripcion"].innerHTML = "Es "+ addi.gender + ". La altura es de " + addi.height + ", su peso es de: " + addi.mass + ". Su color de pelo: " + addi.hair_color + " y su color de piel es: " + addi.skin_color +", el de sus ojos es: " + addi.eye_color +". Nació en el año " + addi.birth_year +"."
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