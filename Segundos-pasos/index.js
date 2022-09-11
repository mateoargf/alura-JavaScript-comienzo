/*Importación de clases*/
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','12343422','233422');

const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

// cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);

/*
let parametroValor = 100;

console.log('Parámetro Valor',parametroValor);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);
console.log('Parámetro Valor',parametroValor);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de María ',cuentaDeMaria);


const saldoMaria = cuentaDeMaria.verSaldo();

console.log('El Saldo actual (CuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (CuentaLeonardo) '+saldoLeonardo); 
*/
