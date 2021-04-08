function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El campo nombre debe tener al menos un caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'El campo nombre debe tener menos de cincuenta caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre('.,..,') === 'El campo nombre solo acepta letras',
      'Validar nombre no valido que el nombre sea solo de letras',
  );

  console.assert(
      validarNombre('Agustin') === '',
      'Validar nombre no funciono con un nombre valido',
  );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacio',
        'Validar ciudad no funciono con un espacio vacio',
    );

    console.assert(
        validarCiudad('Santa Fe') === '',
        'Validar ciudad no funciono con una ciudad valida',
    );
}

function probarValidarRegalo() {
    console.assert(
        validarDescripcionRegalo('dkjshdfjhkjhskjfdhkjfshfkjsdhffkjdsagkjbvhfahbjahfjdhfjhsdjkfbjdhnbjvbhjdfvhdfbvgjdfbvhbdhfvbdhjvbdhzfjbvxcmnbv') === 'El campo descripcion regalo es muy largo',
        'Validar descripcion regalo no valido que se ingresaran menos de 100 caracteres',
    );

    console.assert(
        validarDescripcionRegalo('') === 'El campo descripcion regalo no puede estar vacio',
        'Validar descripcion regalo no valido que el campo no este vacio',
    );

    console.assert(
        validarDescripcionRegalo(',.,.') === 'El campo descripcion solo puede tener numeros y letras',
        'Validar descripcion regalo no valido que solo se ingresaran numeros o letras',
    );

    console.assert(
        validarDescripcionRegalo('queridosanta') === '',
        'Validar descripcion regalo no funciono con una descripcion valida',
    );
}
probarValidarNombre();
probarValidarCiudad();
probarValidarRegalo();
