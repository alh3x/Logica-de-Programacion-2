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
