
let game = window.prompt('Please choose if you want to flip a coin: enter c or throw dies: enter d')

let sides; 
function play(game) {

    
    
    let index = 0;   

    if(game == c){
        sides = 2;
    }
    else {
        sides == 6;
    } 

    return Math.floor(Math.random() * sides + 1);
    
}

let games = Number(window.prompt('Choose amount of games'));
var coins = [];
var dies = [];


if(sides == 2){
let flip;
while(i < games){
flip = play();
if (flip === 1)
    coins[0]++;
else
    coins[1]++;
}
}
document.write(coins[0])
document.write(coins[1])

if(sides == 6){
while(i < games){
let r = play();
if (r === 1)
    dies[0]++;
else if (r === 2)
    dies[1]++;
else if (r === 3)
    dies[2]++;
else if (r === 4)
    dies[3]++;
else if (r === 5)
    dies[4]++;
else
    dies[5]++;
    }
}




document.write(`<p>`);
document.write(`1's: ${dies[0]}<br/>`);
document.write(`2's: ${dies[1]}<br/>`);
document.write(`3's: ${dies[2]}<br/>`);
document.write(`4's: ${dies[3]}<br/>`);
document.write(`5's: ${dies[4]}<br/>`);
document.write(`6's: ${dies[5]}<br/>`);
document.write(`total: ${dies[0]+twos+threes+fours+fives+sixes}</p>`);