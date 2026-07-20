"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import styled, { keyframes } from "styled-components";

const GRID_SIZE = 12;
const CELL_SIZE = 24;
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const THEMES = {
  dark: {
    bg: "#0a0a0d",
    panel: "rgba(255, 255, 255, 0.03)",
    border: "rgba(255, 255, 255, 0.08)",
    canvasBg: "#0d0d12",
    text: "#ffffff",
    subtext: "#a0a0a8",
    accent: "#8f5ff0",
    food: "#ff5f9e",
    overlayBg: "rgba(10, 10, 14, 0.88)",
  },
  light: {
    bg: "#f7f7fb",
    panel: "rgba(0, 0, 0, 0.02)",
    border: "rgba(0, 0, 0, 0.08)",
    canvasBg: "#eceef5",
    text: "#1a1a1f",
    subtext: "#5a5a63",
    accent: "#6d3fc0",
    food: "#d63d80",
    overlayBg: "rgba(247, 247, 251, 0.92)",
  },
};

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 1rem;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;
  background: ${({ $t }) => $t.bg};
  transition: background 0.3s ease;
  position: relative;
`;

const ThemeToggle = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: ${({ $t }) => $t.panel};
  border: 1px solid ${({ $t }) => $t.border};
  color: ${({ $t }) => $t.text};
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ $t }) => $t.accent};
  }
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ $t }) => $t.accent};
  opacity: 0.8;
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${({ $t }) => $t.text};
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ $t }) => $t.subtext};
  max-width: 420px;
  line-height: 1.5;
`;

const GameWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  padding: 12px;
  background: ${({ $t }) => $t.panel};
  border: 1px solid ${({ $t }) => $t.border};
  backdrop-filter: blur(6px);
`;

const Canvas = styled.canvas`
  display: block;
  border-radius: 8px;
  background: ${({ $t }) => $t.canvasBg};
`;

const Score = styled.div`
  position: absolute;
  top: -1.8rem;
  right: 0.5rem;
  font-size: 0.85rem;
  color: ${({ $t }) => $t.subtext};
  letter-spacing: 0.05em;
`;

const Hint = styled.p`
  font-size: 0.8rem;
  color: ${({ $t }) => $t.subtext};
  animation: ${pulse} 2.5s ease-in-out infinite;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ $t }) => $t.overlayBg};
  color: ${({ $t }) => $t.text};
  font-size: 0.95rem;
  cursor: pointer;
  padding: 1rem;
`;

export default function ComingSoon() {
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [started, setStarted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const startedRef = useRef(false);

  // memoized so it doesn't create a new object every render
  const t = useMemo(() => (isDark ? THEMES.dark : THEMES.light), [isDark]);

  const stateRef = useRef({
    snake: [{ x: 6, y: 6 }],
    dir: { x: 1, y: 0 },
    inputQueue: [],
    food: { x: 3, y: 3 },
  });

  const randomFood = useCallback((snake) => {
    const free = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        if (!snake.some((s) => s.x === x && s.y === y)) free.push({ x, y });
      }
    }
    if (free.length === 0) return null;
    return free[Math.floor(Math.random() * free.length)];
  }, []);

  const resetGame = useCallback(() => {
    const initialSnake = [{ x: 6, y: 6 }];
    stateRef.current = {
      snake: initialSnake,
      dir: { x: 1, y: 0 },
      inputQueue: [],
      food: randomFood(initialSnake),
    };
    setScore(0);
    setGameOver(false);
    setWon(false);
    setStarted(true);
    startedRef.current = true;
  }, [randomFood]);

  // Keyboard controls — queue inputs instead of overwriting directly,
  // so two fast keypresses in one tick can't cause a 180° reversal into self
  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) return;
      e.preventDefault();

      if (e.repeat) return; // ignore held-key auto-repeat entirely

      if (!startedRef.current) {
        resetGame();
        return;
      }

      const map = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      };
      const requested = map[key];
      const q = stateRef.current.inputQueue;

      // last direction currently queued (or current live direction if queue empty)
      const last = q.length > 0 ? q[q.length - 1] : stateRef.current.dir;

      // block only direct 180° reversals, and cap queue at 2 to stay responsive
      const isReversal = requested.x === -last.x && requested.y === -last.y;
      if (!isReversal && q.length < 2) {
        q.push(requested);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [resetGame]);

  // Game loop — guarded so only one interval can ever be active,
  // even if this effect fires twice (e.g. React Strict Mode in dev)
  useEffect(() => {
    if (!started || gameOver || won) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    intervalRef.current = setInterval(() => {
      const s = stateRef.current;

      if (s.inputQueue.length > 0) {
        s.dir = s.inputQueue.shift();
      }

      const head = {
        x: s.snake[0].x + s.dir.x,
        y: s.snake[0].y + s.dir.y,
      };

      const hitWall =
        head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE;
      const hitSelf = s.snake.some((seg) => seg.x === head.x && seg.y === head.y);

      if (hitWall || hitSelf) {
        setGameOver(true);
        startedRef.current = false;
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        return;
      }

      s.snake.unshift(head);

      const ateFood = s.food && head.x === s.food.x && head.y === s.food.y;

      if (ateFood) {
        setScore((prev) => prev + 1);

        if (s.snake.length >= GRID_SIZE * GRID_SIZE) {
          setWon(true);
          startedRef.current = false;
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return;
        }

        s.food = randomFood(s.snake);
      } else {
        s.snake.pop();
      }

      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      ctx.fillStyle = t.accent;
      ctx.shadowColor = t.accent;
      ctx.shadowBlur = 6;
      s.snake.forEach((seg, i) => {
        ctx.globalAlpha = i === 0 ? 1 : 0.75;
        ctx.fillRect(seg.x * CELL_SIZE + 1, seg.y * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
      });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (s.food) {
        ctx.fillStyle = t.food;
        ctx.beginPath();
        ctx.arc(
          s.food.x * CELL_SIZE + CELL_SIZE / 2,
          s.food.y * CELL_SIZE + CELL_SIZE / 2,
          CELL_SIZE / 2.5,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }, 220);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [started, gameOver, won, randomFood, t]);

  let overlayMessage = "Click or press an arrow key to play";
  if (won) overlayMessage = `You filled the grid — score ${score}. Impressive patience.`;
  else if (gameOver) overlayMessage = `Game over — score ${score}`;

  return (
    <Container $t={t}>
      <ThemeToggle $t={t} onClick={() => setIsDark((d) => !d)}>
        {isDark ? "☀ Light" : "🌙 Dark"}
      </ThemeToggle>

      <Eyebrow $t={t}>Under Construction</Eyebrow>
      <Title $t={t}>This page is asleep 🐍</Title>
      <Subtitle $t={t}>
        Nothing broken, just quietly rebuilding behind the curtain. Come back
        soon.
      </Subtitle>

      <GameWrapper $t={t}>
        <Score $t={t}>Score: {score}</Score>
        <Canvas $t={t} ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />
        {(!started || gameOver || won) && (
          <Overlay $t={t} onClick={resetGame}>
            <span>{overlayMessage}</span>
            <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>
              use arrow keys ↑ ↓ ← →
            </span>
          </Overlay>
        )}
      </GameWrapper>
    </Container>
  );
}