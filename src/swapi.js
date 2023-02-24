"use strict";

function obtenerPeliculas(searchTerm) {
  const BASE_URL = `https://swapi.dev/api/${searchTerm}`
  return fetch(BASE_URL)
  .then(r => r.json())
}


function obtenerPersonajes(searchTerm) {
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/people/${Number(obtenerURLRecursoSWAPI(searchTerm))}`
  return fetch(BASE_URL)
  .then(r => r.json())
}


function obtenerPlanetas(searchTerm) {
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/planets/${Number(obtenerURLRecursoSWAPI(searchTerm))}`
  return fetch(BASE_URL)
  .then(r => r.json())
}

function obtenerVehiculos(searchTerm) {
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/vehicles/${Number(obtenerURLRecursoSWAPI(searchTerm))}`
  return fetch(BASE_URL)
  .then(r => r.json())
}

function obtenerNaves(searchTerm) {
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/starships/${Number(obtenerURLRecursoSWAPI(searchTerm))}`
  return fetch(BASE_URL)
  .then(r => r.json())
}

function obtenerEspecies(searchTerm) {
  obtenerURLRecursoSWAPI(searchTerm)
  const BASE_URL = `https://swapi.dev/api/species/${Number(obtenerURLRecursoSWAPI(searchTerm))}`

  return fetch(BASE_URL)
  .then(r => r.json())
}


function obtenerURLRecursoSWAPI(url) {
  return Number(url.match(/([0-9]*)\/?$/)[1])
}

