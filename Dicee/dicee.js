


// console.log(Math.floor(Math.random()*10)%6 + 1);

let dicee1Score = 1;
let dicee2Score = 1;


$(".js-dicee-1").on("click", (diceeHTML) =>{
  dicee1Score = Math.floor(Math.random()*10)%6 + 1;
  let number = `${dicee1Score}`;
  diceeHTML.target.src = `../Dicee/images/dice${number}.png`
  result();
});


$(".js-dicee-2").on("click", (diceeHTML) =>{
  dicee2Score = Math.floor(Math.random()*10)%6 + 1;
  let number = `${dicee2Score}`;
  diceeHTML.target.src = `../Dicee/images/dice${number}.png`
  result();
});


function result() {
  if(dicee1Score > dicee2Score){
    $("h1").html("Player1 WIN!!")
  }else if(dicee1Score < dicee2Score){
    $("h1").html("Player2 WIN!!")
  }else if(dicee1Score == dicee2Score){
    $("h1").html("Draw!")
  }
}
