function calcularPromedio($conjuntoDeEdades) {
    
    let arrayDeNumeros = [];

    for (let i = 0; i < $conjuntoDeEdades.length; i++) {
        arrayDeNumeros.push(Number($conjuntoDeEdades[i].value));
    }

    let total = 0;

    for (i = 0; i < arrayDeNumeros.length; i++) {
        let elementoArray = arrayDeNumeros[i];
        total = total + elementoArray;
    }

    let $contenidoEm = document.querySelector("#promedio");

    valorPromedio = total / arrayDeNumeros.length;

    $contenidoEm.innerText = `El promedio de edades es: ${valorPromedio}`;

}


function calcularNumeroMayor($conjuntoDeEdades) {
    let numeroMayor;
    let comparador = 0;

    for (let i = 0; i < $conjuntoDeEdades.length; i++) {
        let numeroAnalizado = Number($conjuntoDeEdades[i].value);

        if (numeroAnalizado >= comparador) {
            numeroMayor = numeroAnalizado;
            comparador = numeroMayor;
        }
    }

    let $contenidoEm = document.querySelector("#numero-mas-grande");

    $contenidoEm.innerText = `La mayor edad es: ${numeroMayor}`;
}


function calcularNumeroMenor($conjuntoDeEdades) {
    let numeroMenor;
    let comparador = 9999999; //limite

    for (let i = 0; i < $conjuntoDeEdades.length; i++) {
        let numeroAnalizado = Number($conjuntoDeEdades[i].value);

        if (numeroAnalizado <= comparador) {
            numeroMenor = numeroAnalizado;
            comparador = numeroMenor;
        }
    }

    let $contenidoEm = document.querySelector("#numero-mas-chico");

    $contenidoEm.innerText = `La menor edad es: ${numeroMenor}`;
}
