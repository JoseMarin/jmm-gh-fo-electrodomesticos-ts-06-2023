//Defino la superclass electrodomestico
type letras = 'A'|'B'|'C'|'D'|'E'|'F';
type tcolor = 'blanco' | 'negro' |'rojo' | 'azul' | 'gris';

const defPrecio = 100;
const defConsumo = 'F';
const defColor = 'blanco';
const defPeso = 5;

class Electrodomestico {
    //1-Atributos de clase
    //protected
    protected precioBase: number;
    protected consumo: letras;
    protected color: tcolor;
    protected peso: number;

    // Por defecto, el color será blanco, el consumo energético será F, 
    // el precio Base es de
    // 100 € y el peso de 5 kg. Usa constantes para ello.

    //2-Constructor 
    constructor(newConsumo:string, newColor:string){
        this.precioBase = defPrecio;
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.color = this.comprobarColor(newColor);
        this.peso = defPeso; 
    }

    //3-Métodos propios de clase
    getPrecioBase():number{
        return this.precioBase;
    }

    setPrecioBase(valor:number){
        this.precioBase = valor;
    }

    getConsumo():letras{
        return this.consumo;
    }

    setConsumo(valor:letras){
        this.consumo = valor;
    }

    getColor():tcolor{
        return this.color;
    }

    setColor(valor:tcolor){
        this.color = valor;
    }

    getPeso():number{
        return this.peso;
    }

    setPeso(valor:number){
        this.peso = valor;
    }

    comprobarConsumoEnergetico(newLetra:string):letras{
        switch (newLetra) {
            case 'A':
                return 'A';
                break;
            case 'B':
                return 'B';
                break;
            case 'C':
                return 'C';
                break;
            case 'D':
                return 'D';
                break;
            case 'E':
                return 'E';
                break;
            case 'F':
                return 'F';
                break;
            default:
                return defConsumo;
        };  
    }

    comprobarColor(newColor:string):tcolor {

        switch (newColor) {
            case 'blanco':
                return 'blanco';
                break;
            case 'negro':
                return 'negro';
                break;
            case 'rojo':
                return 'rojo';
                break;
            case 'azul':
                return 'azul';
                break;
            case 'gris':
                return 'gris';
                break;
            default:
                return defColor;
        };
    }

    // precioFinal(): según el consumo energético, aumentara su precio, 
    // y según su tamaño, también.
    precioFinal():number{
        let prTotal:number = defPrecio;
        switch (this.consumo) {
            case 'A':
                prTotal = prTotal + 100;
                break;
            case 'B':
                prTotal+=80;
                break;
            case 'C':
                prTotal+=60;
                break;
            case 'D':
                prTotal+=50;
                break;
            case 'E':
                prTotal+=30;
                break;
            case 'F':
                prTotal+=10;
                break;
        };  

        if (this.peso > 0 && this.peso <= 19) {
            prTotal += 10;
        } else if(this.peso >= 20 && this.peso <= 49){
            prTotal += 50;
        }else if(this.peso >= 50 && this.peso <= 79){
            prTotal += 80;
        }else if(this.peso >= 80){
            prTotal += 100;
        }

        return prTotal;
    }
}

