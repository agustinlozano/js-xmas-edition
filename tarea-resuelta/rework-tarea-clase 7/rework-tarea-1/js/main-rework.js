document.querySelector("#boton-cargar-numero-integrantes").onclick = function () {
    const $numeroDeItegrantes = Number(document.querySelector("#holder-numero-de-integrantes").value);
    borrarIntegrantes();
    evaluarCantidadDeIntegrantes($numeroDeItegrantes);
}

function borrarIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante');

    $integrantes.forEach(function (integrante) {
        integrante.remove();
    });

}

function evaluarCantidadDeIntegrantes($numeroDeItegrantes) {
    let errorDeIntegrante;

    if ($numeroDeItegrantes === 0) {
        errorDeIntegrante = 'El campo de integrantes debe ser distinto de cero';
        mostrarErrorDeIntegrantesAlUsuario(errorDeIntegrante);
        resetearPrograma();
        return 'Este campo debe ser distinto de cero';
    } else if ($numeroDeItegrantes < 0) {
        errorDeIntegrante = 'El campo de integrantes debe incluir un numero positivo mayor a cero';
        mostrarErrorDeIntegrantesAlUsuario(errorDeIntegrante);
        resetearPrograma();
        return 'El campo de integrantes debe incluir un numero positivo mayor a cero';
    } else {
        generarIntegrantes($numeroDeItegrantes);
        ocultarCartelesDeError();
        return '';
    }
}

function mostrarErrorDeIntegrantesAlUsuario(errorDeIntegrante) {
    ocultarResultados();
    document.querySelector('#error').textContent = errorDeIntegrante;
    document.querySelector('#error').className = '';
}

function generarIntegrantes($numeroDeItegrantes) {
    for (let i = 1; i <= $numeroDeItegrantes; i++) {

        //esta sección crea los label/input + un *nuevo* <div> donde ponerlos
        const $nodoLabel = document.createElement('label');
        $nodoLabel.innerHTML = `Ingrese la edad del integrante n° #${i}`;

        const $nodoInput = document.createElement('input');
        $nodoInput.classList.add("edad-integrantes");
        $nodoInput.setAttribute("type", "number");

        const $div = document.createElement('div');
        $div.className = 'integrante';


        //esta sección los mete al div
        $div.appendChild($nodoLabel);
        $div.appendChild($nodoInput);

        //aquí introducimos todo lo que creamos en el <div> vacio del HTML
        const $integrantes = document.querySelector('#integrantes');
        $integrantes.appendChild($div);
    }

    //Mostrar botón
    document.querySelector('#boton-imprimir-respuestas').disabled = false;
    return false;

}

//resetear el programa con algunas funciones
document.querySelector("#resetear").onclick = function () {
    resetearPrograma();
    ocultarCartelesDeError();

    return false;
}

function resetearPrograma() {
    borrarIntegrantes();
    ocultarBotonCalculo();
    ocultarResultados();
    return false;
}

function ocultarBotonCalculo() {
    document.querySelector('#boton-imprimir-respuestas').disabled = true;
    return false;
}

function ocultarResultados() {
    document.querySelector('#respuestas').className = 'oculto';
}

function ocultarCartelesDeError() {
    document.querySelector('#error').className = 'oculto';
}

document.querySelector("#boton-imprimir-respuestas").onclick = function () {
    const $conjuntoDeEdades = document.querySelectorAll('.edad-integrantes');
    evaluarEdadDeLosIntegrantes($conjuntoDeEdades);

    return false;
}

function evaluarEdadDeLosIntegrantes($conjuntoDeEdades) {
    let errorDeEdades;
    $conjuntoDeEdades.forEach(function (edad) {
        let numeroEdad = Number(edad.value);
        if (numeroEdad === 0) {
            errorDeEdades = 'El campo de edades debe ser distinto de cero'
            mostrarErroresDeEdadesAlUsuario(errorDeEdades);
            resetearPrograma();
            return 'El campo de edades debe ser distinto de cero';
        } else if (numeroEdad < 0) {
            errorDeEdades = 'El campo de edades debe incluir un numero positivo mayor a cero'
            mostrarErroresDeEdadesAlUsuario(errorDeEdades);
            resetearPrograma();
            return 'El campo de edades debe incluir un numero positivo mayor a cero';
        } else {
            ocultarCartelesDeError();
            ejecutarPrograma($conjuntoDeEdades);
            return '';
        }
    });
}

function mostrarErroresDeEdadesAlUsuario(errorDeEdades) {
    ocultarResultados();
    document.querySelector('#error').textContent = errorDeEdades;
    document.querySelector('#error').className = '';
}

function mostrarResultados() {
    document.querySelector('#respuestas').className = '';

    return false;
}

function ejecutarPrograma($conjuntoDeEdades) {
    calcularPromedio($conjuntoDeEdades);
    calcularNumeroMayor($conjuntoDeEdades);
    calcularNumeroMenor($conjuntoDeEdades);

    mostrarResultados();
    return false;
}
