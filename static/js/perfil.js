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
    [...document.querySelectorAll(".card input")].forEach(el => el.addEventListener("input", cargarTexto));
    [...document.querySelectorAll(".card input")].forEach(el => el.addEventListener("input", desbloquearSiguienteEtapa));
    [...document.querySelectorAll(".card input")].forEach(el => el.addEventListener("input", recargarBarras));

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
    let inputs = document.querySelectorAll(".card div#" + nombre + " input")
    let totalInputs = inputs.length
    let inputsCheckeados = [...inputs].map(el => el.checked).reduce((a, b) => a + b, 0)
    let porcentaje = (inputsCheckeados / totalInputs) * 100
    modificarBarra(nodo, Number((porcentaje).toFixed(2)))

}
function cargarTexto(e) {
    let marcoParaTexto1 = document.querySelector("div#texto")
    let mapTextos = getTextos()
    let idNodo = e.target.id

    if (!e.target.checked) {
        let nodo = idNodo.split("paso")
        marcoParaTexto1.innerHTML = (nodo[1] - 1 == 0)
            ? mapTextos["inicio"]
            : mapTextos[nodo[0] + "paso" + (nodo[1] - 1)]
    } else {
        let texto = mapTextos[idNodo]
        marcoParaTexto1.innerHTML = texto
    }

    let segundoTexto = getSegundoTextos()
    let marcoParaTexto2 = document.querySelector("div#links")
    if (!e.target.checked) {
        let nodo = idNodo.split("paso")
        marcoParaTexto2.innerHTML = (nodo[1] - 1 == 0)
            ? segundoTexto["inicio"]
            : segundoTexto[nodo[0] + "paso" + (nodo[1] - 1)]
    } else {
        let texto = segundoTexto[idNodo]
        marcoParaTexto2.innerHTML = texto
    }
}
function getTextos() {
    return {
        "inicio": "Cada ayuntamiento puede tener requisitos específicos, puede consultar los datos del Ayuntamiento del municipio en que reside en",
        "empadronamiento-paso1": "Selecciona tu municipio para acceder a realizar la reserva",
        "empadronamiento-paso2": "¿Para cuándo tendrás la cita? Te ayudaremos a recordarla",
        "empadronamiento-paso3": "¡MUY BIEN! YA TIENES EL PADRÓN",
    }
}
function getSegundoTextos() {
    return {
        "inicio": "<select class='form-select p-1' onChange='cambioTextoPadron()'> <option value = 1>Bilbao</option> <option value = 2>Getxo</option>  <option value = 3>Barakaldo</option> <option value = 4>Amorebieta</option> <option value = 5>Arrigorriaga</option></select><div class='text-center' id='textopadron'><a href='https://www.bilbao.eus/cs/Satellite?c=BIO_Tramite_FA&categoria=temas&cid=1279100602114&language=es&menuAcordeonActivo=9&pageid=1279127425574&pagename=Bilbaonet%2FBIO_Tramite_FA%2FBIO_TramiteSrvTram&perfil=ciudadano&pestana=2&selec=1&idProc=1279101110710'>Documentos ayuntamiento</a></div>",
        "empadronamiento-paso1": " <select class='form-select p-1' onChange='cambioTextoCita()'> <option value = 1>Bilbao</option> <option value = 2>Getxo</option>  <option value = 3>Barakaldo</option> <option value = 4>Amorebieta</option> <option value = 5>Arrigorriaga</option></select><div class='text-center'  id='textopadron'><a href='https://www.bilbao.eus/cs/Satellite?c=Page&categoria=temas&cid=1279127425574&language=es&menuAcordeonActivo=9&pageid=1279127425574&pagename=Bilbaonet%2FPage%2FBIO_ListadoServiciosSrvTram&perfil=ciudadano&selec=1'>Cita ayuntamiento</a>`</div>",
        "empadronamiento-paso2": "<input class='form-control' type='date'>",
        "empadronamiento-paso3": "",
    }
}
function getlinksPadron() {
    return {
        "1": "https://www.bilbao.eus/cs/Satellite?c=BIO_Tramite_FA&categoria=temas&cid=1279100602114&language=es&menuAcordeonActivo=9&pageid=1279127425574&pagename=Bilbaonet%2FBIO_Tramite_FA%2FBIO_TramiteSrvTram&perfil=ciudadano&pestana=2&selec=1&idProc=1279101110710",
        "2": "https://eudala.getxo.eus/SolucionUnica/Autentificacion/EGestionInicial.aspx",
        "3": "https://www.barakaldo.eus/OficinaVirtualBarakaldo/tramites/acceso.do?id=1",
        "4": "https://izapideliburua.amorebieta-etxano.eus/es/258",
        "5": "https://ayuntacity.es/cita-ayuntamiento-de-arrigorriaga/#:~:text=Solicite%20cita%20previa%20en%20el%20ayuntamiento%20de%20Arrigorriaga,online%3A%20Sede%20electr%C3%B3nica%20del%20Ayto%20P%C3%A1gina%20web%3A%20http%3A%2F%2Fwww.arrigorriaga.net",
    }
}
function getlinksCita() {
    return {
        "1": "https://www.bilbao.eus/cs/Satellite?c=Page&categoria=temas&cid=1279127425574&language=es&menuAcordeonActivo=9&pageid=1279127425574&pagename=Bilbaonet%2FPage%2FBIO_ListadoServiciosSrvTram&perfil=ciudadano&selec=1",
        "2": "https://getxo.eus/es/tramites/volantes",
        "3": "https://www.barakaldo.eus/OficinaVirtualBarakaldo/tramites/acceso.do?id=1",
        "4": "https://www.google.es/maps/place/Amorebieta+Etxanoko+Udala/@43.2201395,-2.7323911,18z/data=!4m6!3m5!1s0xd4e33b7929fbce3:0x7ea614397db160db!8m2!3d43.220276!4d-2.7322106!16s%2Fg%2F11xy_vv8f?entry=ttu",
        "5": "https://ayuntacity.es/cita-ayuntamiento-de-arrigorriaga/#:~:text=Solicite%20cita%20previa%20en%20el%20ayuntamiento%20de%20Arrigorriaga,online%3A%20Sede%20electr%C3%B3nica%20del%20Ayto%20P%C3%A1gina%20web%3A%20http%3A%2F%2Fwww.arrigorriaga.net",
    }
}
function cambioTextoPadron() {
    document.querySelector("div#textopadron").innerHTML = `<a href='${getlinksPadron()[document.querySelector("select").value]}'>Documentos ayuntamiento</a>`
}
function cambioTextoCita() {
    document.querySelector("div#textocita").innerHTML = `<a href='${getlinksCita()[document.querySelector("select").value]}'>Cita</a>`
}
function desbloquearSiguienteEtapa(e) {
    let nodo = e.target
    //comportamiento normal (desbloquear siguiente en lista)
    //si activas, le quita el disable al nodo siguiente
    if (nodo.checked) {
        if (nodo.dataset.siguiente != undefined) {
            let nodoSiguiente = document.querySelector("#" + nodo.dataset.siguiente)
            if (nodoSiguiente != null) {
                nodoSiguiente.toggleAttribute("disabled")
                nodoSiguiente.checked = false
            }
        }
    }
    //si desactivas le añade el disable y le queta el check a todos los nodos siguientes
    else {
        while (true) {
            if (nodo.dataset.siguiente != undefined) {
                let nodoSiguiente = document.querySelector("#" + nodo.dataset.siguiente)
                if (nodoSiguiente != null) {
                    nodoSiguiente.setAttribute("disabled", "disabled")
                    nodoSiguiente.checked = false
                    nodo = nodoSiguiente
                }
                else {
                    break
                }
            }
            else {
                break
            }
        }
    }
}