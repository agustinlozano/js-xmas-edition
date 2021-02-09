function validarCantidadDeIntegrantes() {
    console.assert(
        evaluarCantidadDeIntegrantes(0) === 'El campo de integrantes debe ser distinto de cero',
        'La función validar integrantes no funciono cuando se ingreso el cero',
        
    );

    console.assert(
        evaluarCantidadDeIntegrantes(-3) === 'El campo de integrantes debe incluir un numero positivo mayor a cero',
        'La función validar integrante no valido que el número ingresado sea un positivo mayor a cero',
    );

    console.assert(
        evaluarCantidadDeIntegrantes(9) === '',
        'La función validar integrantes no funciono con un número válido',
    );
    resetearPrograma();
}

function validarEdadDeLosIntegrantes() {
    const $pseudoInput = document.createElement('input');
    $pseudoInput.value = 0;
    console.assert(
        evaluarEdadDeLosIntegrantes([$pseudoInput]) === 'El campo de edades debe ser distinto de cero',
        'La función validad edades no funciono cuando se ingreso el cero',
    );

    $pseudoInput.value = -3;
    console.assert(
        evaluarEdadDeLosIntegrantes([$pseudoInput]) === 'El campo de edades debe incluir un numero positivo mayor a cero',
        'La función validad edades no valido que el número ingresado sea un positivo mayor a cero',
    );

    $pseudoInput.value = 8;
    console.assert(
        evaluarEdadDeLosIntegrantes([$pseudoInput]) === '',
        'La función validad edades no funciono con un número válido',
    );
    resetearPrograma();
}

validarCantidadDeIntegrantes();
validarEdadDeLosIntegrantes();
