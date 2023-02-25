//OBTENER TODAS LAS FUNCIONES(PELICULAS,PLANETAS,PERSONAJES,VEHICULOS,NAVES,ESPECIES)

function obtenerPeliculas(searchTerm) { //OBTENER PELICULAS
  const BASE_URL = `https://swapi.dev/api/${searchTerm}`
  return fetch(BASE_URL) //OBTENER URL
  .then(r => r.json())
}


function obtenerPersonajes(searchTerm) { //OBTENER PERSONAJES
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/people/${Number(obtenerURLRecursoSWAPI(searchTerm))}`
  return fetch(BASE_URL)
  .then(r => r.json())
}


function obtenerPlanetas(searchTerm) { //OBTENER PLANETAS
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/planets/${Number(obtenerURLRecursoSWAPI(searchTerm))}`
  return fetch(BASE_URL)
  .then(r => r.json())
}

function obtenerVehiculos(searchTerm) { //OBTENER VEHICULOS
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/vehicles/${Number(obtenerURLRecursoSWAPI(searchTerm))}`
  return fetch(BASE_URL)
  .then(r => r.json())
}

function obtenerNaves(searchTerm) { //OBTENER NAVE
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/starships/${Number(obtenerURLRecursoSWAPI(searchTerm))}`
  return fetch(BASE_URL)
  .then(r => r.json())
}

function obtenerEspecies(searchTerm) { //OBTENER ESPECIES
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/species/${Number(obtenerURLRecursoSWAPI(searchTerm))}`

  return fetch(BASE_URL)
  .then(r => r.json())
}


function obtenerURLRecursoSWAPI(url) { //OBTENER ID DE LA URL
  return Number(url.match(/([0-9]*)\/?$/)[1])
}

