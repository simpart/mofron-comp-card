/**
 * @file   mofron-comp-frame/index.js
 * @author simpart
 */
let mf        = require('mofron');
let Frame     = require('mofron-comp-frame');
let Click     = require('mofron-event-click');
let Focus     = require('mofron-event-focus');
let mOver     = require('mofron-event-mouseover');
let mOut      = require('mofron-event-mouseout');
let Draggable = require('mofron-effect-draggable');

mf.comp.DragFrame = class extends Frame {
    
    constructor (phei, wid) {
        try {
            super();
            this.name('DragFrame');
            this.prmOpt(('number' === typeof wid) ? {param : [phei, wid]} : phei);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            super.initDomConts(prm);
            
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
            this.addEvent(new Focus(fcs_fnc));
            
            /* set hover event */
            let hvr_fnc = (prm) => {
                let eff = prm[0].hoverEffect();
                for (let eff_idx in eff) {
                    eff[eff_idx].execute(prm[1]);
                }
            };
            this.event([
                new mOver(hvr_fnc, [this,true]),
                new mOut(hvr_fnc, [this,false])
            ]);
            
            /* set draggable */
            this.addEffect(new Draggable());
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
            if (false === mf.func.isInclude(eff, 'Effect')) {
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
            if (false === mf.func.isInclude(eff, 'Effect')) {
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
}
module.exports = mofron.comp.DragFrame;
