class Cohete {
  codigo: string;
  //propulsores: string;
  potenciaActual: number;
  propulsoresArray: Propulsor[];

  constructor(codigo: string, propulsoresArray: Propulsor[]) {
    this.codigo = codigo;
    // this.propulsores = propulsores;
    this.potenciaActual = 0;
    this.propulsoresArray = propulsoresArray;
  }

  acelerar(): void {
    /*      //aumenta 10 la potencia de cada propulsor*/
    for (const propulsor of this.propulsoresArray) {
      if (
        propulsor.potenciaActualPropulsor < propulsor.potenciaMaximaPropulsor
      ) {
        propulsor.potenciaActualPropulsor =
          propulsor.potenciaActualPropulsor + 10;
        console.log(
          `propulsor ${this.propulsoresArray.indexOf(propulsor)} aceleró + 10!`
        );
      }
    }
  }

  frenar(): void {
    /*      //reduce 10 la potencia de cada propulsor*/
    for (const propulsor of this.propulsoresArray) {
      if (propulsor.potenciaActualPropulsor > 0) {
        propulsor.potenciaActualPropulsor =
          propulsor.potenciaActualPropulsor - 10;
        console.log(
          `propulsor ${this.propulsoresArray.indexOf(propulsor)} frenó - 10!`
        );
      }
    }
  }
}

class Propulsor {
  potenciaMaximaPropulsor: number;
  potenciaActualPropulsor: number;

  constructor(potenciaMaximaPropulsor: number) {
    this.potenciaMaximaPropulsor = potenciaMaximaPropulsor;
    this.potenciaActualPropulsor = 0;
  }

  get getPotenciaMaximaPropulsor() {
    return this.potenciaMaximaPropulsor;
  }
}
