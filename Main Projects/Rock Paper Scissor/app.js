let userScore=1;
let compScore=1;

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");
const cChoice=document.querySelector("#com-msg");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
        playGame(userChoice);
    });
});

const generateCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randChoice=Math.floor(Math.random()*3);
    return options[randChoice];
};

const playGame = (userChoice) => {
    console.log("user=", userChoice);
    const compChoice = generateCompChoice();
    console.log("comp=", compChoice);
    cChoice.innerText=compChoice;

    if (userChoice === compChoice) {
        msg.innerText="Tie";
        msg.style.backgroundColor="purple";
    } 
    else {
        if (userChoice === "rock") {
            if (compChoice === "scissor") {
                msg.innerText="User win";
                msg.style.backgroundColor="green";
                uScore.innerText=userScore++;
            } 
            else {
                msg.innerText="User lose";
                msg.style.backgroundColor="red";
                cScore.innerText=compScore++;
            }
        } 
        else if (userChoice === "paper") {
            if (compChoice === "rock") {
                msg.innerText="User win";
                msg.style.backgroundColor="green";
                uScore.innerText=userScore++;
            } 
            else {
                msg.innerText="User lose";
                msg.style.backgroundColor="red";
                cScore.innerText=compScore++;
            }
        } 
        else {
            if (userChoice === "scissor") {
                if (compChoice === "rock") {
                    msg.innerText="User lose";
                    msg.style.backgroundColor="red";
                    cScore.innerText=compScore++;
                } 
                else {
                    msg.innerText="User win";
                    msg.style.backgroundColor="green";
                    uScore.innerText=userScore++;
                }
            }
        }
    }
};
