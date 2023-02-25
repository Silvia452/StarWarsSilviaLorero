//ESPECIES

let dom = {}
var term = sessionStorage.getItem("term"); //obtiene el id de la pelicula del sessionStorage
window.onload = () => {

    dom["nombre"] = document.getElementById("nombre")
    dom["pelicula"] = document.getElementById("pelicula")
    dom["personaje"] = document.getElementById("personaje")
    dom["nom"] = document.getElementById("nom")
    dom["clase"] = document.getElementById("clase")
    dom["descrip"] = document.getElementById("descrip")
    dom["altura"] = document.getElementById("altura")
    dom["piel"] = document.getElementById("piel")
    dom["pelo"] = document.getElementById("pelo")
    dom["vida"] = document.getElementById("vida")
    dom["planeta"] = document.getElementById("planeta")
    dom["lan"] = document.getElementById("lan")
    dom["gen"] = document.getElementById("gen")

    
    obtenerEspecies(term) //obtenerEspecies("species/1")
    .then(r => {
        dom["nombre"].innerHTML = r.name
        r.films.forEach(addPeliculas)
        r.people.forEach(addPersonajes)
        addPRO(r)

    })

    //mismo proceso que para el index
    dom['atras'] = document.getElementById('atras')
    dom['atras'].style.cursor = "pointer"
    dom['atras'].onclick = buttonAtras
}

function buttonAtras() {
    window.open("index.html", "_self")
}


function addPRO(addi) { //añadir la info de la especie
    clase.innerHTML = "Clasificación: " + addi.classification
    descrip.innerHTML = "Designación: " + addi.designation
    altura.innerHTML = "Altura promedio: " + addi.average_height
    piel.innerHTML = "Colores de piel: " + addi.skin_colors
    pelo.innerHTML = "Colores de pelo: " + addi.hair_colors
    vida.innerHTML = "Esperanza de vida: " + addi.average_lifespan + " años"
    lan.innerHTML = "Idiomas: " + addi.language
    gen.innerHTML ="Color de ojos: " + addi.eye_colors
    nom.innerHTML = "Nombre: " + addi.name

}


function addPeliculas(pelicula) { //añadir las peliculas
    obtenerPeliculas("films/" + obtenerURLRecursoSWAPI(pelicula)) //obtenerPeliculas(pelicula)
    .then(r =>{
    
        let a = document.createElement('a')
        a.href = "pelicula.html"
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.title
        dom['pelicula'].appendChild(li) //añadimos la lista a la pagina

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "films/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
      }
    })
}

function addPersonajes(personaje) { //añadir los personajes
    obtenerPersonajes(personaje)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "personaje.html"
    
        let li = document.createElement('li')
        li.appendChild(a) //añadimos el personaje a la lista
        a.innerText = r.name
        dom['personaje'].appendChild(li) //añadimos la lista a la pagina
        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "people/" + aux
        
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
      }
    })
}

  
