//Crear instancias de las clases

//instancia de Electrodomestico
let el1 = new Electrodomestico('A','rojo');
console.log(el1.getConsumo());
console.log(el1.getColor());
el1.setPeso(85);
console.log(el1);
console.log(el1.precioFinal());

//Instancia de la clase Lavadora
let lv1 = new Lavadora('A','rojo');
lv1.setCarga(45);
console.log(lv1);
console.log(lv1.precioFinal());

//Instancia claase TV
let tv1 = new Television('A','rojo');
tv1.setResolucion(55);
tv1.setCtrK(true);
console.log(tv1);
console.log(tv1.precioFinal());