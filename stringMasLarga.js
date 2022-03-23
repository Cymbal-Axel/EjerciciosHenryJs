function stringMasLarga(str) {
    // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
    // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
    // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
    // Tip: podes usar el metodo de String 'split'
  
    // Tu código aca:
    var palabras = str.split(" ");
    palabras.sort(function (a, b) {
        if (a.length < b.length){
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }
        return 0;
    
    });
    
  return palabras[palabras.length - 1];
}