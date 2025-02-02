let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user_score");
const compScorepara = document.querySelector("#com_score");


const genComChoice =() => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() *3);
    return options[randidx];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText =`you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
      const compChoice = genComChoice();

      if(userChoice === compChoice){
        msg.innerText ="Game Was Drow, Play Again!";
        msg.style.backgroundColor = "#081b31";
        
      }
      else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false:true;
        }
        else{
            userWin = compChoice === "rock" ?false:true;
        }

        showWinner(userWin, userChoice, compChoice);
      }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}
)