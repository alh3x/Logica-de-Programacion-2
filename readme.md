para interactuar con el dom podemos utilizar el document.querySelector('taghtml');
para interactuar con botones se utilizan eventos, y estos eventos se utilizan en el html y siempre comienzan con el prefijo on...  onclick="alert('click')" como se ve pueden contener codigo js(no es lo ideal, es mejor que contengan funciones)

# __Aula 1__

Aquí tienes un resumen de los temas enseñados en esta aula:

Cargamos el proyecto con HTML y CSS para crear la estructura y el estilo de la página que usaremos durante el curso.
Aprendimos a manipular el contenido de los elementos HTML, como H1 y párrafos (p), utilizando JavaScript para cambiar dinámicamente el texto mostrado en la página.
Comprendimos la importancia de la interacción entre HTML y JavaScript para crear páginas web dinámicas e interactivas.

--------------------------------------------------------------------------------------------------------------------

# __Aula 2__

Para saber más: funciones con JavaScript

Las funciones juegan un papel central en la programación y en el desarrollo de software, permitiendo encapsular bloques de código reutilizables y ejecutables. Pueden ser definidas para realizar tareas específicas, desde cálculos simples hasta la manipulación compleja de datos. Las funciones en JavaScript pueden tener o no parámetros, así como devolver o no valores.

|Tipo de Función	|Ejemplo de Código	|Uso|
|-------------------|-------------------|---|
|Sin retorno y sin parámetros	|function saludo() { ... }	                |Ejecución de un simple bloque de código.           |
|Sin return y con parámetros	|function saludar(nombre) { ... }	        |Ejecución de un bloque de código con argumentos.   |
|Con retorno y sin parámetros	|function generarNumeroAleatorio() { ... }	|Cálculo y devolución de un importe concreto.       |
|Con retorno y con parámetros	|function sumar(a, b) { ... }	            |Cálculo y retorno basados en argumentos.           |
|Función anónima	            |let saludo = function() { ... };	        |Definición de una función sin nombre localmente.   |
|Función de flecha	            |let cuadrado = x => x * x;	                |Definición concisa de funciones cortas.            |

Su uso es esencial para crear aplicaciones dinámicas, interactivas y eficientes en JavaScript. Sin embargo, no es necesario que crees todos los tipos de funciones en este momento. Sigue las lecciones y ten en cuenta que estas variaciones existen, y a medida que surja la necesidad, profundizaremos cada vez más en la lógica y JavaScript.

 Lo que aprendimos
PRÓXIMA ACTIVIDAD

En esta aula:

Creamos una función en JavaScript que recibe 2 parámetros para generar un número aleatorio y entendimos cómo utilizar la estructura de una función para encapsular un bloque de código reutilizable.
Utilizamos la palabra clave "return" dentro de la función para devolver el valor del número aleatorio generado y creamos otra función llamada "exibirMensageInicial" que no tiene ni retorno ni parámetros.
Comprendimos la diferencia entre funciones con retorno y funciones sin retorno, y aprendimos cómo llamar e invocar la función para mostrar un mensaje inicial en la pantalla.
Vimos cómo los parámetros y los valores de retorno son importantes para la comunicación entre funciones y el resto del programa.

--------------------------------------------------------------------------------------------------------------------
# __Aula 3__

document.getElementById('reiniciar').removeAttribute('disabled'); remueve un atributo
document.querySelector('#reiniciar').setAttribute('disabled','true');//setAttribute necesita 2 parametros para agregar un atributo a un elemento dom

Para saber más: template strings
Los Template strings, o plantillas de cadenas, son características comunes en muchos lenguajes de programación y sistemas de plantillas. Estas plantillas ofrecen una manera eficiente de crear cadenas de texto donde es posible incluir marcadores o espacios reservados que posteriormente serán reemplazados por valores concretos. Estos marcadores, por lo general, se encuentran delimitados por caracteres especiales, como llaves, corchetes o signos de dólar, y desempeñan el papel de puntos de inserción para datos dinámicos.
para saber ams vea este [articulo](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)

Lo que aprendimos

En esta aula:

Aprendimos cómo crear un programa para verificar si el 'intento' ingresado es igual al número secreto definido.Utilizamos estructuras condicionales para tomar decisiones basadas en el resultado de esta comparación;
Creamos una variable para almacenar la cantidad de intentos realizados por el usuario;
Hemos visto la importancia de consultar la documentación del lenguaje y las bibliotecas utilizadas en el desarrollo del programa. La documentación es una fuente valiosa de información que nos ayuda a comprender conceptos y a utilizar correctamente las funcionalidades disponibles.

--------------------------------------------------------------------------------------------------------------------

# __Aula 4__

Contexto: Imagina que eres una persona desarrolladora que trabaja para Buscante, una importante tienda en línea de libros. Tu jefe te ha pedido que crees una función para sortear libros a los clientes. El sorteo debe hacerse de manera que todos los libros tengan la oportunidad de ser sorteados al menos una vez, y después de eso, el sorteo debe comenzar de nuevo. Recordaste la lección sobre la adición de la variable "numeroLimite" en el curso "Lógica de programación: explore funções e listas". ¿Cómo implementarás el sorteo del libro teniendo en cuenta lo que se enseñó?
function sortearLibro() {
    let libroElegido = parseInt(Math.random() * numeroLimite + 1);
    let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
    if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
    }
    // Código omitido
}

Correcta! Esta respuesta es correcta porque sigue la lógica enseñada en el curso de programación. En este código, se genera un número aleatorio para elegir un libro y luego se verifica si se ha alcanzado el límite de libros sorteados. Si es así, la lista de libros sorteados se reinicia para comenzar de nuevo el sorteo.


 09
Lo que aprendimos
PRÓXIMA ACTIVIDAD

En esta aula:

Aprendimos a mejorar el código existente, haciéndolo más eficiente y legible. En este caso, refactorizamos la función que realiza el sorteo del número secreto, haciéndola más sólida y asegurando que el número sorteado no se repita;
Creamos una cuenta en Github con un repositorio para subir nuestro código a la nube y publicamos nuestro proyecto en la plataforma Vercel, lo que permite que sea accesible desde cualquier lugar.


------------------------------------------------------------------------------------------------------------------