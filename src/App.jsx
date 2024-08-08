import { ArrowPathIcon } from '@heroicons/react/20/solid'
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

  const handleRestart = () => {
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
  }

  return (
    <main className="isolate flex min-h-svh flex-col justify-center bg-gray-50 px-6 py-10 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto mt-10 w-full max-w-md md:max-w-3xl">
        <div className="grid grid-cols-1 grid-rows-1 items-start gap-8 md:grid-cols-5">
          <div className="flex items-center justify-between md:col-span-3 md:col-start-1 md:row-end-1">
            <Status xIsNext={xIsNext} squares={currentSquares} />
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20"
            >
              <ArrowPathIcon className="-ml-0.5 size-5 text-gray-400 dark:text-white/60" />
              Restart
            </button>
          </div>
          <div className="md:col-span-3 md:col-start-1">
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </div>
          <div className="md:col-span-2 md:row-span-2 md:row-end-2 md:h-full">
            <details className="group md:hidden">
              <summary className="select-none text-sm/6 font-semibold text-gray-900 dark:text-white">
                History
              </summary>
              <div className="mt-3 h-96 overflow-y-auto rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-950 dark:ring-white/10">
                <History
                  history={history}
                  currentMove={currentMove}
                  onJump={handleJump}
                />
              </div>
            </details>
            <div className="group flex h-full flex-col max-md:hidden">
              <div className="pt-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
                History
              </div>
              <div className="mt-3 flex-1 overflow-y-auto rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-950 dark:ring-white/10">
                <History
                  history={history}
                  currentMove={currentMove}
                  onJump={handleJump}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
