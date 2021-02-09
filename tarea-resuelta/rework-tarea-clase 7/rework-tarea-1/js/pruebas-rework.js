function validarCantidadDeIntegrantes() {
    console.assert(
        evaluarCantidadDeIntegrantes('0') === 'Este campo debe ser distinto de cero',
        'La función validar integrantes no funciono cuando se ingreso el cero',
    );

    console.assert(
        evaluarCantidadDeIntegrantes('-3') === 'El campo de integrantes debe incluir un numero positivo mayor a cero',
        'La función validar integrante no valido que el número ingresado sea un positivo mayor a cero',
    );

    console.assert(
        evaluarCantidadDeIntegrantes('9') === '',
        'La función validar integrantes no funciono con un número válido',
    )
}

function validarEdadDeLosIntegrantes() {
    console.assert(
        evaluarEdadDeLosIntegrantes('0') === 'El campo de edades debe ser distinto de cero',
        'La función validad edades no funciono cuando se ingreso el cero',
    );

    console.assert(
        evaluarEdadDeLosIntegrantes('-3') === 'El campo de edades debe incluir un numero positivo mayor a cero',
        'La función validad edades no valido que el número ingresado sea un positivo mayor a cero',
    );

    console.assert(
        evaluarEdadDeLosIntegrantes('8') === '',
        'La función validad edades no funciono con un número válido',
    );

}

validarCantidadDeIntegrantes();
//validarEdadDeLosIntegrantes();
