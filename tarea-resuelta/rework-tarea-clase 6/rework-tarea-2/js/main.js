let contadorIntegrantes = 0;

document.querySelector('#agregar-integrante').onclick = function (event) {
    event.preventDefault();

    crearNuevoIntegrante(contadorIntegrantes);
    mostrarElemento('contenedor-total-integrantes');
    mostrarElemento('realizar-calculos');
}

function crearNuevoIntegrante(contadorIntegrantes) {
    contadorIntegrantes++;

    const $nodoLabel = document.createElement('label');
    $nodoLabel.innerHTML = `Salario anual integrante #${contadorIntegrantes}`;

    const $nodoInput = document.createElement('input');
    $nodoInput.classList.add("salario-integrante");
    $nodoInput.type = 'number';

    const $div = document.createElement('div');
    $div.className = 'integrante';

    $div.appendChild($nodoLabel);
    $div.appendChild($nodoInput);

    mostrarNuevoIntegrante($div);

    incrementarCantidadIntegrates();

}

function mostrarNuevoIntegrante($div) {
    const $integrantes = document.querySelector('#contenedor-total-integrantes');
    $integrantes.appendChild($div);
}

function incrementarCantidadIntegrates() {
    contadorIntegrantes++;
    return contadorIntegrantes;
}

document.querySelector('#quitar-integrante').onclick = function (event) {
    event.preventDefault();

    quitarUltimoIntegrante();
}

function quitarUltimoIntegrante() {
    const $integrantes = document.querySelectorAll('.integrante');
    if (contadorIntegrantes > 0) {
        contadorIntegrantes = contadorIntegrantes - 1;
        $integrantes[contadorIntegrantes].remove();
    }

    if (contadorIntegrantes === 0) {
        ocultarElemento('realizar-calculos');
    }

    return false;
}

document.querySelector('#realizar-calculos').onclick = function (event) {
    event.preventDefault();

    let salariosAnuales = [];
    let salariosMensuales = [];
    pushearSalariosDeLosIntegrantes(salariosAnuales);
    const resultadoDeValidacion = validarSalariosAnualesIngresados(salariosAnuales);
    if (resultadoDeValidacion === 'No hubo error') {
        calcularSalariosMensuales(salariosAnuales, salariosMensuales);
        llamarFucionesDeCalculos(salariosAnuales, salariosMensuales);
        mostrarElemento('reset');
    } else {
        mostrarElemento('reset');
    }
}

function pushearSalariosDeLosIntegrantes(salariosAnuales) {
    const $integrantes = document.querySelectorAll('.salario-integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        let evaluarElemento = $integrantes[i];
        if (evaluarElemento.value !== '') {
            salariosAnuales.push(Number(evaluarElemento.value));
        }
    }
    return salariosAnuales;
}

function validarSalariosAnualesIngresados(salariosAnuales) {
    let resultadoDeValidacion = evaluarConjuntoDeSalariosAnuales(salariosAnuales);
    document.querySelector('#error').textContent = resultadoDeValidacion;
    document.querySelector('#error').className = '';
    return resultadoDeValidacion;
}

function borrarIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante');

    $integrantes.forEach(function (integrante) {
        integrante.remove();
    });
}

function evaluarConjuntoDeSalariosAnuales(salariosAnuales) {
    let condicionFinalDeLaEvaluacion;
    for (let i = 0; i < salariosAnuales.length; i++) {
        let salario = salariosAnuales[i];
        if (!/^[0-9]+$/.test(salario)) {
            condicionFinalDeLaEvaluacion = 'Los campos de salarios deben contener números naturales';
            resetearPrograma(salariosAnuales);
            break;
        } else {
            condicionFinalDeLaEvaluacion = 'No hubo error';
        }
    }
    return condicionFinalDeLaEvaluacion;
}

function resetearPrograma(salariosAnuales) {
    reiniciarContadorDeIntegrantes();
    borrarIntegrantes();
    ocultarElemento('respuestas');
    ocultarElemento('realizar-calculos');
    return salariosAnuales;
}

function reiniciarContadorDeIntegrantes() {
    contadorIntegrantes = 0;
}

function calcularSalariosMensuales(salariosAnuales, salariosMensuales) {
    for (let i = 0; i < salariosAnuales.length; i++) {
        const mesesDelAño = 12;
        let elementoDeArray = salariosAnuales[i];
        let salarioMensual = elementoDeArray / mesesDelAño;
        salariosMensuales.push(Math.round(salarioMensual));
    }
    return salariosMensuales;
}

function llamarFucionesDeCalculos(salariosAnuales, salariosMensuales) {
    mostrarSalarios('mayor', calcularMayorSalario(salariosAnuales));
    mostrarSalarios('menor', calcularMenorSalario(salariosAnuales));
    mostrarPromedios('salario-anual', calcularPromedio(salariosAnuales));
    mostrarPromedios('salario-mensual', calcularPromedio(salariosMensuales));
    mostrarElemento('respuestas');
}

function mostrarSalarios(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarPromedios(tipo, valor) {
    document.querySelector(`#${tipo}-promedio`).textContent = valor;
}

//Funciones dinámicas para mostrar/ocultar

function mostrarElemento(idElemento) {
    document.querySelector(`#${idElemento}`).className = "";
}

function ocultarElemento(idElemento) {
    document.querySelector(`#${idElemento}`).className = "oculto";
}

document.querySelector('#reset').onclick = function (event) {
    event.preventDefault();

    resetearPrograma();
    ocultarElemento('error');
}
