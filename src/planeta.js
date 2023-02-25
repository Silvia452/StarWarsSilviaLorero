//PLANETAS

let dom = {}
var term = sessionStorage.getItem("term"); //obtiene el id del planeta del sessionStorage
window.onload = () => {

    dom["nombre"] = document.getElementById("nombre")
    dom["pelicula"] = document.getElementById("pelicula")
    dom["personaje"] = document.getElementById("personaje")
    dom["clima"] = document.getElementById("clima")
    dom["grav"] = document.getElementById("grav")
    dom["terreno"] = document.getElementById("terreno")
    dom["surface"] = document.getElementById("surface")
    dom["popul"] = document.getElementById("popul")
    dom["rotation"] = document.getElementById("rotation")
    dom["orbit"] = document.getElementById("orbit")
    dom["diam"] = document.getElementById("diam")
    
    obtenerPlanetas(term) //obtiene los datos del planeta
    .then(r => {
        dom["nombre"].innerHTML = r.name
        r.films.forEach(addPelicula)
        r.residents.forEach(addPersonaje)
        addPropiedades(r)

    })
    

    //mismo proceso que para index
    dom['atras'] = document.getElementById('atras')
    dom['atras'].style.cursor = "pointer"
    dom['atras'].onclick = buttonAtras

}


function addPropiedades(addi) { //añade las propiedades de cada planeta
    clima.innerHTML = "Clima: " + addi.climate
    diam.innerHTML = "Diámetro: " + addi.diameter
    grav.innerHTML = "Gravedad: " + addi.gravity
    popul.innerHTML = "Población: " + addi.population
    rotation.innerHTML = "Rotación: " + addi.rotation_period
    orbit.innerHTML = "Órbita: " + addi.orbital_period
    terreno.innerHTML = "Terreno: " + addi.terrain
    surface.innerHTML = "Superficie de Agua: " + addi.surface_water

}


function addPelicula(pelicula) { //añade las peliculas de cada planeta
    obtenerPeliculas("films/" + obtenerURLRecursoSWAPI(pelicula))
    .then(r =>{
    
        let a = document.createElement('a') //crea un elemento a
        a.href = "pelicula.html"
    
        let li = document.createElement('li') //crea un elemento li
        li.appendChild(a)
        a.innerText = r.title //añade el titulo de la pelicula al elemento a
        dom['pelicula'].appendChild(li) //añade el elemento li a la lista de peliculas

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "films/" + aux //añade el id a cada elemento a
        a.onmouseover = () => {
            term = a.id //guarda el id en la variable term
            sessionStorage.setItem("term", term); //guarda la variable term en el sessionStorage
      }
    })
}


function addPersonaje(personaje) { //añade los personajes de cada planeta
    obtenerPersonajes(personaje)
    .then(r =>{ //añade los personajes de cada planeta
        let a = document.createElement('a')
        a.href = "personaje.html"
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['personaje'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "people/" + aux //añade el id a cada elemento a
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term); //guarda la variable term en el sessionStorage
      }
    })
}



function buttonAtras() {
    window.open("index.html", "_self") //volver a la pagina inicial
}