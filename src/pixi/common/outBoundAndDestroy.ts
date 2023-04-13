import { Application } from "pixi.js";
import { PixiEl } from "../types";

const outBoundAndDestroy = (el: PixiEl, app: Application) => {
  const elBoundRect = el._bounds.getRectangle();
};
