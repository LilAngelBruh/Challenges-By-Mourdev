/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function Primo() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0){
            console.log('es primo we: ', i)
        }
    }
}
Primo()