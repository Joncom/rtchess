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
        var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Gameover', {
            font: '42px Arial', fill: '#ffffff', align: 'center'
        });
        text.anchor.set(0.5);
        this.saveVarsToLocalStorage();
        this.input.onDown.add(this.restartGame, this);
    };
    Menu.prototype.saveVarsToLocalStorage = function () {
    };
    Menu.prototype.resetGlobalVariables = function () {
    };
    Menu.prototype.update = function () { };
    Menu.prototype.restartGame = function () {
        this.resetGlobalVariables();
        this.game.state.start('menu');
    };
    return Menu;
}(Phaser.State));
exports.__esModule = true;
exports["default"] = Menu;
