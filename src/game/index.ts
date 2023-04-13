import { Application, IApplicationOptions, Ticker } from "pixi.js";
import bunnyActions from "./actions/bunnyActions";
import gameActions from "./actions/gameActions";

const game = ({
  pixiAppOptions,
}: // onAddOne,
{
  pixiAppOptions: Partial<IApplicationOptions>;
  // onAddOne?: Function;
}) => {
  let cbs: Record<string, Function> = {};
  let gameTicker = new Ticker();
  const pixiApp = new Application(pixiAppOptions);
  let _gameActions = gameActions(pixiApp, {
    bunnyActions,
    cbs,
  });

  const handleClearStage = () => {
    pixiApp.stage.removeChild(...pixiApp.stage.children);
  };

  const handleGameover = () => {
    // console.log("handleGameover: ", handleGameover);
    handleClearStage();
    gameTicker.destroy();
    cbs.onGameover && cbs.onGameover();
  };

  const handleStartGame = () => {
    gameTicker = new Ticker();
    const bunnyEl = _gameActions.handleAddBunny();
    gameTicker.add(() => {
      if (bunnyEl.position.y > pixiApp.view.height || bunnyEl.position.y < 0) {
        handleGameover();
      }
    });
    gameTicker.start();
  };

  const handleAddCbs = (_cbs: Record<string, Function>) => {
    cbs = {
      ...cbs,
      ..._cbs,
    };
    _gameActions = gameActions(pixiApp, {
      bunnyActions,
      cbs,
    });
  };

  return {
    pixiApp,
    gameAction: _gameActions,
    handleStartGame,
    handleGameover,
    handleAddCbs,
  };
};

export default game;
