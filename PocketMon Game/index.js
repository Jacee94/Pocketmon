import { audio } from './data/audio.js';
import { collisions } from './data/collisions.js';
import { Boundary, Sprite } from './classes.js';
import { canvas } from './canvas.js';
import { background } from './modules/sprites/background.js';
import { boundaries } from './modules/gameObjs/boundaries.js';
import { player } from './modules/sprites/player.js';
import { foreground } from './modules/sprites/foreground.js';
import { battle } from './modules/gameObjs/battle.js';
import { keys } from './modules/gameObjs/keys.js';
import { animate } from './animate.js';

canvas.width = 1024;
canvas.height = 576;

animate();

let clicked = false
addEventListener('click', () => {
    if (!clicked) {
        audio.Map.play()
        clicked = true
    }
});