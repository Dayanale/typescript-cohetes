/// <reference path="../models/cohete.ts" />

let cohetesArray: Cohete[] = [];

/* Funcion Crear Cohete 1:
 */
function crear1() {
  let codigo = "32WESSDS";
  let propulsores;

  if (findCohete("1") === undefined) {
    propulsores = [new Propulsor(10), new Propulsor(30), new Propulsor(80)];
    let nuevoCohete = new Cohete(codigo, propulsores);
    console.log(`creado nuevo cohete:`);
    alert("Creado Nuevo Cohete 1!");
    console.log(nuevoCohete);
    cohetesArray.push(nuevoCohete);
    console.log(`agregado ${nuevoCohete} a 'CohetesArray'`);
    console.log(cohetesArray);
  } else {
    alert("el cohete 1 ya existe");
  }
}

/* Funcion Crear Cohete 2:
 */
function crear2() {
  let codigo = "LDSFJA32";
  let propulsores;

  if (findCohete("2") === undefined) {
    propulsores = [
      new Propulsor(30),
      new Propulsor(40),
      new Propulsor(50),
      new Propulsor(50),
      new Propulsor(30),
      new Propulsor(10),
    ];
    let nuevoCohete = new Cohete(codigo, propulsores);
    console.log(`creado nuevo cohete:`);
    alert("Creado Nuevo Cohete 2!");
    console.log(nuevoCohete);
    cohetesArray.push(nuevoCohete);
    console.log(`agregado ${nuevoCohete} a 'CohetesArray'`);
    console.log(cohetesArray);
  } else {
    alert("el cohete 2 ya existe");
  }
}

/* Funcion Imprimir Cohete 1:
 */
function imprimir1() {
  let indexCohete = findCohete("1");
  if (indexCohete !== undefined) {
    let mensaje =
      `Código del cohete = ${cohetesArray[indexCohete].codigo}` +
      "<br><br>" +
      `Potencia Actual del Cohete = ${cohetesArray[indexCohete].potenciaActual}` +
      "<br><br>" +
      "Potencias máximas de los propulsores: ";
    let mensaje1 = [];
    for (const item of cohetesArray[indexCohete].propulsoresArray) {
      mensaje1.push(item.potenciaMaximaPropulsor);
    }
    mensaje += mensaje1.toString();
    (document.getElementById(
      "resultado"
    ) as HTMLInputElement).innerHTML = mensaje;
  } else {
    alert("Aún no se ha creado el cohete 1");
  }
}

/* Funcion Imprimir Cohete 2:
 */
function imprimir2() {
  let indexCohete = findCohete("2");
  if (indexCohete !== undefined) {
    let mensaje =
      `Código del cohete = ${cohetesArray[indexCohete].codigo}` +
      "<br><br>" +
      `Potencia Actual del Cohete = ${cohetesArray[indexCohete].potenciaActual}` +
      "<br><br>" +
      "Potencias máximas de los propulsores: ";
    let mensaje1 = [];
    for (const item of cohetesArray[indexCohete].propulsoresArray) {
      mensaje1.push(item.potenciaMaximaPropulsor);
    }
    mensaje += mensaje1.toString();
    (document.getElementById(
      "resultado"
    ) as HTMLInputElement).innerHTML = mensaje;
  } else {
    alert("Aún no se ha creado el cohete 2");
  }
}

/* Funcion Imprimir Todos los Cohetes:
 */
function imprimirTodos() {
  let mensaje = "";

  if (cohetesArray.length === 0) {
    alert("Aún no se ha creado ningún cohete!");
  } else {
    for (const item of cohetesArray) {
      mensaje +=
        `Código del cohete = ${item.codigo}` +
        "<br>" +
        `Potencia Actual del cohete = ${item.potenciaActual}` +
        "<br>" +
        "Potencias máximas de los propulsores: ";
      let mensaje1 = [];
      for (const elemento of item.propulsoresArray) {
        mensaje1.push(elemento.potenciaMaximaPropulsor);
      }
      mensaje += mensaje1.toString() + ".<br><br>";
    }

    (document.getElementById(
      "resultado"
    ) as HTMLInputElement).innerHTML = mensaje;
  }
}

/* FUNCION PARA BUSCAR UN COHETE DENTRO DEL ARRAY DE COHETES:
(Si lo encuentra, devuelve el índice correspondiente dentro del array):
 */
function findCohete(coheteToFind: string) {
  let indexOfFound: number | undefined;

  if (cohetesArray.length === 0) {
    console.log("No se ha creado ningún cohete");
  } else {
    for (const cohete of cohetesArray) {
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
document.getElementById("acelerar1")!.addEventListener("click", () => {
  let indexOfFound = findCohete("1");

  if (indexOfFound !== undefined) {
    console.log("Cohete 1  encontrado, listo para acelerar");
    if (
      cohetesArray[indexOfFound].potenciaActual <
      calcularPotenciaMaxima(cohetesArray[indexOfFound])
    ) {
      cohetesArray[indexOfFound].acelerar();
      calcularPotenciaActual(cohetesArray[indexOfFound]);
      console.log("Aceleración Cohete 1 completada!");
      alert(`Cohete 1 aceleró!! 
    Potencial Actual = ${cohetesArray[indexOfFound].potenciaActual}`);
    } else {
      alert("Se ha alcanzado la potencia máxima, no es posible acelerar más!");
    }
  }
});

/* ACELERAR COHETE 2:
 */
document.getElementById("acelerar2")!.addEventListener("click", () => {
  let indexOfFound = findCohete("2");

  if (indexOfFound !== undefined) {
    console.log("Cohete 2  encontrado, listo para acelerar");
    if (
      cohetesArray[indexOfFound].potenciaActual <
      calcularPotenciaMaxima(cohetesArray[indexOfFound])
    ) {
      cohetesArray[indexOfFound].acelerar();
      calcularPotenciaActual(cohetesArray[indexOfFound]);
      console.log("Aceleración Cohete 2 completada!");
      alert(`Cohete 2 aceleró!! 
      Potencial Actual = ${cohetesArray[indexOfFound].potenciaActual}`);
    } else {
      alert("Se ha alcanzado la potencia máxima, no es posible acelerar más!");
    }
  }
});

/* FRENAR COHETE 1:
 */
document.getElementById("frenar1")!.addEventListener("click", () => {
  let indexOfFound = findCohete("1");

  if (indexOfFound !== undefined) {
    console.log("Cohete 1  encontrado, listo para frenar");
    if (cohetesArray[indexOfFound].potenciaActual > 0) {
      cohetesArray[indexOfFound].frenar();
      calcularPotenciaActual(cohetesArray[indexOfFound]);
      console.log("desaceleración Cohete 1 completada!");
      alert(`Cohete 1 frenó!! 
      Potencial Actual = ${cohetesArray[indexOfFound].potenciaActual}`);
    } else {
      alert(`No es posible frenar!
La potencia actual del cohete es = ${cohetesArray[indexOfFound].potenciaActual}`);
    }
  }
});

/* FRENAR COHETE 2:
 */
document.getElementById("frenar2")!.addEventListener("click", () => {
  let indexOfFound = findCohete("2");

  if (indexOfFound !== undefined) {
    console.log("Cohete 2  encontrado, listo para frenar");
    if (cohetesArray[indexOfFound].potenciaActual > 0) {
      cohetesArray[indexOfFound].frenar();
      calcularPotenciaActual(cohetesArray[indexOfFound]);
      console.log("desaceleración Cohete 2 completada!");
      alert(`Cohete 2 frenó!! 
      Potencial Actual = ${cohetesArray[indexOfFound].potenciaActual}`);
    } else {
      alert(`No es posible frenar!
La potencia actual del cohete es = ${cohetesArray[indexOfFound].potenciaActual}`);
    }
  }
});

/* CALCULAR POTENCIA ACTUAL DE UN COHETE:
 */
function calcularPotenciaActual(cohete: Cohete) {
  let resultado = 0;
  for (const elemento of cohete.propulsoresArray) {
    resultado += elemento.potenciaActualPropulsor;
  }
  cohete.potenciaActual = resultado;
  console.log(`La potencia Actual del cohete ${cohete} es = ${resultado}`);
}

/* CALCULAR POTENCIA MÁXIMA DE UN COHETE:
 */
function calcularPotenciaMaxima(cohete: Cohete) {
  let resultado = 0;
  for (const elemento of cohete.propulsoresArray) {
    resultado += elemento.potenciaMaximaPropulsor;
  }
  console.log(`La potencia Máxima del cohete ${cohete} es = ${resultado}`);
  return resultado;
}
