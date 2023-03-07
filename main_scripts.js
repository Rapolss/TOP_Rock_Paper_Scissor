//constants
const buttons = document.querySelectorAll('.btn');
const c_score_t = document.querySelector('.c_score');
const p_score_t = document.querySelector('.p_score');
const p_move_t = document.querySelector('.p_move');
const c_move_t = document.querySelector('.c_move');


let u_p = 0;
let c_p = 0;


//function

function playRound(e){
    const move = e.target;
    const types = move.dataset.typing;
    console.log(types);

    battleRound(types);


    // grass_ele
    // fire_ele
    // water_ele
}


function battleRound(playerSelection, computerSelection){
    computerSelection = Math.floor(Math.random()*3);
    let playerSelection_hand = playerSelection.toLowerCase();
    let computerSelection_hand = "";
    
    
    switch (computerSelection){
        case 0:
            computerSelection_hand = "fire_ele";
            break;
        case 1:
            computerSelection_hand = "water_ele";
            break;
        case 2:
            computerSelection_hand = "grass_ele";
            break;
    } 

    p_move_t.innerHTML = (`<img src="pictures/${playerSelection_hand}.png">`);
    c_move_t.innerHTML = (`<img src="pictures/${computerSelection_hand}.png">`);

    if (playerSelection_hand == "fire_ele"||playerSelection_hand == "water_ele" || playerSelection_hand == "grass_ele"){
        if (computerSelection_hand == "water_ele" && playerSelection_hand == "fire_ele"){
            c_p += 1;
            console.log(`You lost!`);
            return c_p;
        } else if (computerSelection_hand == "fire_ele" && playerSelection_hand == "grass_ele"){
            c_p += 1;
            console.log(`You lost!`);
            return c_p;
        } else if (computerSelection_hand == "grass_ele" && playerSelection_hand == "water_ele"){
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
    }
        

    c_score_t.innerHTML = (""+c_p);
    p_score_t.innerHTML = (""+u_p);


}

function endGame(){
    if(c_p == 5){

    } else if(u_p == 5){
        
    }
}

      







// // event listeners

buttons.forEach(button => button.addEventListener('click', playRound));