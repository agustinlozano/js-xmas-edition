let contadorIntegrantes = 0;

document.querySelector('#agregar-integrante').onclick = function (event) {
    crearNuevoIntegrante(contadorIntegrantes);
    mostrarEquisElemento('contenedor-total-integrantes', '');
    mostrarEquisElemento('realizar-calculos', '');

    event.preventDefault();
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
    quitarUltimoIntegrante();

    event.preventDefault();
}

function quitarUltimoIntegrante() {
    const $integrantes = document.querySelectorAll('.integrante');
    if (contadorIntegrantes > 0) {
        contadorIntegrantes = contadorIntegrantes - 1;
        $integrantes[contadorIntegrantes].remove();
    } else {
        ocultarEquisElemento('realizar-calculos', 'oculto');
        return false;
    }
}

document.querySelector('#realizar-calculos').onclick = function (event) {
    let arrayDeSalariosAnuales = [];
    let arrayDeSalariosMensuales = [];
    pushearSalariosDeLosIntegrantes(arrayDeSalariosAnuales);
    const resultadoDeValidacion = validarSalariosAnualesIngresados(arrayDeSalariosAnuales);
    if (resultadoDeValidacion === 'no hubo error') {
        calcularSalariosMensuales(arrayDeSalariosAnuales, arrayDeSalariosMensuales); 
        llamarFucionesDeCalculos(arrayDeSalariosAnuales, arrayDeSalariosMensuales);
    }
    
    event.preventDefault();
}

function pushearSalariosDeLosIntegrantes(arrayDeSalariosAnuales) {
    const $integrantes = document.querySelectorAll('.salario-integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        let evaluarElemento = $integrantes[i];
        if (evaluarElemento.value  !== '') {
            arrayDeSalariosAnuales.push(Number(evaluarElemento.value));
        }
    }
    return arrayDeSalariosAnuales;
}

function validarSalariosAnualesIngresados(arrayDeSalariosAnuales) {
    let resultadoDeValidacion = evaluarConjuntoDeSalariosAnuales(arrayDeSalariosAnuales);
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

function evaluarConjuntoDeSalariosAnuales(arrayDeSalariosAnuales) {
    let condicionFinalDeLaEvaluacion;
    for(let i = 0; i < arrayDeSalariosAnuales.length; i++) {
        let salario = arrayDeSalariosAnuales[i];
        if (!/^[0-9]+$/.test(salario)) {
            condicionFinalDeLaEvaluacion = 'Los campos de salarios deben contener números naturales';
            resetearPrograma(arrayDeSalariosAnuales);
            break;
        }else {
            condicionFinalDeLaEvaluacion = 'no hubo error';
        }
    }
    return condicionFinalDeLaEvaluacion;
}

function resetearPrograma(arrayDeSalariosAnuales) {
    reiniciarContadorDeIntegrantes();
    borrarIntegrantes();
    ocultarEquisElemento('respuestas', 'oculto');
    ocultarEquisElemento('realizar-calculos', 'oculto');
    return arrayDeSalariosAnuales;
}

function reiniciarContadorDeIntegrantes() {
    contadorIntegrantes = 0;
}

function calcularSalariosMensuales(arrayDeSalariosAnuales, arrayDeSalariosMensuales) {
    for (let i = 0; i < arrayDeSalariosAnuales.length; i++) {
        const mesesDelAño = 12;
        let elementoDeArray = arrayDeSalariosAnuales[i];
        let salarioMensual = elementoDeArray / mesesDelAño;
        arrayDeSalariosMensuales.push(Math.round(salarioMensual));
    }
    return arrayDeSalariosMensuales;
} 

function llamarFucionesDeCalculos(arrayDeSalariosAnuales, arrayDeSalariosMensuales) {
    mostrarSalarios('mayor', calcularMayorSalario(arrayDeSalariosAnuales));
    mostrarSalarios('menor', calcularMenorSalario(arrayDeSalariosAnuales));
    mostrarPromedios('salario-anual', calcularPromedio(arrayDeSalariosAnuales));
    mostrarPromedios('salario-mensual', calcularPromedio(arrayDeSalariosMensuales));
    mostrarEquisElemento('respuestas', '');
}

function mostrarSalarios(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarPromedios(tipo, valor) {
    document.querySelector(`#${tipo}-promedio`).textContent = valor;
}

//Funciones dinámicas para mostrar/ocultar

function mostrarEquisElemento (tipo, valor) {
    document.querySelector(`#${tipo}`).className = valor;
}

function ocultarEquisElemento (tipo, valor) {
    document.querySelector(`#${tipo}`).className = valor;
}