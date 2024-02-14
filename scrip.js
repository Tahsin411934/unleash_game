const btn = document.getElementById("btn");



// btn.addEventListener("click" , function(e){
//     sec_1.classList.add("hidden");
//     sec_2.classList.remove("hidden");
//     console.log(e);
// })

function play() {
    const sec_1 = document.getElementById("sec-1");
    const sec_2 = document.getElementById("sec-2");
    fun(sec_1, sec_2);
}


function fun(p1, p2) {
    p1.classList.add("hidden")
    p2.classList.remove("hidden");
}




function setBackgroundColor(e) {

    const el = document.getElementById(e);
    el.classList.add("bg-orange-400");
}
function removeBackgroundColor(e) {

    const el = document.getElementById(e);
    el.classList.remove("bg-orange-400");
}




//textarea.addEventListener("keyup",function(){
function playContinue() {
    const num = Math.round(Math.random() * (90 - 65 ) + 65);
    const latter = String.fromCharCode(num);
    document.getElementById("alp").innerHTML = latter;
    lat = latter.toLowerCase(latter);
    setBackgroundColor(lat);
    return lat;
}



//})

function handalKeyBoardButtonPress(e) {
    const pressedKey = e.key;
    console.log(pressedKey,);

    const alp = document.getElementById("alp");
    const currentAlp = alp.innerHTML;
    console.log();

    if (pressedKey === currentAlp.toLowerCase()) {
        console.log("got a point")
        const score_btn = document.getElementById("score_btn");

        let currentScore= parseInt(score_btn.innerHTML)  ;
         currentScore=currentScore+1;
         score_btn.innerHTML=currentScore;

        playContinue();
        removeBackgroundColor(currentAlp.toLowerCase());
        
    }
    else {
      
        const life_btn = document.getElementById("life_btn");
         let lifeScore= parseInt(life_btn.innerHTML)  ;
        lifeScore=lifeScore-1;
        life_btn.innerHTML=lifeScore;

         playContinue();
        removeBackgroundColor(currentAlp.toLowerCase());

        if (lifeScore===0) {
            console.log("gameover")
            gameOver();
        }
    }
    

}
document.addEventListener('keyup', handalKeyBoardButtonPress)

function gameOver(){
    const sec_1 = document.getElementById("sec-2");
    const sec_2 = document.getElementById("sec-3");
    fun(sec_1, sec_2);
    const showScore=document.getElementById("showScore");
    const score_btn = document.getElementById("score_btn");
    showScore.innerHTML=score_btn.innerHTML;


}

function playAgain(){
    const sec_1 = document.getElementById("sec-3");
    const sec_2 = document.getElementById("sec-1");
    fun(sec_1, sec_2);
   

}


