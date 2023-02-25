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

function addPersonaje(personaje) { //añade los personajes a la lista de personajes
    obtenerPersonajes(personaje)
    .then(r =>{
        let a = document.createElement('a') //crea un elemento a
        a.href = "personaje.html"
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name //nombre del personaje
        dom['personaje'].appendChild(li)
        var aux = obtenerURLRecursoSWAPI(r.url) //obtiene el id del personaje
        a.id = "people/" + aux //añade el id a cada elemento a
        
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
      }
    })
}

function addPlaneta(planeta) { //añade los planetas a la lista de planetas
    obtenerPlanetas(planeta)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "planeta.html"
        
        let li = document.createElement('li') //crea un elemento li
        li.appendChild(a)
        a.innerText = r.name
        dom['planeta'].appendChild(li) //añade el elemento li a la lista de planetas

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "planets/" + aux //añade el id a cada elemento a
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
        
    })
}

function addNave(nave) { //añade las naves a la lista de naves
    obtenerNaves(nave)
    .then(r =>{

        let a = document.createElement('a')
        a.href = "nave.html"
        
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['nave'].appendChild(li) //añade el elemento li a la lista de naves

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "starships/" + aux  //añade el id a cada elemento a
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
    })
}


function addVeh(veh) { //añade los vehículos a la lista de vehículos
    obtenerVehiculos(veh)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "vehiculo.html"
        
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['veh'].appendChild(li) //añade el elemento li a la lista de vehículos
        
        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "vehicles/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term); //guarda el id del vehículo en el sessionStorage
          }
    })
}


function addEspecie(especie) { //añade las especies a la lista de especies
    obtenerEspecies(especie)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "especie.html"
    
        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['especie'].appendChild(li)

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "species/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
    })
}
  

