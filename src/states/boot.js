/// <reference path = "./../../node_modules/phaser/typescript/phaser.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        _super.call(this);
    }
    Boot.prototype.preload = function () {
        this.load.image('preloader', 'assets/preloader.gif');
    };
    Boot.prototype.create = function () {
        this.game.input.maxPointers = 1;
        //setup device scaling
        if (this.game.device.desktop) {
            this.game.scale.pageAlignHorizontally = true;
        }
        else {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.minWidth = 480;
            this.game.scale.minHeight = 260;
            this.game.scale.maxWidth = 640;
            this.game.scale.maxHeight = 480;
            this.game.scale.forceOrientation(true);
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.setScreenSize(true);
        }
        this.initGlobalVariables();
        this.game.state.start('preloader');
    };
    Boot.prototype.initGlobalVariables = function () {
        this.game.global = {};
    };
    return Boot;
}(Phaser.State));
exports.__esModule = true;
exports["default"] = Boot;
