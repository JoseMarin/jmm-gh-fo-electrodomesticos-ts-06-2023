//Clase hija de Electrodomestico
const defCarga = 5;

class Lavadora extends Electrodomestico {
    //1-Atributos de clase
    private carga:number;

    //2-Constructor 
    constructor(newConsumo:string, newColor:string){
        super(newConsumo, newColor)
        this.carga = defCarga;
    }

    //3-Métodos propios de clase
    getCarga(){
        return this.carga;
    }

    setCarga(newCarga: number){
        this.carga = newCarga;
    }

    // precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €,
    precioFinal(){
        let prTotal = super.precioFinal();
        if (this.carga > 30) {
            prTotal += 50;
        }

        return prTotal;
    }

}

