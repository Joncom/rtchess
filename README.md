http://qiita.com/kent_ocean/items/3025263c0539000290ff

### Gotchas ###

To compile correctly, you need to manually (yikes) update "node_modules/phaser/typescript/phaser.d.ts" as follows:

- add `setScreenSize(flag: boolean): void;` to the `ScaleManager` class ([hmmm](http://www.html5gamedevs.com/topic/4838-200-thisgamestagescalesetscreensize-is-not-a-function/))
- add `global: any;` to the `Game` class 