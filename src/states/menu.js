/// <reference path = "./../../node_modules/phaser/typescript/phaser.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        _super.call(this);
    }
    Menu.prototype.create = function () {
        var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'MENU', {
            font: '42px Arial', fill: '#ffffff', align: 'center'
        });
        text.anchor.set(0.5);
        this.input.onDown.add(this.startGame, this);
    };
    Menu.prototype.update = function () { };
    Menu.prototype.startGame = function () {
        this.game.state.start('game');
    };
    return Menu;
}(Phaser.State));
exports.__esModule = true;
exports["default"] = Menu;
