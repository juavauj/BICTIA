//Ejercicio 1 - Cambiar titulos de las imágenes

function cambiarTitulo(id, otromensaje) {
    document.getElementById(id).innerHTML = otromensaje;
}

//Ejercicio 2 - Tablas de multiplicar

function tablaM(tablasMN, numero, numeros) {
    console.log('Tabla de multiplicar del número ' + numero + ': ' + numeros);
}

//Ejercicio 3 - Errores Código

function estaEsUnaFuncion() { //El punto y coma estaba de más
    var numero = prompt('Ingresa un número y luego ve a la consola:')
    for (var i = 0; i <= 10; i++) { //Faltaba un +
        if (numero <= 5) { //Faltaba cerrar paréntesis
            console.log("El número es menor o igual a 5")
        } else { //Faltaba cerrar con llaves "for"
            console.log("El número es mayor a 5")
        }
    }
}

estaEsUnaFuncion();