/// <reference path = "./../../node_modules/phaser/typescript/phaser.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        _super.call(this);
    }
    Game.prototype.create = function () {
        var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game', {
            font: '42px Arial', fill: '#ffffff', align: 'center'
        });
        text.anchor.set(0.5);
        this.input.onDown.add(this.endGame, this);
    };
    Game.prototype.update = function () {
    };
    Game.prototype.endGame = function () {
        this.game.state.start('gameover');
    };
    return Game;
}(Phaser.State));
exports.__esModule = true;
exports["default"] = Game;
