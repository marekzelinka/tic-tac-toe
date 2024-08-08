import { useState } from 'react'
import { Board } from './components/Board.jsx'
import { History } from './components/History.jsx'
import { Status } from './components/Status.jsx'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)

  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  const handleJump = (nextMove) => {
    setCurrentMove(nextMove)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Status xIsNext={xIsNext} squares={currentSquares} />
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <History
          history={history}
          currentMove={currentMove}
          onJump={handleJump}
        />
      </div>
    </div>
  )
}
