/**
 * @file   mofron-comp-frame/index.js
 * @author simpart
 */
require('mofron-comp-frame');
require('mofron-layout-horizon');
require('mofron-event-click');
require('mofron-event-focus');
require('mofron-event-mouseover');
require('mofron-event-mouseout');
require('mofron-event-drag');
require('mofron-effect-color');


mofron.comp.frame.Card = class extends mofron.comp.Frame {
    
    constructor (phei, wid) {
        try {
            super();
            this.name('Card');
            this.prmOpt(
                ('number' === typeof wid) ? {param : [phei, wid]} : phei
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            super.initDomConts(prm);
            
            /* set layout */
            this.addLayout(new mofron.layout.Horizon());
            
            /*** set event ***/
            /* set focus event */
            let fcs_fnc = (flg, tgt, prm) => {
                try {
                    let eff = tgt.focusEffect();
                    for (let eff_idx in eff) {
                        eff[eff_idx].execute(flg);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            this.addEvent(
                new mofron.event.Focus(fcs_fnc)
            );
            
            /* set hover event */
            let hvr_fnc = (prm) => {
                let eff = prm[0].hoverEffect();
                for (let eff_idx in eff) {
                    eff[eff_idx].execute(prm[1]);
                }
            };
            this.event([
                new mofron.event.MouseOver(
                    hvr_fnc,
                    [this,true]
                ),
                new mofron.event.MouseOut(
                    hvr_fnc,
                    [this,false]
                )
            ]);
            
            /* set drag event */
            this.addEvent(
                new mofron.event.Drag(
                    () => { console.log('Drag!') }
                )
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    focusEffect (eff) {
        try {
            if (undefined === eff) {
                /* getter */
                return (undefined === this.m_focuseff) ? null : this.m_focuseff;
            }
            /* setter */
            if (false === mofron.func.isInclude(eff, 'Effect')) {
                if ( ('object' === typeof eff) && (undefined !== eff[0]) ) {
                    for (let eff_idx in eff) {
                        this.focusEffect(eff[eff_idx]);
                    }
                    return;
                }
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_focuseff) {
                this.m_focuseff = new Array();
            }
            eff.target(this);
            this.m_focuseff.push(eff);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    
    hoverEffect (eff) {
        try {
            if (undefined === eff) {
                /* getter */
                return (undefined === this.m_hvreff) ? null : this.m_hvreff;
            }
            /* setter */
            if (false === mofron.func.isInclude(eff, 'Effect')) {
                if ( ('object' === typeof eff) && (undefined !== eff[0]) ) {
                    for (let eff_idx in eff) {
                        this.hoverEffect(eff[eff_idx]);
                    }
                    return;
                }
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_hvreff) {
                this.m_hvreff = new Array();
            }
            eff.target(this);
            this.m_hvreff.push(eff);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    draggable (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return (undefined === this.m_drag) ? false : this.m_drag;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_drag = flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.frame.card = {};
module.exports = mofron.comp.frame.Card;
