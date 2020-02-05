let a = 2;
let b = 2;

function suma(a, b) {
    console.log(a + b);
}

function mult(a, b) {
    console.log(a * b);
}

function resta(a, b) {
    console.log(a - b);
}

function divi(a, b) {
    console.log(a / b);
}

function result(a, b) {
    suma(a, b);
    mult(a, b);
    resta(a, b);
    divi(a, b);
}


// switch(numero) {
//     case sum:
//         suma(a, b);
//         break;
// }

// var attemps = 0;
// function getUser(){
//     var user = localStorage.getItem('user');
//     attemps += 1;
//     if (attemps == 5){
//         console.log('no se puede obtener el user');
// } else{
//     return user ? user : getUser();
// }
// }


// Números primos del 0 al 10

for (var num = 0; num <= 10; num++) {
    if (num * num++ !== num) {
        console.log(num);
    }
}

// var s = 'Hola mundoffrhfhfhfh';
// var l = s.length;

// for (var numb = l; numb >= 0; numb--) {
//     console.log(s[numb]);
// }