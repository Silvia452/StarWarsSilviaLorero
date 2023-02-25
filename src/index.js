//PAGINA PRINCIPAL

let dom = {}
term = null

window.onload = () => {
    
    dom['4'] = document.getElementById('4')
    dom['4'].style.cursor = "pointer" //cambia el cursor a mano
    dom['4'].onclick = buttonPelicula

    dom['5'] = document.getElementById('5')
    dom['5'].style.cursor = "pointer"
    dom['5'].onclick = buttonPelicula

    dom['6'] = document.getElementById('6')
    dom['6'].style.cursor = "pointer"
    dom['6'].onclick = buttonPelicula

    dom['1'] = document.getElementById('1')
    dom['1'].style.cursor = "pointer"
    dom['1'].onclick = buttonPelicula

    dom['2'] = document.getElementById('2')
    dom['2'].style.cursor = "pointer"
    dom['2'].onclick = buttonPelicula

    dom['3'] = document.getElementById('3')
    dom['3'].style.cursor = "pointer"
    dom['3'].onclick = buttonPelicula

}


function buttonPelicula(id) {
    term = "films/" + this.id
    sessionStorage.setItem("term", term); //guarda el id de la pelicula en el sessionStorage
    window.open("pelicula.html", "_self")   //va a la pagina pelicula.html donde esta el detalle de la pelicula
    
}
