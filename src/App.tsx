import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import game from "./game";

const PIXI_APP_WIDTH = 800;
const PIXI_APP_HEIGHT = 400;
const PIXI_GAME = game({
  pixiAppOptions: {
    width: PIXI_APP_WIDTH,
    height: PIXI_APP_HEIGHT,
    background: "#aaa",
    // backgroundAlpha: 0,
  },
});

const useApp = () => {
  const [bunnyAmount, setAmount] = useState(0);
  const pixiGame = useRef(PIXI_GAME);
  const pixiAppRef = useRef<HTMLDivElement>(null);

  const handleAddBunny = useCallback(() => {
    setAmount((a) => a + 1);
    pixiGame.current.gameAction.handleAddBunny({
      x: Math.random() * PIXI_APP_WIDTH,
      y: Math.random() * PIXI_APP_HEIGHT,
    });
  }, []);

  useEffect(() => {
    if (!pixiAppRef.current) return;

    pixiAppRef.current.appendChild(pixiGame.current.pixiApp.view as any);
    setInterval(() => {
      handleAddBunny();
    }, 10);
    // pixiGame.current
  }, []);

  return {
    pixiAppRef,
    bunnyAmount,
    handleAddBunny,
  };
};

function App() {
  const { pixiAppRef, bunnyAmount, handleAddBunny } = useApp();
  console.log("render ", "render");
  return (
    <div className="App">
      <div ref={pixiAppRef} key={"PIXI_APP"} />
      <hr />
      <h2>{`Bunny Amount: ${bunnyAmount}`}</h2>
      <button onClick={handleAddBunny}>Add Bunny :)</button>
    </div>
  );
}

export default App;
