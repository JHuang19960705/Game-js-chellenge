// 蛇有5格:　
// 蛇要動:1:自己往前動 2:鍵盤動
// 蛇碰到牆會停止遊戲：
// 隨機放一格食物
// 碰到食物會變長


// 用<canvas></canvas>來做蛇
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//一格多少單位
const unit = 20;
const row = canvas.height / unit;
const column = canvas.width / unit;
let snakeSquare = [
  {x: 80, y: 0}, {x: 60, y: 0}, {x: 40, y: 0}, {x: 20, y: 0}
];
let d = "ArrowRight";
window.addEventListener("keydown", (e) => {
  d = e.key; 
  console.log(d);
})

function draw() {
  console.log("畫蛇添足中...");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height); 

  for(let i = 0; i < snakeSquare.length; i++){
    if(i == 0){
      ctx.fillStyle = "lightblue";
    }else{
      ctx.fillStyle = "blue";
    }
    ctx.strokeStyle = "white";
    ctx.fillRect(snakeSquare[i].x, snakeSquare[i].y, unit, unit);
    ctx.strokeRect(snakeSquare[i].x, snakeSquare[i].y, unit, unit);
  };

  let snakeX = snakeSquare[0].x;
  let snakeY = snakeSquare[0].y;

  if( d == "ArrowRight"){
    snakeX += unit;
    if(snakeX > 300){
      snakeX = 0;
    };
  }else if( d == "ArrowLeft"){
    snakeX -= unit;
    if(snakeX < 0){
      snakeX = 300;
    };
  }else if( d == "ArrowUp"){
    snakeY -= unit;
    if(snakeY < 0){
      snakeY = 300;
    };
  }else if( d == "ArrowDown"){
    snakeY += unit;
    if(snakeY > 300){
      snakeY = 0;
    };
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  }
  
  snakeSquare.pop();
  snakeSquare.unshift(newHead);

  ctx.fillStyle = "yellow";
  ctx.fillRect(fruitX, fruitY, unit, unit);

  if(snakeSquare[0].x == fruitX && snakeSquare[0].y == fruitY){
    makeFruit();
    console.log("你吃到果實了...");
    snakeSquare.push({ x: fruitX, y: fruitY});
  };
}
let myGame = setInterval(draw, 100);




let fruitX = Math.floor(Math.random() * column) * unit;
let fruitY = Math.floor(Math.random() * column) * unit;
function makeFruit(){
  ctx.fillStyle = "yellow";
  ctx.fillRect(fruitX, fruitY, unit, unit);
  fruitX = Math.floor(Math.random() * column) * unit;
  fruitY = Math.floor(Math.random() * column) * unit;
}
makeFruit();

