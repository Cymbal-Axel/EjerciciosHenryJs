function mayorMenosMenor(arr) {
    // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
    // NOTA: No utilizar los métodos "min" y "max" de "Math".
    //
    // Tu código:
    var numeroMayor = 0;
    var numeroMenor = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > numeroMayor) {
            numeroMayor = arr[i];
        };
    };
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] < numeroMenor) {

            (numeroMenor = arr[j])

        };
    };
    var resultado = numeroMayor - numeroMenor;
    return resultado;
};