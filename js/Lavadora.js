"use strict";
//Clase hija de Electrodomestico
const defCarga = 5;
class Lavadora extends Electrodomestico {
    //2-Constructor 
    constructor(newConsumo, newColor) {
        super(newConsumo, newColor);
        this.carga = defCarga;
    }
    //3-Métodos propios de clase
    getCarga() {
        return this.carga;
    }
    setCarga(newCarga) {
        this.carga = newCarga;
    }
    // precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €,
    precioFinal() {
        let prTotal = super.precioFinal();
        if (this.carga > 30) {
            prTotal += 50;
        }
        return prTotal;
    }
}
