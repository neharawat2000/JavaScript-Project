let buttons= document.querySelectorAll(".btn");
let resetButton= document.querySelector(".reset");
let autoplay= document.querySelector(".autoPlay");
let displayResult= document.getElementById("result");

let userTurn;
let computerTurn;
let win=0;
let tie=0;
let lose=0;
let finalResult='';

let isAutoPlay= false;
let intervalId;

autoplay.addEventListener('click',(e)=>{
    autoPlay();
});

// autoplay the game
function autoPlay(){
    if(!isAutoPlay){
        intervalId=setInterval(function(){
            document.querySelector(".autoPlay").innerHTML="Stop";
            userTurn= randomComputerChoice();
            computerTurn= randomComputerChoice();
            result();
            showResultOnScreen();
        },500);
        isAutoPlay=true;
    }
    else{
        clearInterval(intervalId, 100);
        document.querySelector(".autoPlay").innerHTML="Auto Play";
        isAutoPlay= false;
    }
}

// display result on screen
function showResultOnScreen(){
    document.getElementById("choice").innerHTML=`
    <h2>${finalResult}</h2>
    <div id="turn"><p>UserChoice <span id="user">${userTurn}</span> </p><p><span id="computer">${randomComputerChoice()}</span> ComputerChoice </p></div>`;
}

// reset the game
resetButton.addEventListener('click',()=>{
    doYouWantTOReset();
});

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='b'){
        doYouWantTOReset();
    }
});

// function for reset the game 
function resetScore(){
    tie=0;
    document.querySelector(".tie").innerHTML=tie;
    win=0;
    document.querySelector(".win").innerHTML=win;
    lose=0;
    document.querySelector(".lose").innerHTML=lose;
    userTurn="";
    computerTurn="";
    
    document.getElementById("choice").innerHTML=`
    <h2>Reset the Game</h2>
    <div id="turn"><p>UserChoice <span id="user">${userTurn}</span> </p><p><span id="computer">${computerTurn}</span> ComputerChoice </p></div>`;
}
function doYouWantTOReset(){
    let resetHtml=`Do you want to reset the game <button id="yes">Yes</button> <button id="no">No</button>`;
    document.querySelector(".resetCheck").innerHTML= resetHtml;
    let yes=document.getElementById("yes");
    let no=document.getElementById("no");
    yes.addEventListener('click',()=>{
        resetScore();
        document.querySelector(".resetCheck").innerHTML="";
    });
    no.addEventListener('click',()=>{
        document.querySelector(".resetCheck").innerHTML="";
    });
}

// button click defines what to be happend
buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        userTurn=e.target.id;
        result();
        showResultOnScreen();
    })
});



// random choice by computer
function randomComputerChoice(){
    let randomNum= Math.floor(Math.random()*3)+1;
    if(randomNum===1){
        computerTurn="✊";
    }
    else if(randomNum===2){
        computerTurn="✋";
    }
    else{
        computerTurn="✌";
    }
    return computerTurn;
}

// logic of game
function result(){

    if(computerTurn===userTurn){
        tie++;
        finalResult='Tie';
        document.querySelector(".tie").innerHTML=tie;
    }
    else  if(computerTurn==="✊" && userTurn==="✋"){
        win++;
        finalResult='You Win';
        document.querySelector(".win").innerHTML=win;
    }
    else  if(computerTurn==="✋" && userTurn==="✊"){
        lose++;
        finalResult='You Lose';
        document.querySelector(".lose").innerHTML=lose;
    }
    else  if(computerTurn==="✋" && userTurn==="✌"){
        win++;
        finalResult='You Win';
        document.querySelector(".win").innerHTML=win;
    }
    else  if(computerTurn==="✌" && userTurn==="✋"){
        lose++;
        finalResult='You Lose';
        document.querySelector(".lose").innerHTML=lose;
    }
    else  if(computerTurn==="✌" && userTurn==="✊"){
        win++;
        finalResult='You Win';
        document.querySelector(".win").innerHTML=win;
    }
    else{
        lose++;
        finalResult='You Lose';
        document.querySelector(".lose").innerHTML=lose;
    }
}