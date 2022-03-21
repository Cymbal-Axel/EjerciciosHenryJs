var arreglo = [1, 5, 2, 9, 6, 4];

function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares.
  // ej:
  // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15

  // Tu código aca:
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      sum += array[i];
    }
  }
return sum;

}
console.log(sumaTodosImpares(arreglo))