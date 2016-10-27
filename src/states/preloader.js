/// <reference path = "./../../node_modules/phaser/typescript/phaser.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Preloader = (function (_super) {
    __extends(Preloader, _super);
    function Preloader() {
        _super.call(this);
        this.asset = null;
        this.ready = false;
    }
    Preloader.prototype.preload = function () {
        //setup loading bar
        this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
        this.load.setPreloadSprite(this.asset);
        //Setup loading and its events
        //this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        //this.loadResources();
    };
    Preloader.prototype.update = function () {
        // if (this.ready) {
        this.game.state.start('menu');
        // }
    };
    Preloader.prototype.loadResources = function () {
        // load your resources here
    };
    Preloader.prototype.onLoadComplete = function () {
        this.ready = true;
    };
    return Preloader;
}(Phaser.State));
exports.__esModule = true;
exports["default"] = Preloader;
