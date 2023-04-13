import { Sprite } from "pixi.js";
import { PositionObj } from "../types";

const makeSprite = (
  spriteSrc = "",
  options = {
    pos: { x: 0, y: 0 },
  } as {
    pos?: PositionObj;
  }
) => {
  const el = Sprite.from(spriteSrc);
  el.position.set(options.pos?.x, options.pos?.y);
  el.anchor.set(0.5);

  return el;
};

export default makeSprite;
