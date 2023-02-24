"use strict";

let dom = {}
var term = sessionStorage.getItem("term");
window.onload = () => {

    dom["NOM"] = document.getElementById("NOM")
    dom["PEL"] = document.getElementById("PEL")
    dom["PE"] = document.getElementById("PE")
    dom["CLA"] = document.getElementById("CLA")
    dom["DES"] = document.getElementById("DES")
    dom["AVH"] = document.getElementById("AVH")
    dom["SKI"] = document.getElementById("SKI")
    dom["HAI"] = document.getElementById("HAI")
    dom["AVL"] = document.getElementById("AVL")
    dom["HOM"] = document.getElementById("HOM")
    dom["LAN"] = document.getElementById("LAN")
    
    obtenerEspecies(term)
    .then(r => {
        dom["NOM"].innerHTML = r.name
        r.films.forEach(addPEL)
        r.people.forEach(addPER)
        addPRO(r)

    })
    
    
    dom['Back'] = document.getElementById('Back')
    dom['Back'].style.cursor = "pointer"
    dom['Back'].onclick = ClickB
}

function addPRO(PRO) {
    CLA.innerHTML = "Claificación: " + PRO.classification
    DES.innerHTML = "Designación: " + PRO.designation
    AVH.innerHTML = "Altura promedio: " + PRO.average_height
    SKI.innerHTML = "Colores de piel: " + PRO.skin_colors
    HAI.innerHTML = "Colores de pelo: " + PRO.hair_colors
    AVL.innerHTML = "Esperanza de vida: " + PRO.average_lifespan
    obtenerPlanetas(PRO.homeworld)
    .then(r => HOM.innerHTML = "Planeta madre: " + r.name)
    LA
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