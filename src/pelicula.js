//PELICULAS

let dom = {}
var term = sessionStorage.getItem("term"); //obtiene el id de la película del sessionStorage
window.onload = () => {

    dom['descripcion'] = document.getElementById('descripcion')
    dom["titulo"] = document.getElementById("titulo")
    dom["personaje"] = document.getElementById("personaje")
    dom["planeta"] = document.getElementById("planeta")
    dom["veh"] = document.getElementById("veh")
    dom["nave"] = document.getElementById("nave")
    dom["especie"] = document.getElementById("especie")


    obtenerPeliculas(term)
    .then(r => {
        dom["titulo"].innerHTML = r.title +" (Episode " + r.episode_id + ")"
        dom["descripcion"].innerHTML = r.opening_crawl
        r.characters.forEach(addPersonaje)
        r.planets.forEach(addPlaneta)
        r.starships.forEach(addNave) //añade las naves a la lista de naves
        r.vehicles.forEach(addVeh)
        r.species.forEach(addEspecie)
    })
    
    
    dom['atras'] = document.getElementById('atras')
    dom['atras'].style.cursor = "pointer"
    dom['atras'].onclick = buttonAtras

}

function buttonAtras() {
    window.open("index.html", "_self")

}

async function addPersonaje(personaje) {
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


async function addPlaneta(planeta) { //añade el planeta
    try {
        const r = await obtenerPlanetas(planeta); //obtiene el planeta
        let a = document.createElement('a');
        a.href = "planeta.html";

        let li = document.createElement('li');
        li.appendChild(a); //añade el elemento a a la lista
        a.innerText = r.name;
        dom['planeta'].appendChild(li); //añade el planeta a la lista de planetas

        var aux = obtenerURLRecursoSWAPI(r.url); //obtiene el id del planeta
        a.id = "planets/" + aux;
        a.onmouseover = () => {
            term = a.id;
            sessionStorage.setItem("term", term); //guarda el id del planeta en el sessionStorage
        };
    } catch (error) {
        console.error(error);
    }
}

async function addNave(nave) {
    try {
        const r = await obtenerNaves(nave); //obtiene la nave
        let a = document.createElement('a');
        a.href = "nave.html";

        let li = document.createElement('li');
        li.appendChild(a);
        a.innerText = r.name;
        dom['nave'].appendChild(li); //añade la nave a la lista de naves

        var aux = obtenerURLRecursoSWAPI(r.url); //obtiene el id de la nave
        a.id = "starships/" + aux; //guarda el id de la nave
        a.onmouseover = () => {
            term = a.id;
            sessionStorage.setItem("term", term); //guarda el id de la nave en el sessionStorage
        };
    } catch (error) {
        console.error(error);
    }
}


async function addVeh(veh) {
    try {
        const r = await obtenerVehiculos(veh);
        let a = document.createElement('a');
        a.href = "vehiculo.html"; //añade el vehículo a la lista de vehículos

        let li = document.createElement('li');
        li.appendChild(a); //añade el elemento a a la lista
        a.innerText = r.name;
        dom['veh'].appendChild(li);

        var aux = obtenerURLRecursoSWAPI(r.url);
        a.id = "vehicles/" + aux; //guarda el id del vehículo
        a.onmouseover = () => {
            term = a.id;
            sessionStorage.setItem("term", term);//guarda el id del vehículo en el sessionStorage
        };
    } catch (error) {
        console.error(error); //si hay un error, lo muestra por consola
    }
}


async function addEspecie(especie) {
    try {
        const r = await obtenerEspecies(especie); //obtiene la especie
        let a = document.createElement('a');
        a.href = "especie.html"; //añade la especie a la lista de especies

        let li = document.createElement('li');
        li.appendChild(a); //añade el elemento a a la lista
        a.innerText = r.name;
        dom['especie'].appendChild(li); //añade la especie a la lista de especies

        var aux = obtenerURLRecursoSWAPI(r.url); //obtiene el id de la especie
        a.id = "species/" + aux;
        a.onmouseover = () => {
            term = a.id;
            sessionStorage.setItem("term", term); //guarda el id de la especie en el sessionStorage
        };
    } catch (error) {
        console.error(error);
    }
}

