function getComputerChoice(){
    const gameOptions = ['Rock','Paper','Scissors']
    //getting random value[i]
    const randomChoice = Math.floor(Math.random() * gameOptions.length);
    //getting random choice
    return gameOptions[randomChoice];
}

function playRound() {
       let playerSelection = "rock";
       let computerSelection = getComputerChoice();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let winner = ''
  if ('Computer' === 'Player'){
      return 'You Draw!'
  }
  if( playerSelection === 'Rock'){
      if(computerSelection === 'Paper'){
          winner = 'Computer'
      } else if (computerSelection === 'Scissors'){
          winner = 'Player'
      }
  }else if (playerSelection === 'Paper'){
      if (computerSelection === 'Rock'){
          winner = 'Player'
        } else if (computerSelection === 'Scissors'){
          winner = 'Computer'
        }
  }else if (playerSelection === 'Scissors'){
      if (computerSelection === 'Rock'){
          winner = 'Computer'
        } else if (computerSelection === 'paper'){
          winner = 'Player'
        }
      
    }  
  
  if (winner === 'Player'){
      console.log ("You Win! " + playerSelection + ' beats ' + computerSelection);
  }else  {
      console.log( "You loose! " + computerSelection + ' beats ' + playerSelection);
  }
  return winner
}

function game(){
    let playerScore = 0
    let computerScore = 0
    
    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound();
        if(roundWinner === 'Computer'){
          computerScore+= 1;
        }else if (roundWinner === 'Player'){
            playerScore+= 1;
        }
          
       
    }
}
game()