let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn"); 
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(turn0){
        box.innerHTML='O';
        turn0=false;
    }else{
        box.innerHTML='X';
        turn0=true;
    }
    box.disabled=true;
    count++;

    let isWinner=checkWinner();

    if(count==9 && !isWinner){
        gameDraw();
    }
   });
}
);

const gameDraw=()=>{
    msg.innerHTML=`Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes=()=>{
      for(let box of boxes){
        box.disabled=true;
      }
};
const enableBoxes=()=>{
      for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
      }
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let var1=boxes[pattern[0]].innerHTML;
        let var2=boxes[pattern[1]].innerHTML;
        let var3=boxes[pattern[2]].innerHTML;

        if(var1!=""&&var2!="" && var3!=""){
            if(var1===var2 && var2===var3){
                showWinner(var1);
                return true;
            }
        }
    }
}



const showWinner=(winner)=>{
      msg.innerHTML=`Congratulations,,Winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disableBoxes();
}


newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);