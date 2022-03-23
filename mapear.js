function mapear() {
    // Escribi una funcion mapear en el prototipo del objeto global 'Array'
    // que recibe una funcion callback , que se ejecuta por cada elemento del array
    // mapear los elementos de ese array segun la funcion callback
    // Esta funcion tiene que devolver un array nuevo con los elementos mapeados.
    // NO USAR LA FUNCION MAP DE ARRAYS.
    // ej:
    // var numeros = [1, 2, 3, 4];
    // numeros.mapear(function(numero) {
    //   return numero + 1;
    // }) devuelve [2, 3, 4, 5]
  
    // Tu código aca:
    Array.prototype.mapear = function (callback) {
      let arrayADevolver = []
      for(let i = 0; i < this.length; i++){
        item = this[i];
          arrayADevolver.push(callback(item))
      }
      return arrayADevolver;
    } 
  }