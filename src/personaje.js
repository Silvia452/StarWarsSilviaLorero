"use strict";

let dom = {}
var term = sessionStorage.getItem("term");
window.onload = () => {

    dom["NOM"] = document.getElementById("NOM")
    dom["OP"] = document.getElementById("OP")
    dom["PEL"] = document.getElementById("PEL")
    dom["PL"] = document.getElementById("PL")
    dom["VE"] = document.getElementById("VE")
    dom["NA"] = document.getElementById("NA")
    dom["ES"] = document.getElementById("ES")
    
    obtenerPersonajes(term)
    .then(r => {
        dom["NOM"].innerHTML = r.name
        addCAR(r)
        r.films.forEach(addPEL)
        addPLA(r.homeworld)
        r.starships.forEach(addNAV)
        r.vehicles.forEach(addVEH)
        r.species.forEach(addESP)
    })
    
    
    dom['Back'] = document.getElementById('Back')
    dom['Back'].style.cursor = "pointer"
    dom['Back'].onclick = ClickB




}
function addCAR(CAR) {
    dom["OP"].innerHTML = "Es "+ CAR.gender + ". La altura es de " + CAR.height + ", su peso es de: " + CAR.mass + ". Su color de pelo: " + CAR.hair_color + " y su color de piel es: " + CAR.skin_color +", el de sus ojos es: " + CAR.eye_color +". Nació en el año " + CAR.birth_year +"."
}
function addPEL(PEL) {
    obtenerPeliculas("films/" + obtenerURLRecursoSWAPI(PEL))
    .then(r =>{
    
        let a = document.createElement('a')
        a.href = "pelicula.html"
    
        let li = document.createElement('li')
    
        li.appendChild(a)
        a.innerText = r.title
        dom['PEL'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "films/" + aux
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