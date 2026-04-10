var timer = 60;
var score = 0;
var hitrn = 0;

function setScore(){
    score += 10;
    document.querySelector("#scorevel").textContent = score;
}
function setHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvel").textContent = hitrn;

}
function makeBubble(){
    var clutter = "";
for(var i = 1; i<=176; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#btom").innerHTML = clutter;
}
function runTimer(){
   var timerint = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#btom").innerHTML = `<h1> Game Over</h1>`;
        }
    }, 1000)
    
}

document.querySelector("#btom").addEventListener("click",function(details){
   var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn){
        setScore();
        makeBubble();
        setHit();
    }
});

makeBubble();
runTimer();
setHit();
