import Bg from "./bg";

export default class GameCore {
    constructor(app) {
        this.app = app;
        console.log('GameCore');
        this.app.stage.addChild(new Bg(app));
    }

    update() {

    }
};