//constants
const buttons = document.querySelectorAll('.btn');
const c_score_t = document.querySelector('.c_score');
const p_score_t = document.querySelector('.p_score');
const p_move_t = document.querySelector('.p_move');
const c_move_t = document.querySelector('.c_move');
const resultmessage = document.querySelector('.result_mess');
const resetbutton = document.querySelector('.reset');



let u_p = 0;
let c_p = 0;


//function

function playRound(e){
    const move = e.target;
    const types = move.dataset.typing;
    console.log(types);

    battleRound(types);

    c_score_t.innerHTML = (c_p);
    p_score_t.innerHTML = (u_p);

    endGame();


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
            resultmessage.innerHTML = (`YOU LOST THAT ROUND!`);
            return c_p;
        } else if (computerSelection_hand == "fire_ele" && playerSelection_hand == "grass_ele"){
            c_p += 1;
            resultmessage.innerHTML = (`YOU LOST THAT ROUND!`);
            return c_p;
        } else if (computerSelection_hand == "grass_ele" && playerSelection_hand == "water_ele"){
            c_p += 1;
            resultmessage.innerHTML = (`YOU LOST THAT ROUND!`);
            return c_p;
        } else if (computerSelection_hand == playerSelection_hand){
            resultmessage.innerHTML = (`ITS A TIE!`);
        } else{
            u_p += 1;
            resultmessage.innerHTML = (`YOU WON THAT ROUND!`);
            return u_p;
        }
    }
        
}

function endGame(){
    if(c_p == 5){
        resultmessage.innerHTML = (`YOU LOSE!`);
        resultmessage.style.cssText= 'color: red';
    } else if(u_p == 5){
        resultmessage.innerHTML = (`YOU WIN!`);
        resultmessage.style.cssText= 'color: green';
    }

    if(c_p == 5 || u_p == 5){
        resetbutton.style.visibility="visible";
        buttons.forEach(button => button.disabled = true);
    }
}
function resetGame(){
    resetbutton.style.visibility="hidden";
    c_p = 0;
    u_p = 0;
    buttons.forEach(button => button.disabled = false);
    resultmessage.style.cssText= 'color: white';
    resultmessage.innerHTML = (`PLAY YOUR MOVE!`);
    c_score_t.innerHTML = (c_p);
    p_score_t.innerHTML = (u_p);



}
      







// // event listeners

buttons.forEach(button => button.addEventListener('click', playRound));
resetbutton.addEventListener('click',resetGame);