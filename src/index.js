import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import wattson from './assets/wattson.png'

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('logo', wattson);
    }
      
    create ()
    {
        const logo = this.add.image(800, 150, 'logo');
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 3000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1500,
    height: 1000,
    scene: MyGame
};

const game = new Phaser.Game(config);
