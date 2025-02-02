let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let click_count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box) => {

    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText ="O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        click_count++;
        checkwinner ();

    });    
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


const showWinner = (winner) =>{

    msg.innerText = `Congratulatiuon Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

}

const drowGame = () =>{

    msg.innerText = `Game has drow, plese try again`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner = () => {
    for(pattern of winPatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){

        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
        }
        else if(pos1 !== pos2 && pos2 !== pos3){
            if(click_count==9){
                drowGame();
            }
        }
    }
    }
}

const resetGame = () => {

    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    click_count=0;

}

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
