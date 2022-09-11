console.log(`Trabajando con Condiciones`);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogota');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');

const edadComprador = 17;
const estaAcompanado = true; //Variable booleana: true o false
const tienePasaje = true; 

if (edadComprador >= 18 || estaAcompanado) {
    // Aquí se ejecuta el código si el comprador es mayor  a 18
    // Es decir es mayor de edad
    console.log(`Es posible vender pasajes`);
    console.log(`Ciudades disponibles para viaje`);
    console.log(ciudadesDisponibles);
} else {
    console.log(`El comprador NO es mayor de edad y NO está acompañado`);
    console.log(`No es posible ofrecer viajes`);
} 
 
// Proceso de embarque
console.log(`Proceso de embarque: \n \n`);
//    A         Y       B           (C  O       D)
if (tienePasaje && (edadComprador >=18 || estaAcompanado)) {
    console.log(`Comprador con pasaje. Feliz viaje`);
} else {
    console.log(`Comprador sin pasaje. No se posible hacer el embarque`);
}
