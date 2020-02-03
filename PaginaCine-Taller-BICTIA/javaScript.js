function inciarSesion() {
    swal("Ingresa tu usuario:", {
            content: "input",
        })
        .then((value) => {
            var cerrarSesion = document.getElementById("cerrarSesion").style.display = 'block'
            swal({
                title: "Bienvenid@",
                value,
                icon: "success",
                button: "Vale!",
            });
            document.getElementById('usuario').innerHTML = value;
            localStorage.setItem('nombreUsuario', value);
            cerrarSesion;
        });
};

var usuario = localStorage.getItem('nombreUsuario');

if (usuario != null) {
    document.getElementById("usuario").innerHTML = usuario
    document.getElementById("cerrarSesion").style.display = 'block'
} else {
    console.log("No existe el usario")
}

function cerrarSesion() {
    var usuario = localStorage.getItem('nombreUsuario');
    localStorage.removeItem('nombreUsuario')
    document.getElementById('cerrarSesion').style.display = 'none'
    document.getElementById('usuario').style.display = 'none'
    swal('Hasta la vista, baby' + ' ' + usuario);
}