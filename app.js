let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win");
        msg.innerText=`You Win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You lose");
        msg.innerText=`You lose ${compChoice} beats  your ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}

const gameDraw=(userChoice,compChoice)=>{
    // console.log("Game was draw")
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="#081b31";
}

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame=(userChoice)=>{
    console.log("User choice was",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice was",compChoice);

    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            //sci pap
            userWin = compChoice === "paper"? false : true;
        } 
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false :true;
        }
        else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
})