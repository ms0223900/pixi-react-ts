import { AnimatedSprite, Application, Sprite, Ticker } from "pixi.js";
import { PositionObj } from "../../pixi/types";
import gravityAccecelarate from "../math/gravity";
import checkCollide from "../math/checkCollide";

const SHOOT_INIT_VELOCITY: PositionObj = { x: -2, y: -2 };

function bunnyActions(el: Sprite | AnimatedSprite, app: Application) {
  const bunnyEl = el;
  let elVelocity = { x: 0, y: 0 } as PositionObj;

  const handleRotate = (deg = +1) => {
    bunnyEl.angle += deg;
  };

  const handleShoot = (initV = SHOOT_INIT_VELOCITY as PositionObj) => {
    elVelocity = { ...initV };
  };

  const handleRegisterClick = (cb: (e: any) => any) => {
    bunnyEl.interactive = true;
    bunnyEl.cursor = "pointer";
    bunnyEl.addEventListener("pointerdown", cb);
  };

  const initEl = () => {
    const ticker = new Ticker();
    ticker.add(() => {
      const { v, pos } = gravityAccecelarate(bunnyEl.position, elVelocity);
      bunnyEl.position.set(pos.x, pos.y);
      elVelocity = v;

      const isCollide = checkCollide(el.getBounds(), {
        top: 0,
        left: 0,
        right: app.view.width,
        bottom: app.view.height,
      } as any);
      // console.log("el._bounds.getRectangle(): ", el._bounds.getRectangle());
      // console.log("isCollide: ", isCollide);
      if (!isCollide) {
        // el.
        elVelocity.y = (elVelocity.y || 1) * -1 * 0.8;
      }
    });
    ticker.start();
    return ticker;
  };
  initEl();

  return {
    bunnyEl,
    handleRotate,
    handleShoot,
    handleRegisterClick,
  };
}

export default bunnyActions;
