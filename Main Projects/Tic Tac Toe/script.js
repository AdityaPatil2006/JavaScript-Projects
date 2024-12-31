let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".rset-btn");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container")

let turn=true;       //player

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn)
        {
            box.innerText="O";
            box.style.color="purple";
            turn=false;
        }
        else
        {
            box.innerText="X";
            box.style.color="green";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const showWinner=(winner)=>{
    msgContainer.innerText=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
            {
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);