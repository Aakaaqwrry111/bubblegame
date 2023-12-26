var timer = 60;
var score = 0;
var hitrn = 0;
var timerint; 

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score; 
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10); 
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 145; i++) {
        var num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else if(timer===0 ) {
            document.querySelector("#panel").innerHTML=`<h1>GAME OVER</h1>
            <div class="button"><span>TRY AGAIN!!</span></div>`
            
        }
        else{
            clearInterval(timerint);
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickednum = Number(details.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }else{
        document.querySelector("#panel").innerHTML=`<h1>GAME OVER</h1>
        <div class="button"><span>TRY AGAIN!!</span></div>`
    }
});


makeBubble();
runTimer();
getNewHit();
increaseScore();
