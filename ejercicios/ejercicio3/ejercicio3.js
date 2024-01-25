/**
 * Desafíos:
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
 */

function indiceMasaCorporal(altura, peso) {
    return peso/(altura**2);
}
function factorial(numero) {
    let contador = 1;
    let factorial = 1;
    while(contador <= numero){
        factorial *= contador;
        contador++ 
    }
    return factorial;
}
function coversorUsdToArg(dolares) {
    const valorArg = 823.05;
    return dolares * valorArg;
}
function rectangular(alto, ancho) {
    let area = alto * ancho;
    let perimetro = (alto+ancho)*2;
    alert(`el area de la sala es ${area}m2 y el perimetor es ${perimetro}m`);
}
function circular(radio) {
    let pi = 3.14
    let area = pi*(radio**2) ;
    let perimetro = 2*pi*radio;
    alert(`el area de la sala es ${area}m2 y el perimetor es ${perimetro}m`);
}
function tabla(numero) {
    for(let i = 1; i<=12;i++){
        let resultado = i*numero;
        console.log(`${i} * ${numero} es igual a ${resultado}`);
    }
}