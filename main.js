import './style.css'

const cells = document.querySelectorAll('.cell')
const board = document.querySelector('.board')

cells.forEach(cell => cell.addEventListener('click', handleClick, { once: true }))

function handleClick(e) {
  const cell = e.target
  if (board.classList.contains('x')) { // X's turn
    cell.classList.add('x')
    board.classList.remove('x')
    board.classList.add('o')
    if (checkWins('x')) {
      alert('X Wins!')
      restart()
    }
  } else if (board.classList.contains('o')) {
    cell.classList.add('o')
    board.classList.remove('o')
    board.classList.add('x')
    if (checkWins('o')) {
      alert('O Wins!')
      restart()
    }
  }
  if (checkDraw()) {
    alert('Draw!')
    restart()
  }
}

function checkWins(player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  return winningCombinations.some(combination => combination.every(index => cells[index].classList.contains(player)))
}

function checkDraw() {
  return [...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'))
}

function restart() {
  cells.forEach(cell => cell.classList.remove('x', 'o'))
  cells.forEach(cell => cell.addEventListener('click', handleClick, { once: true }))
  board.classList.remove('x', 'o');
  board.classList.add('x');
}
