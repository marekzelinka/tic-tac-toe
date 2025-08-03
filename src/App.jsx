import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { Board } from "./components/Board.jsx";
import { History } from "./components/History.jsx";
import { PlayerO } from "./components/PlayerO.jsx";
import { PlayerX } from "./components/PlayerX.jsx";
import { Status } from "./components/Status.jsx";
import { useGameStore } from "./store.js";

export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const currentMove = useGameStore((state) => state.currentMove);
  const setCurrentMove = useGameStore((state) => state.setCurrentMove);
  const reset = useGameStore((state) => state.reset);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleJump(nextMove) {
    setCurrentMove(nextMove);
  }

  const handleRestart = () => {
    reset();
  };

  return (
    <main className="isolate flex min-h-svh flex-col justify-center bg-gray-100 px-6 py-10 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-md md:max-w-3xl">
        <div className="grid grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-6 md:grid-cols-5 md:gap-y-4">
          <header className="flex items-center justify-between md:col-span-3 md:col-start-1 md:row-end-1">
            <div className="flex items-center gap-1">
              <PlayerX className="size-8 fill-teal-400" />
              <PlayerO className="size-8 fill-amber-400" />
            </div>
            <Status xIsNext={xIsNext} squares={currentSquares} />
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20"
              aria-label="Restart game"
            >
              <ArrowPathIcon className="size-4 text-gray-400 dark:text-white/60" />
              Restart
            </button>
          </header>
          <section className="md:col-span-3 md:col-start-1">
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </section>
          <aside className="md:col-span-2 md:row-span-2 md:row-end-2 md:h-full">
            <details className="group md:hidden">
              <summary className="text-sm/6 font-semibold text-gray-900 select-none dark:text-white">
                History
              </summary>
              <div className="mt-4 h-96 overflow-y-auto rounded-xl bg-white shadow-xs ring-1 ring-gray-900/5 dark:bg-gray-950 dark:ring-white/10">
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
              <div className="mt-5 h-[472px] overflow-y-auto rounded-xl bg-white shadow-xs ring-1 ring-gray-900/5 dark:bg-gray-950 dark:ring-white/10">
                <History
                  history={history}
                  currentMove={currentMove}
                  onJump={handleJump}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
