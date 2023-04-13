import { AnimatedSprite, Sprite } from "pixi.js";

function bunnyActions(el: Sprite | AnimatedSprite) {
  const bunnyEl = el;

  const handleRotate = (deg = +1) => {
    bunnyEl.angle += deg;
  };

  const handleRegisterClick = (cb: (e: any) => any) => {
    bunnyEl.interactive = true;
    bunnyEl.cursor = "pointer";
    bunnyEl.addEventListener("pointerdown", cb);
  };

  return {
    bunnyEl,
    handleRotate,
    handleRegisterClick,
  };
}

export default bunnyActions;
