
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

// Fase 2
    // Función que devuelva una de las opciones válidas dependiendo de lo que ingrese el usuario.
    // Tiene que aparecer una opción tipo ("Introduce aquí tu elección")
    // Una vez añadido el valor y acpetado, tiene que aperecer automaticamente el valor aleatorio.

// Fase 3
    // Declarar las variables de puntuación
    // Declarar 2 variables y sumar según resultado

// Fase 4 
    // Crear una nueva función llamada playRound.
    // Definir dos parámetros para playRound: humanChoicey computerChoice. 
    // Utilizar estos dos parámetros para tomar las opciones de la persona y la computadora como argumentos.
    // Hacer que humanChoice no distinga entre mayúsculas y minúsculas para que los jugadores puedan ingresar "rock", "ROCK", "RocK" u otras variaciones.
    // Escribe el código de tu playRound función en console.log un valor de cadena que represente al ganador de la ronda, como por ejemplo: “¡Pierdes! El papel le gana a la piedra”.
    // Incrementa la variable humanScore o computerScore en función del ganador de la ronda.

// Fase 5
    // Usar bucles (for)
    // Inicializar un contador de rondas en 0.
    // Ejecutar playRound() en cada iteración.
    // Se incrementa el contador hasta llegar a 5.
        // Ejemplo
            //for (i = 0; i < 5; i++) {
            //Llamar a playRound()
            //Sumar puntos
            //Mostrar marcador
            //Cerrar el bucle después de 5 rondas
            //Mostrar el ganador final
    // Decidir ganador despúes de 5 rondas
        // Comparación entre humanScore y computerScore
        // Si humanScore > compuerScore : Has ganado.
        // Si compuerScore > humanScore  : Has perdido, gana el ordenador.

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

function getHumanChoice () {
    let resultHuman = prompt("Add your choice", "rock, paper, scissors");
    if (resultHuman === "rock" ||
        resultHuman === "paper" ||
        resultHuman === "scissors")
     {
        return resultHuman;
    } else {
        alert("Only accepted: rock, paper, scissors");
        return getHumanChoice();
    }
}

function playRound (humanChoice, computerChoice) {
    console.log(`You chose: ` + humanChoice);
    console.log(`Computer chose: ` + computerChoice);

      if (humanChoice === computerChoice) {
        console.log("Draw");
        return "Draw";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")  
        ) {
            console.log(humanChoice + " wins against " + computerChoice + ". ¡Winner!");
            return "Win";
        } else {
            console.log(computerChoice + " wins against " + humanChoice + ". ¡Loser!");
            return "Lose";
        }

    };

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
    
        if (result === "Win") {
            humanScore++; 
        } else if (result === "Lose") {
            computerScore++;
        }
        console.log(`Round ${i + 1}: Human ${humanScore} - Computer ${computerScore}`);

    }
    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);

    if (humanScore > computerScore) {
    console.log("You win the game!");
    } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
    } else {
    console.log("It's a tie!");
    }

}

playGame(); 
