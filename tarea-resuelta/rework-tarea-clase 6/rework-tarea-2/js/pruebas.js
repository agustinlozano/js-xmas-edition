function probarEvaluarConjuntoDeSalariosAnuales() {
    let arrayDePruebas = [-3];
    console.assert(
        evaluarConjuntoDeSalariosAnuales(arrayDePruebas) === 'Los campos de salarios deben contener números naturales',
        'probarEvaluarConjuntoDeSalariosAnuales no funciono cuando se ingreso un número negativo',
    );

    arrayDePruebas = [8];
    console.assert(
        evaluarConjuntoDeSalariosAnuales(arrayDePruebas) === 'No hubo error',
        'probarEvaluarConjuntoDeSalariosAnuales no funciono con un número valido',
    );
}

probarEvaluarConjuntoDeSalariosAnuales();

