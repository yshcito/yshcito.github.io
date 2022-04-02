import { Game } from "./game.js";

new Phaser.Game({
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [Game],
    physics: {
      default: 'arcade',
      arcade: {
        //gravity: { y: 300 },
        debug: false
      }
    } 
});