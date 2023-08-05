import Phaser from 'phaser';

// Import stylesheets
import './style.css';

/* ----------------------------------- START SCENE --------------------------------- */
class BootLevel extends Phaser.Scene {
  constructor() {
    super({ key: 'BootLevel' });
  }

  preload() {
    // CHANGE BASE URL!!!!
    this.add.text(20, 20, 'Boot Sequence Initiated.');
    this.load.baseURL =
      'https://sampow360.github.io/fireblast-engine/';
    this.load.bitmapFont({
      key: 'METALOVANIA',
      textureURL: 'static/assets/font/METALOVANIA/METALOVANIA.png',
      fontDataURL: 'static/assets/font/METALOVANIA/METALOVANIA.xml',
    });
    this.load.image('logo', 'static/assets/logoV3.png');
    this.load.image('splashscreen', 'static/assets/SplashscreenV2.png');
  }

  create() {
    this.scene.start('SplashLevel');
  }
}

/* ----------------------------------- START SCENE --------------------------------- */
class SplashLevel extends Phaser.Scene {
  constructor() {
    super({ key: 'SplashLevel' });
  }

  preload() {
    const splashScreen = this.add.image(200, 200, 'splashscreen');
    splashScreen.setScale(2);

    const logo = this.add.image(200, 100, 'logo');
    logo.setScale(0.5);
    this.logo = logo;

    const text1 = this.add.bitmapText(-300, 200, 'METALOVANIA', 'Sam Drake', 32);
    this.companyLine1 = text1;
    const text2 = this.add.bitmapText(-300, 230, 'METALOVANIA', '  Studios', 32);
    this.companyLine2 = text2;

    const loading = this.add.text(180, 300, ['Loading...'], {
      fontFamily: 'Arial',
      fontSize: '12px',
      color: 'crimson',
      align: 'center',
    });

    /* START PRELOAD ITEMS */
this.load.baseURL = "https://sampow360.github.io/fireblast-dungeondive/"
this.load.image("S_Default"), ("static/assets/S_Sprites/S_Default.png");
this.load.image("Chad_Default"), ("static/assets/Boss_Sprites/Chad_Default.png");
this.load.spritesheet('S_IdleR', 'static/assets/S_Sprites/S_idleR.png', {
  frameWidth: 44,
  frameHeight: 44,
});
this.load.animation('S_Anims', './static/assets/S_Anims.json');
    /* END PRELOAD ITEMS */
  }
  private logo: Phaser.GameObjects.Image;
  private companyLine1: Phaser.GameObjects.BitmapText;
  private companyLine2: Phaser.GameObjects.BitmapText;

  create() {
    this.tweens.add({
      targets: this.logo, //your image that must spin
      rotation: 4 * Math.PI, //rotation value must be radian
      ease: 'Bounce',
      delay: 600,
      duration: 1200, //duration is in milliseconds
    });

    this.tweens.add({
      targets: this.companyLine1, //your image that must spin
      x: '140',
      ease: 'Elastic',
      duration: 500, //duration is in milliseconds
    });
    this.tweens.add({
      targets: this.companyLine2, //your image that must spin
      x: '140',
      ease: 'Elastic',
      duration: 500, //duration is in milliseconds
    });

    setTimeout(() => {
      //this.scene.start('MainLevel');
    }, 2000);
  }

  update() {}
}

/* ----------------------------------- MAIN SCENE --------------------------------- */

class MainLevel extends Phaser.Scene {
  constructor() {
    super({ key: 'MainLevel' });
  }

  preload() {}

  create() {}
  const Hero = this.physics.add.sprite(100, 200, 'Hero', 0);
  Hero.anims.play('S_IdleR'); // notice the key for animation
  update() {}
}

/* -------------------------------------------------------------------------- */
/*                                RUN GAME.                                   */
/* -------------------------------------------------------------------------- */

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  backgroundColor: '0x000',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [BootLevel, SplashLevel, MainLevel],
};

const game = new Phaser.Game(config);

//idk why im typing this lol