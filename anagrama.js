/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(palabra, otraPalabra) {
  if (palabra.length !== otraPalabra.length) return false;
  const ascPalabra = palabra.split("").sort((a, b) => (a < b ? -1 : 1));
  const ascOtraPalabra = otraPalabra.split("").sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < ascPalabra.length; i++) {
    if (ascPalabra[i] === ascOtraPalabra[i]) continue;
    return false;
  }

  return true;
}

console.log(anagrama("carrote", "rotecar"));

/* ME TOMO COMO 1 HORA HACER ESTO */
