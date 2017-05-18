/**
 * @file   mofron-comp-frame/index.js
 * @author simpart
 */
require('mofron-layout-horizon');
require('mofron-event-click');
require('mofron-effect-shadow');

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
            
            /* set color */
            this.color((null === this.color()) ? new mofron.Color(255,255,255) : undefined);
            
            /* set layout */
            this.addLayout(new mofron.layout.Horizon());
            
            /*** set event ***/
            /* set focus event */
            this.addEvent(
                new mofron.event.Focus(
                    (flg, tgt, prm) => {
                        try {
                            let eff = prm.focusEffect();
                            if (null !== eff) {
                                eff.execute(flg);
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },
                    this
                )
            );
            /* set hover event */
            this.event([
                new mofron.event.MouseOver({
                    (prm) => {
                        try {
                            let eff = prm.hoverEffect();
                            if (null !== eff) {
                                eff.execute(true);
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },
                    this
                }),
                new mofron.event.MouseOut({
                    (prm) => {
                        try {
                            let eff = prm.hoverEffect();
                            if (null !== eff) {
                                eff.execute(false);
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },
                    this
                })
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (clr, idx) {
        try {
            if ((undefined === clr) || ('number' === typeof clr)) {
                /* getter */
                if (undefined === this.m_color) {
                    return null;
                } else if ('number' === typeof clr) {
                    return (undefined === this.m_color[clr]) ? null : this.m_color[clr];
                } else {
                    return this.m_color;
                }
            }
            /* setter */
            if (undefined === this.m_color) {
                this.m_color = new Array(null, null);
            }
            
            let _idx = (undefined === idx) ? 0 : idx;
            if ( (false     === mofron.func.isInclude(clr, 'Color')) || 
                 (undefined === this.m_color[idx]) ) {
                throw new Error('invalid parameter');
            }
            this.m_color[_idx] = clr;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
//    focus (flg) {
//        try {
//            if (undefined === flg) {
//                /* getter */
//                return (undefined === this.m_focus) ? false : this.m_focus;
//            }
//            /* setter */
//            if ('boolean' !== typeof flg) {
//                throw new Error('invalid parameter');
//            }
//            let effs = this.effect();
//            for (let idx in effs) {
//                if (true === mofron.func.isObject(effs[idx][0], 'Shadow')) {
//                    effs[idx][0].execute(flg);
//                }
//            }
//            
//            /* set color */
//            if (undefined === this.m_colorbuf) {
//                this.m_colorbuf = this.color();
//            }
//            if (true === flg) {
//                let set_clr = null;
//                if (null !== this.focusColor()) {
//                    set_clr = this.focusColor();
//                } else if (null !== this.theme().color()) {
//                    set_clr = this.theme().color();
//                } else {
//                    set_clr = new mofron.Color(255,255,255);
//                }
//                this.color(set_clr);
//            } else {
//                this.color(this.m_colorbuf);
//            }
//            this.m_focus = flg;
//        } catch (e) {
//            console.error(e.stack);
//            throw e;
//        }
//    }
    
    focusEffect (eff) {
        try {
            if (undefined === eff) {
                /* getter */
                return (undefined === this.m_focuseff) ? null : this.m_focuseff;
            }
            /* setter */
            if (false === mofron.func.isInclude(eff, 'Effect')) {
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_focuseff) {
                this.m_hocuseff = new Array();
            }
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
                return (undefined === this.m_hovereff) ? null : this.m_hovereff;
            }
            /* setter */
            if (false === mofron.func.isInclude(eff, 'Effect')) {
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_hovereff) {
                this.m_hovereff = new Array();
            }
            this.m_hovereff.push(eff);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    draggable (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return (undefined === this.m_draggable) ? false : this.m_draggable;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_draggable = flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Frame.Card;
