function invertirLetras(frase) {
    // La funcion recibe un string "frase". Convertir las letras en minúsculas a mayúsculas y viceversa y devolver
    // la frase con dichos cambios.
    // TIP: Usar toLowerCase y toUpperCase
    // Para saber si un char es upper o lower, comparalo con el mismo char en upper o lower;
    // ej:
    //  'i' === 'i'.toLowerCase(); -> es lower;
    //  'I' === 'I'.toLowerCase()l -> no es lower;
    // Tu código:
    const palabra = frase.split('');
    let resultado = '';
    palabra.forEach(letra => {
        if (letra == letra.toLowerCase()) {
            resultado += letra.toUpperCase()
        } else {
            resultado += letra.toLowerCase()
        }
    });
    return resultado;
}