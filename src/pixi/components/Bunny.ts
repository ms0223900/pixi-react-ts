import makeSprite from "../common/makeSprite";
import { PositionObj } from "../types";

const SRC = "assets/images/bunny.png"; // 圖片路徑，依照專案的圖片放置的路徑而定

const makeBunnyEl = (pos?: PositionObj) => makeSprite(SRC, { pos });

export default makeBunnyEl;
