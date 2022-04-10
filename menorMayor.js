var numeros = [2, 5, 1, 8];

function menorMayor(numeros) {
    // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
    // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
    // 'numeros' en la posición 1.
    // Ej:
    // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
    // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
    // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]
  
    // Tu código aca:
  
    // Tu código aca:
    var numMayor = 0;
    var numMenor = numeros[0];
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > numMayor) {
        numMayor = numeros[i];
      }
    }
  
    for (let j = 1; j < numeros.length; j++) {
      if (numeros[j] < numMenor) {
        numMenor = numeros[j];
      }
    }
    var resultado = [numMenor, numMayor];
    return resultado;
  
  }
  console.log(menorMayor([2, 5, 1, 8]));