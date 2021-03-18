"use strict";
var Cohete = /** @class */ (function () {
    function Cohete(codigo, propulsoresArray) {
        this.codigo = codigo;
        // this.propulsores = propulsores;
        this.potenciaActual = 0;
        this.propulsoresArray = propulsoresArray;
    }
    Cohete.prototype.acelerar = function () {
        /*      //aumenta 10 la potencia de cada propulsor*/
        for (var _i = 0, _a = this.propulsoresArray; _i < _a.length; _i++) {
            var propulsor = _a[_i];
            if (propulsor.potenciaActualPropulsor < propulsor.potenciaMaximaPropulsor) {
                propulsor.potenciaActualPropulsor =
                    propulsor.potenciaActualPropulsor + 10;
                console.log("propulsor " + this.propulsoresArray.indexOf(propulsor) + " aceler\u00F3 + 10!");
            }
        }
    };
    Cohete.prototype.frenar = function () {
        /*      //reduce 10 la potencia de cada propulsor*/
        for (var _i = 0, _a = this.propulsoresArray; _i < _a.length; _i++) {
            var propulsor = _a[_i];
            if (propulsor.potenciaActualPropulsor > 0) {
                propulsor.potenciaActualPropulsor =
                    propulsor.potenciaActualPropulsor - 10;
                console.log("propulsor " + this.propulsoresArray.indexOf(propulsor) + " fren\u00F3 - 10!");
            }
        }
    };
    return Cohete;
}());
var Propulsor = /** @class */ (function () {
    function Propulsor(potenciaMaximaPropulsor) {
        this.potenciaMaximaPropulsor = potenciaMaximaPropulsor;
        this.potenciaActualPropulsor = 0;
    }
    Object.defineProperty(Propulsor.prototype, "getPotenciaMaximaPropulsor", {
        get: function () {
            return this.potenciaMaximaPropulsor;
        },
        enumerable: false,
        configurable: true
    });
    return Propulsor;
}());
