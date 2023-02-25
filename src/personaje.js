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
        dom["nombre"].innerHTML = r.name //nombre del personaje
        addCaracter(r)
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

function addCaracter(addi) {
    dom["descripcion"].innerHTML = "DESCRIPCIÓN.\n" +
        "Su género es: "+ addi.gender +
        ". Mide " + addi.height + " cm, y pesa: " + addi.mass + " kg. Su color de pelo: " + addi.hair_color + " y su color de piel es: " + addi.skin_color +", el de sus ojos es: " + addi.eye_color +". Nació en: " + addi.birth_year +"."
}

function addPelicula(pelicula) {
    obtenerPeliculas("films/" + obtenerURLRecursoSWAPI(pelicula))
    .then(r =>{
    
        let a = document.createElement('a')
        a.href = "pelicula.html"
    
        let li = document.createElement('li') //crea un elemento li
        li.appendChild(a)
        a.innerText = r.title //nombre de la película
        dom['pelicula'].appendChild(li) //añade la película a la lista de películas

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "films/" + aux
        a.onmouseover = () => { //cuando el ratón pasa por encima de la película, se guarda el id de la película en el sessionStorage
            term = a.id
            sessionStorage.setItem("term", term); //guarda el id de la película en el sessionStorage
      }
    })
}

function addPlaneta(planeta) {
    obtenerPlanetas(planeta)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "planeta.html"

        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['planeta'].appendChild(li) //añade el planeta a la lista de planetas
        var aux = obtenerURLRecursoSWAPI(r.url) //obtiene el id del planeta
        a.id = "planets/" + aux

        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term); //guarda el id del planeta en el sessionStorage
          }
        
    })
}


function addNave(nave) { //mismo proceso que para las películas
    obtenerNaves(nave)
    .then(r =>{

        let a = document.createElement('a') //crea un elemento a
        a.href = "nave.html"

        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['nave'].appendChild(li) //añade la nave a la lista de naves

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "starships/" + aux //guarda el id de la nave en el sessionStorage
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
    })
}


function addVeh(veh) { //mismo proceso que para las películas
    obtenerVehiculos(veh)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "vehiculo.html"

        let li = document.createElement('li')
        li.appendChild(a)
        a.innerText = r.name
        dom['veh'].appendChild(li) //añade el vehículo a la lista de vehículos
        
        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "vehicles/" + aux //guarda el id del vehículo en el sessionStorage
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term);
          }
    })
}


function addEspecie(especie) {
    obtenerEspecies(especie)
    .then(r =>{
        let a = document.createElement('a')
        a.href = "especie.html"
    
        let li = document.createElement('li') //crea un elemento li
        li.appendChild(a)
        a.innerText = r.name
        dom['especie'].appendChild(li) // añade la especie a la lista de especies

        var aux = obtenerURLRecursoSWAPI(r.url)
        a.id = "species/" + aux
        a.onmouseover = () => {
            term = a.id
            sessionStorage.setItem("term", term); //guarda el id de la especie en el sessionStorage
          }
    })
}
  
