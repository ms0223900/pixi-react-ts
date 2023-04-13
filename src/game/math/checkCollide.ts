import { Rectangle } from "pixi.js";

const checkCollide = (rect1: Rectangle, rect2: Rectangle) => {
  const isOut =
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top;

  return !isOut;
};

export default checkCollide;
