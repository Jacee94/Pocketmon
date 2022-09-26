import { Sprite } from '../../classes.js';
import { offset } from '../canvas/offset.js';
import { image } from '../images/image.js';

export const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
});