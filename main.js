
// Piedra papel tijera
// crear funcion que devuelva aleatoriamente "piedra", "papel", "tijera".
    // Función math.random puede funcionar para dar número aleatorio, pero mayor o oigual que 0 o menos de 1. 
    // Adaptar función para que de las múltiples opciones del juego
// Primero añadir función de eleccion del usuario
    // Añadir un prompt() donde el usuario puede añadir el número
    // Añadir función que devuelva un resultado según lo que añada el usuario
// Declarar variables de puntuación
    // Declarar 2 variables donde se añada el resultado para los dos usuarios
// Programar para jugar por rondas
    // Definir los resultados como argumentos
    // Sumar los puntos
    // Indicar el ganador
// Juego completo
    // Jugar 5 rondas
    // LLevar registro de puntuación
    // Declarar ganador final




// Fase 1
    // Función para crear piedra, papel, tijera de forma aleatoria

function getComputerChoice() { 
    const randomNumber = Math.floor(Math.random() * 3) +1 ;

    if (randomNumber === 1) { 
        return "rock";
    } else if (randomNumber === 2) { 
        return "paper";
    } else { 
        return "scissors";
    }
}
const resultComputerChoice = getComputerChoice();

// Fase 2
    // Función que devuelva una de las opciones válidas dependiendo de lo que ingrese el usuario.
    // Tiene que aparecer una opción tipo ("Introduce aquí tu elección")
    // Una vez añadido el valor y acpetado, tiene que aperecer automaticamente el valor aleatorio.

function getHumanChoice () {
    const resultHuman = prompt("Add your choice", "rock, paper, scissors")

    if (resultHuman === "rock") {
        alert(getComputerChoice());
    } else if (resultHuman === "paper") {
        alert(getComputerChoice());
    } else if (resultHuman === "scissors") {
        alert(getComputerChoice());
    } else {
        alert("only accepted rock, paper, scissors")
    }
}
