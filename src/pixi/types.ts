import { AnimatedSprite, Sprite } from "pixi.js";

export interface PositionObj {
  x?: number;
  y?: number;
}

export type PixiEl = Sprite | AnimatedSprite;
