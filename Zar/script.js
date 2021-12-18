const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const hold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const player0Div = document.querySelector(".player--0");
const player1Div = document.querySelector(".player--1");


let points1 = 0;
let points2 = 0;
let allPoints1 = 0;
let allPoints2 = 0;
let nextPlayer = true;

let dices = {
    1 : "dice1.jpg",
    2 : "dice2.jpg",
    3 : "dice3.jpg",
    4 : "dice4.jpg",
    5 : "dice5.jpg",
    6 : "dice6.jpg",
}
let x = 1;

rollDice.addEventListener("click", ()=>{
    let randomNum =  Math.floor(Math.random() * 6 + 1) 
    
    if(nextPlayer){
        if(randomNum === 1){
            dice.src = dices[randomNum]
            points1 = 0;
            current0.innerHTML = 0;
            nextPlayer = false;
            player0Div.style.backgroundColor = "transparent"
            player1Div.style.backgroundColor = "rgba(255, 255, 255, 0.4)"

        }else{
            
            let anim =  setInterval(() => {
                if(x !== 40){
                    let randomNum2 =  Math.floor(Math.random() * 6 + 1);
                    dice.src = dices[randomNum2]
                    x++;
                }else{
                    clearInterval(anim)
                     points1 += randomNum;
                     current0.innerHTML = points1;
                     dice.src = dices[randomNum]
                     x = 1;
                }
            });
           
           
        }
    }else{
        if(randomNum === 1){
            dice.src = dices[randomNum]
            points2 = 0;
            current1.innerHTML = points2;
            nextPlayer = true;
            player1Div.style.backgroundColor = "transparent"
            player0Div.style.backgroundColor = "rgba(255, 255, 255, 0.4)"

        }else{
            let anim2 =  setInterval(() => {
                if(x !== 40){
                    let randomNum3 =  Math.floor(Math.random() * 6 + 1);
                    dice.src = dices[randomNum3]
                    x++;
                }else{
                    clearInterval(anim2)
                     points2 += randomNum;
                     current1.innerHTML = points2;
                     dice.src = dices[randomNum]
                     x = 1;
                }
            });
            
        }
    }
    
})

hold.addEventListener("click", ()=>{

     if(nextPlayer){
        allPoints1+= points1;
        points1 = 0;
        current0.innerHTML = points1;
        score0.innerHTML = allPoints1;
        nextPlayer = !nextPlayer;
        player0Div.style.backgroundColor = "transparent"
        player1Div.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
        if(allPoints1 >= 40){
            player1Div.style.backgroundColor = "black"
            alert("Player 1 win")
        }
     }else{
        allPoints2+= points2;
        points2 = 0;
        current1.innerHTML = points2;
        score1.innerHTML = allPoints2;
        nextPlayer = !nextPlayer;
        player1Div.style.backgroundColor = "transparent"
        player0Div.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
        if(allPoints2 >= 40){
            player0Div.style.backgroundColor = "black"
            alert("Player 2 win")
        }
     }
  
})

newGame.addEventListener("click",()=>{
     points1 = 0;
     points2 = 0;
     allPoints1 = 0;
     allPoints2 = 0;
     nextPlayer = true;
     current1.innerHTML = 0;
     score1.innerHTML = 0;
     current0.innerHTML = 0;
     score0.innerHTML = 0;
     player1Div.style.backgroundColor = "transparent"
     player0Div.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
     dice.src = dices[1]
})

