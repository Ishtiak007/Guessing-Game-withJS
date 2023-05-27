let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLost = 0;

//finding elements
const lostWinMsg =document.createElement("p");
const form =document.querySelector("form");
const cardBody =document.querySelector(".card-body");
const guessingNumber =form.querySelector("#guessingNumber");
const checkButton =form.querySelector("#check");
const resultText =cardBody.querySelector(".resultText");
const remainingAttempts =cardBody.querySelector(".remainingAttempts");


form.addEventListener("submit",function(event){
    event.preventDefault();
    
    attempts++;
    if(arguments == 5){
        guessingNumber.disabled=true;
        checkButton.disabled=true;
    }if(attempts<6){
        let guessNumber = Number (guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML=`Remaining attempts : ${totalAttempts-attempts}`;
    }
    guessingNumber.value =""
});

function checkResult(guessingNumber){
    const randomNumber=getRandomNumber(5);
    if(guessingNumber == randomNumber){
        resultText.innerHTML=`You have won`;
        totalWons++;
    }else{
        resultText.innerHTML=`You have lost; Random number was :${randomNumber}`;
        totalLost++;
    }
    lostWinMsg.innerHTML=`Total wins: ${totalWons}, Total losts: ${totalLost}`;
    lostWinMsg.classList.add("large-text");
    cardBody.appendChild(lostWinMsg);
}

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit) +1;
}