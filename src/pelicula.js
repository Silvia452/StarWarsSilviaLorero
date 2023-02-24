"use strict";

let dom = {}
var term = sessionStorage.getItem("term");
window.onload = () => {

    dom['OP'] = document.getElementById('OP')
    dom["TI"] = document.getElementById("TI")
    dom["PE"] = document.getElementById("PE")
    dom["PL"] = document.getElementById("PL")
    dom["VE"] = document.getElementById("VE")
    dom["NA"] = document.getElementById("NA")
    dom["ES"] = document.getElementById("ES")


    obtenerPeliculas(term)
    .then(r => {
        dom["TI"].innerHTML = r.title +" (Episode " + r.episode_id + ")"
        dom["OP"].innerHTML = r.opening_crawl
        r.characters.forEach(addPER)
        r.planets.forEach(addPLA)
        r.starships.forEach(addNAV)
        r.vehicles.forEach(addVEH)
        r.species.forEach(addESP)
    })
    
    
    dom['Back'] = document.getElementById('Back')
    dom['Back'].style.cursor = "pointer"
    dom['Back'].onclick = ClickB

    


}
function addPER(PERS) {
    obtenerPersonajes(PERS)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "personaje.html"
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['PE'].appendChild(li)
        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "people/" + aux
        
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
      }
    })
}

function addPLA(PLA) {
    obtenerPlanetas(PLA)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "planeta.html"
        
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['PL'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "planets/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
        
    })
}

function addNAV(NAV) {
    obtenerNaves(NAV)
    .then(r =>{

        let a = document.createElement('a')
        a.href = "nave.html"
        
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['NA'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "starships/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
    })
}


function addVEH(VEH) {
    obtenerVehiculos(VEH)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "vehiculo.html"
        
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['VE'].appendChild(li)
        
        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "vehicles/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
    })
}


function addESP(ESP) {
    obtenerEspecies(ESP)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "especie.html"
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['ES'].appendChild(li)

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
