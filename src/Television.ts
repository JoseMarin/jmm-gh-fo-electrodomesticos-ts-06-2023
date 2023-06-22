//Class TV hija de Electrodomestico
const defResolucion = 20;
const defCtrK = false;

class Television extends Electrodomestico {
    //1-Atributos de clase
    private resolucion: number;
    ctrK:boolean;

    //2-Constructor 
    constructor(newConsumo:string, newColor:string){
        super(newConsumo, newColor);
        this.resolucion = defResolucion;
        this.ctrK = defCtrK;
    }

    //3-Métodos propios de clase
    getResolucion():number{
        return this.resolucion;
    }
    
    setResolucion(newRes:number):void{
        this.resolucion = newRes;
    }

    getCtrK():boolean{
        return this.ctrK;
    }

    setCtrK(newCtrK:boolean):void{
        this.ctrK = newCtrK;
    }

    // precioFinal(): si tiene una resolución mayor de 40 pulgadas, 
    // se incrementará el precio un 30% y si tiene 4k incorporado, aumentará 50 €.

    precioFinal(){
        let prTotal = super.precioFinal();
        if (this.resolucion > 40) {
            prTotal *= 1.30;
        }
        if (this.ctrK == true) {
            prTotal += 50;
        }

        return prTotal;
    }
}
