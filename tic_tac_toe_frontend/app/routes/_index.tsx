import { useMemo, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { KnightIcon, QueenIcon } from "~/components/Icons";

// Ocean Professional theme tokens
const colors = {
  primary: "#2563EB", // blue-600
  amber: "#F59E0B", // amber-500
  error: "#EF4444",
  bg: "#f9fafb",
  surface: "#ffffff",
  text: "#111827",
};

export const meta: MetaFunction = () => {
  return [
    { title: "Tic Tac Toe — Ocean Professional" },
    {
      name: "description",
      content:
        "Play a modern, minimalist two‑player Tic Tac Toe game in your browser.",
    },
  ];
};

type Player = "X" | "O" | null;

function calculateWinner(squares: Player[]): Player | "Draw" | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diags
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every(Boolean)) return "Draw";
  return null;
}

export default function Index() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<Player[][]>([Array(9).fill(null)]);
  const [step, setStep] = useState(0);

  const winner = useMemo(() => calculateWinner(board), [board]);
  const currentPlayer: Player = xIsNext ? "X" : "O";

  function handleClick(index: number) {
    if (winner || board[index]) return;
    const next = board.slice();
    next[index] = currentPlayer;
    setBoard(next);
    setXIsNext(!xIsNext);
    const newHistory = history.slice(0, step + 1).concat([next]);
    setHistory(newHistory);
    setStep(newHistory.length - 1);
  }

  function resetGame() {
    const empty = Array<Player>(9).fill(null);
    setBoard(empty);
    setXIsNext(true);
    setHistory([empty]);
    setStep(0);
  }

  function jumpTo(moveIndex: number) {
    setStep(moveIndex);
    setBoard(history[moveIndex]);
    setXIsNext(moveIndex % 2 === 0);
  }

  const status =
    winner === "Draw"
      ? "It’s a draw!"
      : winner
      ? `Winner: ${winner === "X" ? "Knight" : "Queen"}`
      : `Next player: ${currentPlayer === "X" ? "Knight" : "Queen"}`;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background: colors.bg,
      }}
    >
      <div className="w-full max-w-md">
        <header className="mb-6">
          <h1
            className="text-center text-3xl font-bold tracking-tight"
            style={{ color: colors.text }}
          >
            Tic Tac Toe
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Two players. Local play. Minimal and modern.
          </p>
        </header>

        <div
          className="rounded-2xl shadow-sm ring-1 ring-gray-200 p-5 transition-colors"
          style={{ background: colors.surface }}
        >
          <div
            className="grid grid-cols-3 gap-3 mx-auto"
            aria-label="Tic Tac Toe board"
          >
            {board.map((cell, idx) => {
              const isDisabled = Boolean(cell) || Boolean(winner);
              const ariaPiece =
                cell === "X" ? "Knight" : cell === "O" ? "Queen" : "empty";
              return (
                <button
                  key={idx}
                  onClick={() => handleClick(idx)}
                  disabled={isDisabled}
                  className={[
                    "aspect-square select-none rounded-xl",
                    "flex items-center justify-center",
                    "transition-all duration-200",
                    "bg-white shadow-sm ring-1 ring-gray-200",
                    "hover:shadow-md hover:-translate-y-0.5",
                    isDisabled ? "opacity-90" : "",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  ].join(" ")}
                  aria-label={`Cell ${idx + 1} ${ariaPiece}`}
                  title={ariaPiece !== "empty" ? ariaPiece : undefined}
                >
                  {cell === "X" ? (
                    <KnightIcon className="w-8 h-8 md:w-10 md:h-10" title="Knight" />
                  ) : cell === "O" ? (
                    <QueenIcon className="w-8 h-8 md:w-10 md:h-10" title="Queen" />
                  ) : (
                    <span className="sr-only">Empty</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 space-y-4">
            <div
              className="flex items-center justify-between rounded-xl px-4 py-3"
              style={{
                background:
                  "linear-gradient(180deg, rgba(59,130,246,0.08) 0%, rgba(249,250,251,1) 100%)",
              }}
            >
              <span className="text-sm font-medium text-gray-700">Status</span>
              <span
                className="text-sm font-semibold"
                style={{
                  color:
                    winner && winner !== "Draw"
                      ? colors.primary
                      : winner === "Draw"
                      ? colors.error
                      : colors.text,
                }}
              >
                {status}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={resetGame}
                className="flex-1 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: colors.primary }}
                aria-label="Reset game"
              >
                Reset Game
              </button>
              <button
                onClick={() => jumpTo(Math.max(0, step - 1))}
                disabled={step === 0}
                className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-sm ring-1 ring-gray-200 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-40"
                style={{ color: colors.text, background: colors.surface }}
                aria-label="Undo move"
                title="Undo"
              >
                Undo
              </button>
              <button
                onClick={() => jumpTo(Math.min(history.length - 1, step + 1))}
                disabled={step >= history.length - 1}
                className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-sm ring-1 ring-gray-200 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-40"
                style={{ color: colors.text, background: colors.surface }}
                aria-label="Redo move"
                title="Redo"
              >
                Redo
              </button>
            </div>

            <div className="mt-2">
              <details className="group">
                <summary className="cursor-pointer select-none text-sm text-gray-600 transition-colors group-open:text-gray-800">
                  Move history
                </summary>
                <ul className="mt-2 max-h-40 overflow-auto rounded-lg bg-white ring-1 ring-gray-200">
                  {history.map((h, i) => {
                    const label = i === 0 ? "Start" : `Move #${i}`;
                    const active = i === step;
                    return (
                      <li key={i}>
                        <button
                          onClick={() => jumpTo(i)}
                          className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                            active
                              ? "bg-blue-50 text-blue-700"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          {label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </div>
          </div>
        </div>

        <footer className="mt-6 text-center text-xs text-gray-500">
          Ocean Professional • Blue & Amber Accents
        </footer>
      </div>
    </div>
  );
}
