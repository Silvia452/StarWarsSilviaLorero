//OBTENER TODAS LAS FUNCIONES(PELICULAS,PLANETAS,PERSONAJES,VEHICULOS,NAVES,ESPECIES)

async function obtenerPeliculas(searchTerm) { //OBTENER PELICULAS
  const BASE_URL = `https://swapi.dev/api/${searchTerm}`;
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}



async function obtenerPersonajes(searchTerm) { //OBTENER PERSONAJES
  try {
    const resourceURL = await obtenerURLRecursoSWAPI(searchTerm);
    const BASE_URL = `https://swapi.dev/api/people/${Number(resourceURL)}`; //OBTENER ID DE LA URL
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


async function obtenerPlanetas(searchTerm) { //OBTENER PLANETAS
  try {
    const resourceURL = await obtenerURLRecursoSWAPI(searchTerm);
    const BASE_URL = `https://swapi.dev/api/planets/${Number(resourceURL)}`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function obtenerVehiculos(searchTerm) { //OBTENER VEHICULOS
  try {
    const resourceURL = await obtenerURLRecursoSWAPI(searchTerm);
    const BASE_URL = `https://swapi.dev/api/vehicles/${Number(resourceURL)}`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


async function obtenerNaves(searchTerm) { //OBTENER NAVES
  try {
    const resourceURL = await obtenerURLRecursoSWAPI(searchTerm);
    const BASE_URL = `https://swapi.dev/api/starships/${Number(resourceURL)}`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function obtenerEspecies(searchTerm) { //OBTENER ESPECIES
  try {
    const resourceURL = await obtenerURLRecursoSWAPI(searchTerm);
    const BASE_URL = `https://swapi.dev/api/species/${Number(resourceURL)}`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


function obtenerURLRecursoSWAPI(url) { //OBTENER ID DE LA URL
  return Number(url.match(/([0-9]*)\/?$/)[1])
}

