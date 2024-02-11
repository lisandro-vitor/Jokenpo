const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const radomNumber = Math.floor(Math.random() * 3)

    return choices[radomNumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano: " + human + "Maquina: " + machine)
    if (human === machine) {
        result.innerHTML = "Deu Empate!"

    }
    else if ((human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "papel") 
        ){
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Venceu!"

    } 
else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Você Perdeu!"
}


}
