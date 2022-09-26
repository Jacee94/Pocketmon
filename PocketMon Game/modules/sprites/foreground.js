import { Sprite } from "../../classes.js";
import { offset } from "../canvas/offset.js";

const foregroundImage = new Image();
foregroundImage.src = './images/foregroundObjects.png';

export const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
});