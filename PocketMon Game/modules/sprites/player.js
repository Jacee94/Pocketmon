import { Sprite } from '../../classes.js';
import { canvas } from '../../canvas.js';

const playerDownImage = new Image();
playerDownImage.src = './images/playerDown.png';

const playerUpImage = new Image();
playerUpImage.src = './images/playerUp.png';

const playerLeftImage = new Image();
playerLeftImage.src = './images/playerLeft.png';

const playerRightImage = new Image();
playerRightImage.src = './images/playerRight.png';

export const player = new Sprite({
    position: {
        x: canvas.width * 1.63,
        y: canvas.height * 1.6
    },
    image: playerDownImage,
    frames: {
        max: 4,
        hold: 10
    },
    sprites: {
        up: playerUpImage,
        down: playerDownImage,
        left: playerLeftImage,
        right: playerRightImage
    }
});

// x: canvas.width / 2 - 192 / 4 / 2,
// y: canvas.height / 2 - 68 / 2