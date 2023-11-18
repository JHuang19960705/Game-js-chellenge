const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

// 手動
$(".js-move-button").click(playerMove => {
    let move = playerMove.currentTarget.dataset.playMove;
    playGame(move);
})
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You win.';
        } else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }
  
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }
  
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You win.';
        }
    }
  
    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }
  
  
    localStorage.setItem('score', JSON.stringify(score));
    
    updateScoreElement();
  
    document.querySelector('.js-result')
    .innerHTML = result;
  
    document.querySelector('.js-move')
    .innerHTML = `You
    <img src="img/${playerMove}-emoji.png" alt=""
    class="move-icon">
    <img src="img/${computerMove}-emoji.png" alt=""
    class="move-icon">
    Computer
    `;
  
}

//更新分數 
updateScoreElement();

function updateScoreElement(){
    $('.js-score').html(
        `Wins: ${score.wins}, Lossses: ${score.losses}, Ties: ${score.ties}`
    );
  }


// 電腦自動互玩
let isAutoplaying = false;
let intervalId; // 放入clearInterval()裡面

function autoPlay() {
  if (!isAutoplaying) {
      intervalId = setInterval(function(){
        const playMove = pickComputerMove();
        playGame(playMove);
    },1000);
    isAutoplaying = true;
  }else {
      clearInterval(intervalId);// 用clearInterval()來停止setInterval()
      isAutoplaying = false;
  }
};


// 電腦出的拳
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissors';
  }
  return computerMove;
}







