let numberAll = [];
let playerAns = [];
let green = $("#green").data("id");
let red = $("#red").data("id");
let yellow = $("#yellow").data("id");
let blue = $("#blue").data("id");

nextSequence();

function nextSequence() {
  let number = Math.floor(Math.random() * 10 % 4);
  numberAll.push(number);

  if(number == green){
    $(".green").css("background", "#011F3F");
    setTimeout(() => {$(".green").css("background", "green");}, 400);

  }else if(number == red){
    $(".red").css("background", "#011F3F");
    setTimeout(() => {$(".red").css("background", "red");}, 400);
  }else if(number == yellow){
    $(".yellow").css("background", "#011F3F");
    setTimeout(() => {$(".yellow").css("background", "yellow");}, 400);
  }else if(number == blue){
    $(".blue").css("background", "#011F3F");
    setTimeout(() => {$(".blue").css("background", "blue");}, 400);
  }
};

console.log(numberAll);


  $(".btn").click((e) => {
    playerAns.push(Number(e.currentTarget.dataset.id));
    console.log("你選" + playerAns);
    let lastIndex = playerAns.length - 1;
    if(playerAns[lastIndex] != numberAll[lastIndex]){
        console.log("答錯了，答案是" + numberAll );
        playerAns = [];
        numberAll = [];
        setTimeout(() => {nextSequence();}, 500);
    };
    if(numberAll.length == playerAns.length & playerAns[0] != null){
      if(playerAns[lastIndex] == numberAll[lastIndex]){
        playerAns = [];
        console.log("答對了!來!繼續拚");
        setTimeout(() => {
          nextSequence();
          console.log(numberAll);
        }, 500);
      };
    };
  });


