/**
 * Desafío: hora de practicar
PRÓXIMA ACTIVIDAD

Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje. ¡Así que vamos a practicar!

Desafíos:
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */

function holaMundo() {
    console.log('¡Hola, mundo!');
};
function holaPersona(nombre){
    console.log(`¡Hola, ${nombre}!`);
};
function dobleNumero(numero) {
    return numero * 2;
};
function promedio(numero1,numero2,numero3) {
    let total = numero1 + numero2 + numero3;
    return total/3;
};
function numeroMayor(numero1,numero2) {
    return a > b? a : b;
}
function potencia(numero) {
    return numero ** 2;
};
