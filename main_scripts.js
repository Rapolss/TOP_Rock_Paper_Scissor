let u_p = 0;
let c_p = 0;




function playRound(playerSelection, computerSelection){
    computerSelection = Math.floor(Math.random()*3);
    let playerSelection_hand = playerSelection.toLowerCase();
    let computerSelection_hand = "";
    
    switch (computerSelection){
        case 0:
            computerSelection_hand = "rock";
            break;
        case 1:
            computerSelection_hand = "paper";
            break;
        case 2:
            computerSelection_hand = "scissor";
            break;
    } 
    if (playerSelection_hand == "rock"||playerSelection_hand == "paper" || playerSelection_hand == "scissor"){
        if (computerSelection_hand == "rock" && playerSelection_hand == "scissor"){
            c_p += 1;
            console.log(`You lost!`);
            return c_p;
        } else if (computerSelection_hand == "paper" && playerSelection_hand == "rock"){
            c_p += 1;
            console.log(`You lost!`);
            return c_p;
        } else if (computerSelection_hand == "scissor" && playerSelection_hand == "paper"){
            c_p += 1;
            console.log(`You lost!`);
            return c_p;
        } else if (computerSelection_hand == playerSelection_hand){
            console.log(`It's a tie!`);
        } else{
            u_p += 1;
            console.log(`You won!`);
            return u_p;
        }
    } else{
        return "Invalid input. Please type in Rock, Paper, or Scissor. Thank you!";
    }
        
}

function game(){
    for (let i = 1; i < 6; i++){
        let input = prompt("What hand are you throwing? Paper, Rock or Scissor? ")
        input = input.toString();

        playRound(input);
    }
}

// start //

game();

let score = `Your score is ${u_p} and the computer is ${c_p}.`;

if (u_p > c_p){
    console.log ("You win the game! "+ score);
} else if(u_p < c_p){
    console.log ("You lost the game! "+ score);
} else {
    console.log ("You draw the game! "+ score);
}