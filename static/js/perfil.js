window.onload = () => {
    init()
    cargarEventosCheckBox()
}
function init() {
    let barraEmpadronamiento = document.querySelector("#bar-Empadronamiento .progress-bar")
    let barraSalud = document.querySelector("#bar-Salud .progress-bar")
    let barraEducacion = document.querySelector("#bar-Educacion .progress-bar")

    modificarBarra(barraEmpadronamiento, 0)
    modificarBarra(barraSalud, 0)
    modificarBarra(barraEducacion, 0)
}

function cargarEventosCheckBox(){
    [...document.querySelectorAll("#ToDo input")].forEach(el => el.addEventListener("input", recargarBarras))
}

function modificarBarra(nodo, valor){
    nodo.style.width = valor + "%";
    nodo.innerHTML = valor + "%"

}
function recargarBarras(){

    let contador = 0
    
    let barraEmpadronamiento = document.querySelector("#bar-Empadronamiento .progress-bar")
    let barraSalud = document.querySelector("#bar-Salud .progress-bar")
    let barraEducacion = document.querySelector("#bar-Educacion .progress-bar")

    


}