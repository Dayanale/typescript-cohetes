"use strict";
/// <reference path="../models/cohete.ts" />
var cohetesArray = [];
/* Funcion Crear Cohete 1:
 */
function crear1() {
    var codigo = "32WESSDS";
    var propulsores;
    if (findCohete("1") === undefined) {
        propulsores = [new Propulsor(10), new Propulsor(30), new Propulsor(80)];
        var nuevoCohete = new Cohete(codigo, propulsores);
        console.log("creado nuevo cohete:");
        alert("Creado Nuevo Cohete 1!");
        console.log(nuevoCohete);
        cohetesArray.push(nuevoCohete);
        console.log("agregado " + nuevoCohete + " a 'CohetesArray'");
        console.log(cohetesArray);
    }
    else {
        alert("el cohete 1 ya existe");
    }
}
/* Funcion Crear Cohete 2:
 */
function crear2() {
    var codigo = "LDSFJA32";
    var propulsores;
    if (findCohete("2") === undefined) {
        propulsores = [
            new Propulsor(30),
            new Propulsor(40),
            new Propulsor(50),
            new Propulsor(50),
            new Propulsor(30),
            new Propulsor(10),
        ];
        var nuevoCohete = new Cohete(codigo, propulsores);
        console.log("creado nuevo cohete:");
        alert("Creado Nuevo Cohete 2!");
        console.log(nuevoCohete);
        cohetesArray.push(nuevoCohete);
        console.log("agregado " + nuevoCohete + " a 'CohetesArray'");
        console.log(cohetesArray);
    }
    else {
        alert("el cohete 2 ya existe");
    }
}
/* Funcion Imprimir Cohete 1:
 */
function imprimir1() {
    var indexCohete = findCohete("1");
    if (indexCohete !== undefined) {
        var mensaje = "C\u00F3digo del cohete = " + cohetesArray[indexCohete].codigo +
            "<br><br>" +
            ("Potencia Actual del Cohete = " + cohetesArray[indexCohete].potenciaActual) +
            "<br><br>" +
            "Potencias máximas de los propulsores: ";
        var mensaje1 = [];
        for (var _i = 0, _a = cohetesArray[indexCohete].propulsoresArray; _i < _a.length; _i++) {
            var item = _a[_i];
            mensaje1.push(item.potenciaMaximaPropulsor);
        }
        mensaje += mensaje1.toString();
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else {
        alert("Aún no se ha creado el cohete 1");
    }
}
/* Funcion Imprimir Cohete 2:
 */
function imprimir2() {
    var indexCohete = findCohete("2");
    if (indexCohete !== undefined) {
        var mensaje = "C\u00F3digo del cohete = " + cohetesArray[indexCohete].codigo +
            "<br><br>" +
            ("Potencia Actual del Cohete = " + cohetesArray[indexCohete].potenciaActual) +
            "<br><br>" +
            "Potencias máximas de los propulsores: ";
        var mensaje1 = [];
        for (var _i = 0, _a = cohetesArray[indexCohete].propulsoresArray; _i < _a.length; _i++) {
            var item = _a[_i];
            mensaje1.push(item.potenciaMaximaPropulsor);
        }
        mensaje += mensaje1.toString();
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else {
        alert("Aún no se ha creado el cohete 2");
    }
}
/* Funcion Imprimir Todos los Cohetes:
 */
function imprimirTodos() {
    var mensaje = "";
    if (cohetesArray.length === 0) {
        alert("Aún no se ha creado ningún cohete!");
    }
    else {
        for (var _i = 0, cohetesArray_1 = cohetesArray; _i < cohetesArray_1.length; _i++) {
            var item = cohetesArray_1[_i];
            mensaje +=
                "C\u00F3digo del cohete = " + item.codigo +
                    "<br>" +
                    ("Potencia Actual del cohete = " + item.potenciaActual) +
                    "<br>" +
                    "Potencias máximas de los propulsores: ";
            var mensaje1 = [];
            for (var _a = 0, _b = item.propulsoresArray; _a < _b.length; _a++) {
                var elemento = _b[_a];
                mensaje1.push(elemento.potenciaMaximaPropulsor);
            }
            mensaje += mensaje1.toString() + ".<br><br>";
        }
        document.getElementById("resultado").innerHTML = mensaje;
    }
}
/* FUNCION PARA BUSCAR UN COHETE DENTRO DEL ARRAY DE COHETES:
(Si lo encuentra, devuelve el índice correspondiente dentro del array):
 */
function findCohete(coheteToFind) {
    var indexOfFound;
    if (cohetesArray.length === 0) {
        console.log("No se ha creado ningún cohete");
    }
    else {
        for (var _i = 0, cohetesArray_2 = cohetesArray; _i < cohetesArray_2.length; _i++) {
            var cohete = cohetesArray_2[_i];
            switch (coheteToFind) {
                case "1":
                    if (cohete.codigo === "32WESSDS") {
                        indexOfFound = cohetesArray.indexOf(cohete);
                    }
                    break;
                case "2":
                    if (cohete.codigo === "LDSFJA32") {
                        indexOfFound = cohetesArray.indexOf(cohete);
                    }
                    break;
            }
        }
    }
    return indexOfFound;
}
/* ACELERAR COHETE 1:
 */
document.getElementById("acelerar1").addEventListener("click", function () {
    var indexOfFound = findCohete("1");
    if (indexOfFound !== undefined) {
        console.log("Cohete 1  encontrado, listo para acelerar");
        if (cohetesArray[indexOfFound].potenciaActual <
            calcularPotenciaMaxima(cohetesArray[indexOfFound])) {
            cohetesArray[indexOfFound].acelerar();
            calcularPotenciaActual(cohetesArray[indexOfFound]);
            console.log("Aceleración Cohete 1 completada!");
            alert("Cohete 1 aceler\u00F3!! \n    Potencial Actual = " + cohetesArray[indexOfFound].potenciaActual);
        }
        else {
            alert("Se ha alcanzado la potencia máxima, no es posible acelerar más!");
        }
    }
});
/* ACELERAR COHETE 2:
 */
document.getElementById("acelerar2").addEventListener("click", function () {
    var indexOfFound = findCohete("2");
    if (indexOfFound !== undefined) {
        console.log("Cohete 2  encontrado, listo para acelerar");
        if (cohetesArray[indexOfFound].potenciaActual <
            calcularPotenciaMaxima(cohetesArray[indexOfFound])) {
            cohetesArray[indexOfFound].acelerar();
            calcularPotenciaActual(cohetesArray[indexOfFound]);
            console.log("Aceleración Cohete 2 completada!");
            alert("Cohete 2 aceler\u00F3!! \n      Potencial Actual = " + cohetesArray[indexOfFound].potenciaActual);
        }
        else {
            alert("Se ha alcanzado la potencia máxima, no es posible acelerar más!");
        }
    }
});
/* FRENAR COHETE 1:
 */
document.getElementById("frenar1").addEventListener("click", function () {
    var indexOfFound = findCohete("1");
    if (indexOfFound !== undefined) {
        console.log("Cohete 1  encontrado, listo para frenar");
        if (cohetesArray[indexOfFound].potenciaActual > 0) {
            cohetesArray[indexOfFound].frenar();
            calcularPotenciaActual(cohetesArray[indexOfFound]);
            console.log("desaceleración Cohete 1 completada!");
            alert("Cohete 1 fren\u00F3!! \n      Potencial Actual = " + cohetesArray[indexOfFound].potenciaActual);
        }
        else {
            alert("No es posible frenar!\nLa potencia actual del cohete es = " + cohetesArray[indexOfFound].potenciaActual);
        }
    }
});
/* FRENAR COHETE 2:
 */
document.getElementById("frenar2").addEventListener("click", function () {
    var indexOfFound = findCohete("2");
    if (indexOfFound !== undefined) {
        console.log("Cohete 2  encontrado, listo para frenar");
        if (cohetesArray[indexOfFound].potenciaActual > 0) {
            cohetesArray[indexOfFound].frenar();
            calcularPotenciaActual(cohetesArray[indexOfFound]);
            console.log("desaceleración Cohete 2 completada!");
            alert("Cohete 2 fren\u00F3!! \n      Potencial Actual = " + cohetesArray[indexOfFound].potenciaActual);
        }
        else {
            alert("No es posible frenar!\nLa potencia actual del cohete es = " + cohetesArray[indexOfFound].potenciaActual);
        }
    }
});
/* CALCULAR POTENCIA ACTUAL DE UN COHETE:
 */
function calcularPotenciaActual(cohete) {
    var resultado = 0;
    for (var _i = 0, _a = cohete.propulsoresArray; _i < _a.length; _i++) {
        var elemento = _a[_i];
        resultado += elemento.potenciaActualPropulsor;
    }
    cohete.potenciaActual = resultado;
    console.log("La potencia Actual del cohete " + cohete + " es = " + resultado);
}
/* CALCULAR POTENCIA MÁXIMA DE UN COHETE:
 */
function calcularPotenciaMaxima(cohete) {
    var resultado = 0;
    for (var _i = 0, _a = cohete.propulsoresArray; _i < _a.length; _i++) {
        var elemento = _a[_i];
        resultado += elemento.potenciaMaximaPropulsor;
    }
    console.log("La potencia M\u00E1xima del cohete " + cohete + " es = " + resultado);
    return resultado;
}
