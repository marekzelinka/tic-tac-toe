import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

export const useGameStore = create(
  persist(
    combine(
      {
        history: [Array(9).fill(null)],
        currentMove: 0,
      },
      (set, _get, store) => ({
        setHistory: (nextHistory) => {
          set((state) => ({
            history:
              typeof nextHistory === "function"
                ? nextHistory(state.history)
                : nextHistory,
          }));
        },
        setCurrentMove: (nextCurrentMove) => {
          set((state) => ({
            currentMove:
              typeof nextCurrentMove === "function"
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
          }));
        },
        reset: () => {
          set(store.getInitialState());
        },
      }),
    ),
    { name: "game-storage" },
  ),
);
