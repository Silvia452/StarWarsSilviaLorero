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


async function addPelicula(pelicula) { //añade las peliculas
    try {
        const response = await obtenerPeliculas(`films/${obtenerURLRecursoSWAPI(pelicula)}`);
        const peliculaURL = obtenerURLRecursoSWAPI(response.url);
        const a = document.createElement('a');
        a.href = 'pelicula.html';
        a.id = `films/${peliculaURL}`; //guarda el id de la pelicula
        a.innerText = response.title;
        a.addEventListener('mouseover', () => { //al pasar el ratón por encima de la pelicula, guarda el id de la pelicula en el sessionStorage
            sessionStorage.setItem('term', a.id);
        });
        const li = document.createElement('li'); //crea un elemento li
        li.appendChild(a);
        dom.pelicula.appendChild(li);
    } catch (error) {
        console.error(error);
    }
}

async function addPersonaje(personaje) { //añade los personajes
    try {
        const response = await obtenerPersonajes(personaje);
        const personajeURL = obtenerURLRecursoSWAPI(response.url); //obtiene el id del personaje
        const a = document.createElement('a');
        a.href = 'personaje.html'; //cambiar a personaje.html
        a.id = `people/${personajeURL}`;
        a.innerText = response.name;
        a.addEventListener('mouseover', () => {
            sessionStorage.setItem('term', a.id); //guarda el id del personaje en el sessionStorage
        });
        const li = document.createElement('li');
        li.appendChild(a);
        dom.personaje.appendChild(li); //añade el personaje a la lista
    } catch (error) {
        console.error(error);
    }
}



function buttonAtras() {
    window.open("index.html", "_self") //volver a la pagina inicial
}