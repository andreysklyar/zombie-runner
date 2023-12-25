import Bg from "./bg";

export default class GameCore {
    constructor(app) {
        this.app = app;
        console.log('Game');
        // this.bgContainer = new Bg();
        // this.app.stage.addChild(this.bgContainer);
        this.app.stage.addChild(new Bg(app));
    }

    update() {

    }
};