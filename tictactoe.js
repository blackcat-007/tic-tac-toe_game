

//accesing elements
let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let newgamebtn= document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
 
//declaring variable
let turnO= true;//if true then O otherwise X
let count =0 ;
//let start=true;
//winning pattern
const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();//calling function 
    msgcontainer.classList.add("hide");
    //start=true;
}
resetbtn.addEventListener("click",resetGame);

//while(start){
    //start=false;
    //count=0;
//accesing each boxes
boxes.forEach((box)=>{
    //adding events on each selectes boxes
    box.addEventListener("click",()=>{
    //console.log("box have clicked");
    //if true then O otherwise X
    if(turnO){
        //accesing box innertext
        box.innerText="O";
        box.classList.remove("cross");
        box.classList.add("circle");
        turnO=false;
    }
    else{
    box.innerText="X";//accesing box innertext
    box.classList.remove("circle");
    box.classList.add("cross");
    turnO=true;
    }
    box.disabled=true;
    count++;
    checkWinner(count);//calling for check winner 
});
});


//ending the game disabling all boxes to clicked after getting the result 
const endGame = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
//enable all boxes if the reset or start buton clicked
const enableBoxes = () => {
    for(let box of boxes){
        box.innerText="";
        box.disabled = false;
    }
};
//function for showwinner/result  on the msg container 
const showResult =(winner)=>{
    if(winner!="draw"){
    msg.innerText="Congratulations!! "+winner+",you wins the game";
    msgcontainer.classList.remove("hide");
    endGame();
    newgamebtn.addEventListener("click",resetGame);
    }
    else {
        msg.innerText="It is a draw!!";
    msgcontainer.classList.remove("hide");
    endGame();
    newgamebtn.addEventListener("click",resetGame);
    }
};


//function for checking for winner
const checkWinner=(count)=>{
    
    for(pattern of winPatterns){
         let pos1val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
         let pos3val=boxes[pattern[2]].innerText;
         //checking for if the spaces are empty 
         if(pos1val!=""&& pos2val!=""&& pos3val!=""){
            //checking if the innertext of selected boxes are same or not
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val);
                //function for show winner 
                showResult(pos1val);
            

            }
            else if(count==9 && pos1val!=pos2val&&pos2val
                !=pos3val){
                
                showResult("draw");

            }
          }
         }
        };
       