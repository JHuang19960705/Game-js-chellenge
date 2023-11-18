


// console.log(Math.floor(Math.random()*10)%6 + 1);




$(".js-dicee-1").on("click", (diceeHTML) =>{
  let randomNumber1 = Math.floor(Math.random()*10)%6 + 1;
  let number = `${randomNumber1}`;
  diceeHTML.target.src = `../Dicee/images/dice${number}.png`
});


$(".js-dicee-2").on("click", (diceeHTML) =>{
  let randomNumber1 = Math.floor(Math.random()*10)%6 + 1;
  let number = `${randomNumber1}`;
  diceeHTML.target.src = `../Dicee/images/dice${number}.png`
});