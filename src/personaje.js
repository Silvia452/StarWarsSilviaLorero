//PERSONAJES

let dom = {}
var term = sessionStorage.getItem("term"); //obtiene el termino de la busqueda
window.onload = () => {

    dom["nombre"] = document.getElementById("nombre")
    dom["descripcion"] = document.getElementById("descripcion")
    dom["pelicula"] = document.getElementById("pelicula")
    dom["planeta"] = document.getElementById("planeta")
    dom["veh"] = document.getElementById("veh")
    dom["nave"] = document.getElementById("nave")
    dom["especie"] = document.getElementById("especie")
    
    obtenerPersonajes(term) //obtiene el personaje
    .then(r => {
        dom["nombre"].innerHTML = r.name.toUpperCase() //nombre del personaje
        r.films.forEach(addPelicula)
        addPlaneta(r.homeworld) //no es un array, por eso no va en el forEach
        r.starships.forEach(addNave)
        r.vehicles.forEach(addVeh) //añade los vehículos a la lista de vehículos
        r.species.forEach(addEspecie)
    })
    
    //mismo proceso que para index
    dom['atras'] = document.getElementById('atras')
    dom['atras'].style.cursor = "pointer"
    dom['atras'].onclick = buttonAtras

}

function buttonAtras() { //vuelve a la página principal
    window.open("index.html", "_self")
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

async function addPlaneta(planeta) { //añade los planetas
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
  
