import { Application } from "pixi.js";
import { PositionObj } from "../../pixi/types";
import makeBunnyEl from "../../pixi/components/Bunny";
import { PIXI_APP_HEIGHT, PIXI_APP_WIDTH } from "../../configs";

const gameActions = (pixiApp: Application<any>, otherActions: any) => {
  //
  const _pixiApp = pixiApp;

  const handleAddBunny = (
    pos = {
      x: Math.random() * PIXI_APP_WIDTH,
      y: (Math.random() * PIXI_APP_HEIGHT) / 2,
    }
  ) => {
    const newBunny = makeBunnyEl(pos);
    if (otherActions.bunnyActions) {
      //

      const _bunnyActions = otherActions.bunnyActions(newBunny, pixiApp);
      _bunnyActions.handleShoot();
      _bunnyActions.handleRegisterClick(() => {
        _bunnyActions.handleUp();
        _bunnyActions.handleRotate(10);
        otherActions.cbs?.onAddOne && otherActions.cbs?.onAddOne();
      });
    }
    _pixiApp.stage.addChild(newBunny);

    return newBunny;
  };

  return {
    handleAddBunny,
  };
};

export default gameActions;
