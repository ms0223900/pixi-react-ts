import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import game from "./game";
import { PIXI_APP_HEIGHT, PIXI_APP_WIDTH } from "./configs";

const PIXI_GAME = game({
  pixiAppOptions: {
    width: PIXI_APP_WIDTH,
    height: PIXI_APP_HEIGHT,
    background: "#aaa",
    // backgroundAlpha: 0,
  },
});

const useApp = () => {
  const effectRef = useRef(false);
  const _scoreRef = useRef(0);
  const [countDown, setCountDown] = useState(10);
  const [bunnyAmount, setAmount] = useState(0);
  const pixiGame = useRef(PIXI_GAME);
  const pixiAppRef = useRef<HTMLDivElement>(null);

  const handleAddBunny = useCallback(() => {
    // setAmount((a) => a + 1);
    pixiGame.current.gameAction.handleAddBunny({
      x: Math.random() * PIXI_APP_WIDTH,
      y: Math.random() * PIXI_APP_HEIGHT,
    });
  }, []);

  const handleAddOnePoint = useCallback(() => {
    setAmount((a) => a + 1);
  }, []);

  const handleStartGame = useCallback(() => {
    pixiGame.current.handleStartGame();
  }, []);

  const handleGameover = () => {
    // window.alert(`Your point is ${_scoreRef.current}`);
    setAmount((a) => {
      return 0;
    });
    handleStartGame();
  };

  useEffect(() => {
    if (effectRef.current) return;
    if (!pixiAppRef.current) return;

    pixiAppRef.current.appendChild(pixiGame.current.pixiApp.view as any);
    pixiGame.current.handleAddCbs({
      onAddOne: handleAddOnePoint,
      onGameover: handleGameover,
    });
    // setInterval(() => {
    //   handleAddBunny();
    // }, 10);
    // pixiGame.current
    effectRef.current = true;
  }, []);

  useEffect(() => {
    _scoreRef.current = bunnyAmount;
  }, [bunnyAmount]);

  return {
    pixiAppRef,
    countDown,
    bunnyAmount,
    handleAddBunny,
    handleStartGame,
  };
};

function App() {
  const {
    pixiAppRef,
    bunnyAmount,
    countDown,
    handleAddBunny,
    handleStartGame,
  } = useApp();

  return (
    <div className="App">
      <div ref={pixiAppRef} key={"PIXI_APP"} />
      <hr />
      <div>{`Time: ${countDown}`}</div>
      <div>
        <button onClick={handleStartGame}>Start Game</button>
      </div>
      <h2>{`Bunny Amount: ${bunnyAmount}`}</h2>
      <button onClick={handleAddBunny}>Add Bunny :)</button>
    </div>
  );
}

export default App;
