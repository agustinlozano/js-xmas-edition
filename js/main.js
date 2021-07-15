function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'El campo nombre debe tener al menos un caracter';
    }

    if (nombre.length >= 50) {
        return 'El campo nombre debe tener menos de cincuenta caracteres';
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return 'El campo nombre solo acepta letras';
    }

    return '';
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'El campo ciudad no puede estar vacio';
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return 'El campo descripcion regalo es muy largo';
    } else if (descripcionRegalo.length === 0) {
        return 'El campo descripcion regalo no puede estar vacio';
    } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return 'El campo descripcion solo puede tener numeros y letras';
    } else {
        return '';
    }
}

function validarFormulario(event) {
    event.preventDefault();
    
    borrarErrores();

    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    errorNombre = validarNombre(nombre);
    errorCiudad = validarCiudad(ciudad);
    errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';

        setTimeout(function(){
            window.location.href = '../wishlist.html';
        },5000);
    }


}

function borrarErrores() {
    const $errores = document.querySelector('#errores');
    
    if ($errores.childElementCount !== 0) {
        $errores.querySelectorAll('li').forEach(function(li){
            li.remove();
        });
    }
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadDeErrores = 0;

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            cantidadDeErrores++;
            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;

            $errores.appendChild($error);

        } else {
            $form[key].className = '';
        }

    });
    return cantidadDeErrores;
}


const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;
