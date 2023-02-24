"use strict";

let dom = {}
var term = sessionStorage.getItem("term");
window.onload = () => {

    dom["NOM"] = document.getElementById("NOM")
    dom["PEL"] = document.getElementById("PEL")
    dom["PE"] = document.getElementById("PE")
    dom["MOD"] = document.getElementById("MOD")
    dom["MAN"] = document.getElementById("MAN")
    dom["COS"] = document.getElementById("COS")
    dom["LEN"] = document.getElementById("LEN")
    dom["MAS"] = document.getElementById("MAS")
    dom["CRE"] = document.getElementById("CRE")
    dom["PAS"] = document.getElementById("PAS")
    dom["CAC"] = document.getElementById("CAC")
    dom["CON"] = document.getElementById("CON")
    dom["STC"] = document.getElementById("STC")    
    obtenerVehiculos(term)
    .then(r => {
        dom["NOM"].innerHTML = r.name
        r.films.forEach(addPEL)
        r.pilots.forEach(addPER)
        addPRO(r)
    })
    
    
    dom['Back'] = document.getElementById('Back')
    dom['Back'].style.cursor = "pointer"
    dom['Back'].onclick = ClickB




}
function addPRO(PRO) {
    MOD.innerHTML = "Modelo: " + PRO.model
    MAN.innerHTML = "Fabricante: " + PRO.manufacturer
    COS.innerHTML = "Coste: " + PRO.cost
    LEN.innerHTML = "Longitud: " + PRO.length
    MAS.innerHTML = "Velocidad máxima: " + PRO.max_atmosphering_speed
    CRE.innerHTML = "Tripulación: " + PRO.crew
    PAS.innerHTML = "Pasajeros: " + PRO.passengers
    CAC.innerHTML = "Capacidad: " + PRO.cargo_capacity
    CON.innerHTML = "Consumibles: " + PRO.consumables
    STC.innerHTML = "Clase de nave: " + PRO.starship_class


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


  
function ClickB() {
    window.open("index.html", "_self")
}