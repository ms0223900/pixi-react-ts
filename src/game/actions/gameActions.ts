import { Application } from "pixi.js";
import { PositionObj } from "../../pixi/types";
import makeBunnyEl from "../../pixi/components/Bunny";

const gameActions = (pixiApp: Application<any>, otherActions: any) => {
  console.log("gameActions: ", gameActions);
  const _pixiApp = pixiApp;

  const handleAddBunny = (pos: PositionObj) => {
    const newBunny = makeBunnyEl(pos);
    if (otherActions.bunnyActions) {
      // console.log("otherActions.bunnyActions: ", otherActions.bunnyActions);
      const _bunnyActions = otherActions.bunnyActions(newBunny);
      _bunnyActions.handleRegisterClick(() => _bunnyActions.handleRotate(10));
    }
    _pixiApp.stage.addChild(newBunny);

    return newBunny;
  };

  return {
    handleAddBunny,
  };
};

export default gameActions;
