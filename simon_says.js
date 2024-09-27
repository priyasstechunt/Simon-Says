let userSeq = [];
let gameSeq = [];
let btns = ["navy", "red", "purple", "orange"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log('Game started');
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

function levelUp() {
    userSeq=[];
    level++;
    h3.innerText = `level ${level}`;

    let randomcol = Math.floor(Math.random() * 3);
    let ranidx = btns[randomcol];
    let randombtn = document.querySelector(`.${ranidx}`);
    btnFlash(randombtn);
    gameSeq.push(ranidx);
    console.log(gameSeq)
}
function btnClick(){
    let butt=this;
    btnFlash(butt);

    let usercolor=butt.getAttribute("id");
    userSeq.push(usercolor);
    //console.log(userSeq);
    checkAns(userSeq.length-1);
}

let but=document.querySelectorAll(".btn");
for(allbtn of but)
allbtn.addEventListener("click",btnClick)


function checkAns(ind){

    if(gameSeq[ind]===userSeq[ind]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML=`Game Over!your score was <b>${level}</b><br>let's play again..`
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },150)
        reset_it();
    }
}
function reset_it(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}

