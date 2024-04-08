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

function cargarEventosCheckBox() {
    [...document.querySelectorAll("#ToDo input")].forEach(el => el.addEventListener("input", recargarBarras))
}

function modificarBarra(nodo, valor) {
    nodo.style.width = valor + "%";
    nodo.innerHTML = valor + "%"

}
function recargarBarras() {

    let barraEmpadronamiento = document.querySelector("#bar-Empadronamiento .progress-bar")
    let barraSalud = document.querySelector("#bar-Salud .progress-bar")
    let barraEducacion = document.querySelector("#bar-Educacion .progress-bar")

    //Total en empadronamiento
    calcularPorcentajes("Empadronamiento", barraEmpadronamiento)
    //Total en salud
    calcularPorcentajes("Salud", barraSalud)
    //Total en educacion
    calcularPorcentajes("Educacion", barraEducacion)

}

function calcularPorcentajes(nombre, nodo) {
    let inputs = document.querySelectorAll("div#ToDo div#" + nombre + " input")
    let totalInputs = inputs.length
    let inputsCheckeados = [...inputs].map(el => el.checked).reduce((a, b) => a + b, 0)
    let porcentaje = (inputsCheckeados / totalInputs) * 100
    modificarBarra(nodo, Number((porcentaje).toFixed(2)))

}