# mofron-comp-frame-card

# install
npm install mofron-comp-frame-card

# sample

```js
try {
    let mf   = require('mofron');
    let Text = require('mofron-comp-text');
    let Card = require('mofron-comp-frame-card');
    require('mofron-effect-color');
    require('mofron-effect-shadow');

    new Card({
        size        : new mf.Param(35, 200),
        addChild    : new Text('Card'),
        focusEffect : new mf.effect.Color({
                          color : new mofron.Param(
                                      new mf.Color(255,255,255),
                                      new mf.Color(57,133,150)
                                  ),
                          speed : 0.6
                      }),
        hoverEffect : new mf.effect.Shadow({
                          value : 20,
                          speed : 0.6
                      }),
        draggable   : true,
        visible     : true
    });
} catch (e) {
    console.error(e.stack);
}
```
