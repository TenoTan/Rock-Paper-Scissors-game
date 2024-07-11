let userScore=0;
let compScore=0;

const choice= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msgContainer=document.querySelector(".msg-container");
const displayUserScore=document.querySelector("#user-score");
const displayCompScore=document.querySelector("#comp-score");
const reset=document.querySelector("#reset-btn");
const userText=document.querySelector("#user-text");
const compText=document.querySelector("#comp-text");


const genCompChoice=()=>{
    const options = ["rock", "paper", "scissor"];
    let randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
};



const drawGame=()=>{
    msg.innerText="Game is draw!";
    /* console.log("game is draw"); */
    msgContainer.style.backgroundColor="orange";
};

const showWinner=(gameWin, userChoice, compChoice)=>{
    if (gameWin){
        /* console.log("win!!!!!!!!!!!"); */
        userScore++;
        displayUserScore.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`
        msgContainer.style.backgroundColor="green";
    }
    else{
        /* console.log("lose!!!!!!!!!!"); */
        compScore++;
        displayCompScore.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msgContainer.style.backgroundColor="red";
    }
    /* winnnerColor(userScore, compScore); */
};



const playGame= (userChoice)=>{
    /* console.log("user choice = ", userChoice); */
    //genrate computer choice
    const compChoice= genCompChoice();
    /* console.log("computer choice = ", compChoice); */

    if (userChoice===compChoice){
        drawGame();
    }
    else{
        let gameWin=true;
        if (userChoice==="rock"){
            gameWin= compChoice==="paper"?false:true;
        }
        else if (userChoice==="paper"){
            gameWin= compChoice==="scissor"?false:true;
        }
        else if (userChoice==="scissor"){
            gameWin= compChoice==="rock"?false:true;
        }

        showWinner(gameWin, userChoice, compChoice);
    }
};

choice.forEach((chosen)=>{
    chosen.addEventListener("click", ()=>{
        const userChoice= chosen.getAttribute("Id")
        /* console.log(userChoice, "choice was clicked"); */
        playGame(userChoice);
    });
});

reset.addEventListener("click", ()=>{
    /* console.log("game reset"); */
    userScore=0;
    displayUserScore.innerText=userScore;
    compScore=0;
    displayCompScore.innerText=compScore;
    msg.innerText="Play your move";
    msgContainer.style.backgroundColor="rgb(1, 16, 29)";
});
