"use strict";

let dom = {}
var term = sessionStorage.getItem("term");
window.onload = () => {

    dom["NOM"] = document.getElementById("NOM")
    dom["PEL"] = document.getElementById("PEL")
    dom["PE"] = document.getElementById("PE")
    dom["CLI"] = document.getElementById("CLI")
    dom["GRA"] = document.getElementById("GRA")
    dom["TER"] = document.getElementById("TER")
    dom["SOF"] = document.getElementById("SOF")
    dom["POP"] = document.getElementById("POP")
    dom["ROT"] = document.getElementById("ROT")
    dom["ORB"] = document.getElementById("ORB")
    dom["DIA"] = document.getElementById("DIA")
    
    obtenerPlanetas(term)
    .then(r => {
        dom["NOM"].innerHTML = r.name
        r.films.forEach(addPEL)
        r.residents.forEach(addPER)
        addPRO(r)

    })
    
    
    dom['Back'] = document.getElementById('Back')
    dom['Back'].style.cursor = "pointer"
    dom['Back'].onclick = ClickB




}
function addPRO(PRO) {
    CLI.innerHTML = "Clima: " + PRO.climate
    GRA.innerHTML = "Gravedad: " + PRO.gravity
    TER.innerHTML = "Terreno: " + PRO.terrain
    SOF.innerHTML = "Superficie de Agua: " + PRO.surface_water
    POP.innerHTML = "Populación: " + PRO.population
    ROT.innerHTML = "Rotación: " + PRO.rotation_period
    ORB.innerHTML = "Órbita: " + PRO.orbital_period
    DIA.innerHTML = "Diámetro: " + PRO.diameter


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