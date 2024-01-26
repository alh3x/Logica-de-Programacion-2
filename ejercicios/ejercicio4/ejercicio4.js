/**
 Desafíos
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

 */

let listaGenerica = [];

let lenguaajesDeProgamacion = ['JavaScript','C','C++','Kotlin','Python'];

lenguaajesDeProgamacion.push('Java', 'Ruby' , 'GoLang');

function listaConsole(arr) {
    for (let i = 0; i < arr.legth; i++){
        console.log(arr[i]);
    }
}

function listaInversa(arr) {
    for (let i = arr.length;i > 0; i--){
        console.log(arr[i-1]);
    };
}

function promedioArr(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total+=arr[i];
    }
    return total/arr.length;
}

function menorYMayor(arr) {
    let narr = arr.sort((a,b) => a-b);
    let menor = narr[0];
    let mayor = narr[arr.length-1];
    console.log(`el numero menor es ${menor} y el mayor es ${mayor}`);
}

function sumaTotal(arr) {
    let sumaTotal = 0;
    for (let i = 0; i<arr.length;i++){
        sumaTotal += arr[i];
    }
    return sumaTotal;
}

function indiceEncontrado(arr,elemento) {
    return arr.indexOf(elemento);
};

function newListaSumada(arr1,arr2) {
    let narr = [];
    if(arr1.length===arr2.length){
        for(let i=0;i<arr1.length;i++){
            let n = arr1[i]+arr2[i];
            narr.push(n);
            console.log(n)
        }
    }
    return narr;
}

function listaAlCuadrado(arr) {
    let narr = [];
    for(let i = 0 ; i<arr.length;i++){
        let cuadrado = arr[i]**2;
        narr.push(cuadrado);
    }
    return narr;
}