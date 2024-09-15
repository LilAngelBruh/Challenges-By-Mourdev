/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function Fibonacci() {
    let f = 0
    for (let i = 0; i <= 50; i++) {
        if (i == 0){
            f = 0; 
            console.log(f)
            continue
        } 
        if (i == 1) {
            f = 1
            console.log(f); 
            continue
        } 
        f = (f - 1) + (f - 2)
        console.log(-f)
    }
}

Fibonacci()
