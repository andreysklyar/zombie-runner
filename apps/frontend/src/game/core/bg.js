import bgUrl from './../assets/images/test.jpg';
import grassUrl from './../assets/images/grass.png';
import { Container, Sprite, Texture, TilingSprite, Assets } from 'pixi.js';

export default class Bg extends Container {
    constructor(app) {
        super();

        this.app = app;
        console.log(Assets);

        this.init();

        // V2

        // const bg = new Sprite.from(bgUrl);
        // bg.anchor.set(0.5);
        
        // bg.x = screenSize.width / 2;
        // bg.y = screenSize.height / 2;
        // this.addChild(bg);

        // V3
        // const cloudsTexture = Texture.from(bgUrl);
        
        // const cloudsSprite = new TilingSprite(
        //     cloudsTexture,
        //     this.app.screen.width,
        //     this.app.screen.height
        // );
        // const imageH = cloudsTexture.baseTexture.height;
        
        // const totalH = this.app.screen.height;
        // const delta = totalH / 570;
        // console.log(cloudsTexture.orig.height);
        // console.log(cloudsTexture);
        // console.log(cloudsSprite);
        // cloudsSprite.tileScale.set(delta, delta);

        // this.app.ticker.add(function() {
        //     cloudsSprite.tilePosition.x -= 0.5;
        // });

        // this.app.stage.addChild(cloudsSprite);
    }

    async init () {
        // Add the assets to load
        Assets.add({alias: 'worldBg', src: bgUrl});
        Assets.add({alias: 'grass', src: grassUrl});

        // Load the assets and get a resolved promise once both are loaded
        const textures = await Assets.load(['worldBg', 'grass']); // => {worldBg: Texture, grass: Texture}
        console.log(textures);

        // create a new Sprite from the resolved loaded Textures
        const worldBgSprite = new TilingSprite(
            textures.worldBg,
            this.app.screen.width,
            this.app.screen.height
        );
        console.log(worldBgSprite);

        worldBgSprite.anchor.set(0.5);
        worldBgSprite.x = this.app.screen.width / 2;
        worldBgSprite.y = this.app.screen.height / 2;
        const worldBgRatio = this.app.screen.height / textures.worldBg.baseTexture.height;
        worldBgSprite.tileScale.set(worldBgRatio, worldBgRatio);

        this.app.ticker.add(function() {
            worldBgSprite.tilePosition.x -= 0.1;
        });

        this.app.stage.addChild(worldBgSprite);

        // Grass
        const grassSprite = new TilingSprite(
            textures.grass,
            this.app.screen.width,
            30
        );
        console.log(this.app.screen.height - textures.grass.baseTexture.height);

        grassSprite.anchor.set(1);
        grassSprite.x = this.app.screen.width;
        grassSprite.y = this.app.screen.height;
        // TODO: calculate grass size
        const grassBgRatio = 30 / textures.grass.baseTexture.height;
        grassSprite.tileScale.set(grassBgRatio, grassBgRatio);

        this.app.ticker.add(function() {
            grassSprite.tilePosition.x -= 0.5;
        });

        this.app.stage.addChild(grassSprite);
    }

    update () {

    }
};
