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
        r.films.forEach(addPelicula)
        r.people.forEach(addPersonaje)
        addPropiedades(r)

    })


    //mismo proceso que para el index
    dom['atras'] = document.getElementById('atras')
    dom['atras'].style.cursor = "pointer"
    dom['atras'].onclick = buttonAtras
}

function buttonAtras() { //vuelve a la página principal
    window.open("index.html", "_self")
}


function addPropiedades(addi) { //añadir la info de la especie
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

