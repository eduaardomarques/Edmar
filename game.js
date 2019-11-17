let target;

const humanGuessInput = document.getElementById('human-guess');
const roundNumberDisplay = document.getElementById('round-number');
const computerGuessDisplay = document.getElementById('computer-guess');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round')



guessButton.addEventListener('click', () => {
  // gerar o valor 
  target = generateTarget();
  // verifica o valor indicado pelo jogador
  const currentHumanGuess = humanGuessInput.value;
  // Gerar um valor aleatório de 'computer guess'
  const computerGuess = Math.floor(Math.random() * 10);

  // Indica o valor do computador
  computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;
  
  // Determinar o vencedor
  const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target)
  const winner = humanIsWinner ? 'human' : 'computer'

  // atualizar o valor correcto
  updateScore(winner);

  // Indicar o vencedor
  if (humanIsWinner) {
    guessButton.innerText = 'You Win!!!!!';
    guessButton.classList.toggle('winning-text')
  } else {
    computerWinsDisplay.innerText = 'Computer Wins!!!';
  }

  // winnerDisplay.innerText = humanIsWinner ? 'You win!' : 'Computer wins!';

  // Indica o score atual
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  
  // Definir o valor correcto de disable para os butões
  guessButton.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled');
});

nextRoundButton.addEventListener('click', () => {
  // aumenta o número de rondas
  advanceRound();
  // Visualizar o novo número da ronda
  roundNumberDisplay.innerText = currentRoundNumber;

  // Definir o valor correcto de disable para os butões
  nextRoundButton.setAttribute('disabled', true);
  guessButton.removeAttribute('disabled');

  // Fazer reset à caixa onde é inserido o valor
  targetNumberDisplay.innerText = '?';
  guessButton.innerText = 'Make a Guess';
  humanGuessInput.value = '';
  computerGuessDisplay.innerText = '?';
  computerWinsDisplay.innerText = '';
  guessButton.classList.remove('winning-text');
});

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});

const handleValueChange = value => {
  if (value > 0 && value <= 9) {
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
  } else if (value > 9) {
    addButton.setAttribute('disabled', true);
   
  } else if (value <= 0) {
    subtractButton.setAttribute('disabled', true);
  }
  
}



humanGuessInput.addEventListener('input', function(e) {
  handleValueChange(e.target.value);
});
