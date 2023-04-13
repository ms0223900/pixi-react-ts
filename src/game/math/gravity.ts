import { PositionObj } from "../../pixi/types";

const GRAVITY_ACC = 9.8 * 0.1;

const gravityAccecelarate = (
  pos: PositionObj,
  initVelocity: PositionObj
): {
  pos: PositionObj;
  v: PositionObj;
} => {
  const newPos = {
    x: (pos.x || 0) + (initVelocity.x || 0),
    y: (pos.y || 0) + (initVelocity.y || 0),
  };
  const newV = { ...initVelocity, y: (initVelocity.y || 0) + GRAVITY_ACC };

  return {
    pos: newPos,
    v: newV,
  };
};

export default gravityAccecelarate;
