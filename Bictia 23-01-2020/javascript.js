 function cambiarTitulo(id, otromensaje) {
     document.getElementById(id).innerHTML = otromensaje;
 }



 function cambiarParrafos(arreglo) {

     for (var i = 0; i < arreglo.length; i++) {
         if (arreglo[i] == 'parrafo1') {
             var contenido = 'Sí, este es mi parrafo 1'
         } else {
             var contenido = 'Este es el parrafo dos...'
         }

         document.getElementById(arreglo[i]).innerHTML = contenido
     }
 }

 function cambiarNumeros(camN) {
     for (var i = 1; i <= 10; i++) {
         console.log("El número es: " + i)
     }
 }




 /*function cambiarContenido(id, contenido, demas, unejemplomas) {
     if (document.getElementById(id).innerHTML) {
         console.log(contenido + ' ' + demas + unejemplomas)
     }
 }*/