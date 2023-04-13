import { Application } from "pixi.js";
import { PositionObj } from "../types";

const checkPosInOrOutApp = (
  pos: PositionObj,
  appWidthHeight: { width: number; height: number }
): boolean => {
  if (typeof pos.x === "number" && (pos.x < 0 || pos.x > appWidthHeight.width))
    return true;
  if (typeof pos.y == "number" && (pos.y < 0 || pos.y > appWidthHeight.height))
    return true;
  return false;
};

export default checkPosInOrOutApp;
