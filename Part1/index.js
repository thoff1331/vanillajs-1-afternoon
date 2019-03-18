
let arr = [];

const play = val => {
  const player = document.getElementById("player");
  const element = document.getElementById(val);

  if (player.innerText === "X") {
    player.innerText = "O";
    element.innerText = "X";
    arr[val] = "X";
  } else {
    player.innerText = "X";
    element.innerText = "O";
    arr[val] = "O";
  }


 let sq1 = arr[0] 
 let sq2 = arr[1] 
 let sq3 = arr[2] 
 let sq4 = arr[3]           
 let sq5 = arr[4] 
 let sq6 = arr[5]
 let sq7 = arr[6]
 let sq8 = arr[7]
 let sq9 = arr[8]

 if (sq1 !== undefined && sq1 === sq2 && sq1 === sq3) {
    window.alert(`${sq1} is the winner`);
    return
  } else if (sq4 !== undefined && sq4 === sq5 && sq4 === sq6) {
    window.alert(`${sq4} is the winner`);
    
  } else if (sq7 !== undefined && sq7 === sq8 && sq7 === arr[8]) {
    window.alert(`${sq7} is the winner`);
    
  } else if (sq1 !== undefined && sq1 === sq4 && sq1 === sq7) {
    window.alert(`${sq1} is the winner`);
    
  } else if (sq2 !== undefined && sq2 === sq5 && sq2 === sq8) {
    window.alert(`${sq2} is the winner`);
    
  } else if (sq3 !== undefined && sq3 === sq6 && sq3 === arr[8]) {
    window.alert(`${sq3} is the winner`);
    
  } else if (sq1 !== undefined && sq1 === sq5 && sq1 === board[8]) {
    window.alert(`${sq1} is the winner`);
    
  } else if (sq7 !== undefined && sq7 === sq5 && sq7 === sq3) {
    window.alert(`${sq7} is the winner`);
    
  }

let boardFull = true
for(let i = 0; i <= 8; i++){
  if(arr[i] === undefined){
      boardFull = false
  }
}
if(boardFull === true){
  window.alert("Cat's game, there is no winner")
}
};

let  resetGameHandler = function() {
    clearEvents();
    init()
}

