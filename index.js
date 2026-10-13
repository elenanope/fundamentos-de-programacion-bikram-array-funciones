//BIKRAM ARRAY Y FUNCIONES

//1
let arrayVacio = [];

//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3
let arrayNumerosPares = [0, 2, 4, 6, 8];

//4
let arrayBidimensional = [[0, 1, 2], ["a", "b", "c"]];

//5
function suma(a, b) {
    return a + b;
}

//6
function potenciacion(a, b) {
    return a ** b; //según el enunciado era distinto, pero para que sea la potencia este símbolo es el correcto
}

//7
function separarPalabras(palabra) {
    return palabra.split(" ");
}

//8
function repetirString(palabra, numero) {
    let nuevaPalabra = "";
    for (let i = 0; i < numero; i++) {
        nuevaPalabra += palabra;
    }
    return nuevaPalabra;
}

//9
function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

//10
function ordenarArray(arrayNumeros) {
    return [...arrayNumeros].sort((a, b) => a - b);
}

//11
function obtenerPares(arrayNumeros) {
    return arrayNumeros.filter(num => num % 2 === 0);
}

//12
function pintarArray(arrayATexto) {
    let arrayAString = "[";
    for (let i = 0; i < arrayATexto.length; i++) {
        arrayAString += arrayATexto[i];
        if (i !== arrayATexto.length - 1) {
            arrayAString += ", ";
        }
    }
    arrayAString += "]";
    return arrayAString;
}

//13
function arrayMapi(ejemploArray, ejemploFuncion) {
    let arrayConFuncion = [];
    for (let elementoArray of ejemploArray) {
        arrayConFuncion.push(ejemploFuncion(elementoArray));
    }
    return arrayConFuncion;
}

//14
function eliminarDuplicados(arrayDuplicados) {
    let arrayLimpio = [];
    for (let elementoArrayDupl of arrayDuplicados) {
        if (!arrayLimpio.includes(elementoArrayDupl)) {
            arrayLimpio.push(elementoArrayDupl);
        }
    }
    return arrayLimpio;
}

//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, - 8, -9];

//16
let holaMundo = ['Hola', 'Mundo'];

//17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//19
function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}

//20
function division(numero1, numero2) {
    return numero1 / numero2;
}

//21
function esPar(numero) {
    return numero % 2 === 0;
}

//22
const arrayFunciones = [
    function suma(a, b) { return a + b; },
    function resta(a, b) { return a - b; },
    function multiplicacion(a, b) { return a * b; }
];

//23
function ordenarArray2(arrayNumeros) {
    return [...arrayNumeros].sort((a, b) => b - a);
}

//o manualmente
function ordenarArray2(arrayNumeros) {
    let arrayOrdenado = arrayNumeros.slice();
    let hayIntercambio;
    for (let i = 0; i < arrayOrdenado.length - 1; i++) {
        hayIntercambio = false;
        for (let j = 0; j < (arrayOrdenado.length - 1 - i); j++) {
            if (arrayOrdenado[j] < arrayOrdenado[j + 1]) {
                [arrayOrdenado[j], arrayOrdenado[j + 1]] = [arrayOrdenado[j + 1], arrayOrdenado[j]];
                hayIntercambio = true;
            }
        }
        if (!hayIntercambio) {
            break;
        }
    }
    return arrayOrdenado;
}


//24
function obtenerImpares(arrayNumeros) {
    let arrayImpar = [];
    for (const numero of arrayNumeros) {
        if (numero % 2 !== 0) {
            arrayImpar.push(numero);
        }
    }
    return arrayImpar;
}

//25
function sumarArray(arrayNumeros) {
    let sumaTotal = 0;
    for (const numero of arrayNumeros) {
        sumaTotal += numero;
    }
    return sumaTotal;
}

//26
function multiplicarArray(arrayNumeros) {
    let multTotal = 1;
    for (const numero of arrayNumeros) {
        multTotal *= numero;
    }
    return multTotal;
}
