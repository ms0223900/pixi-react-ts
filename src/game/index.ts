import { Application, IApplicationOptions } from "pixi.js";
import makeBunnyEl from "../pixi/components/Bunny";
import gameActions from "./actions/gameActions";
import bunnyActions from "./actions/bunnyActions";

const game = ({
  pixiAppOptions,
}: {
  pixiAppOptions: Partial<IApplicationOptions>;
}) => {
  const pixiApp = new Application(pixiAppOptions);
  const _gameActions = gameActions(pixiApp, {
    bunnyActions,
  });

  return {
    pixiApp,
    gameAction: _gameActions,
  };
};

export default game;
