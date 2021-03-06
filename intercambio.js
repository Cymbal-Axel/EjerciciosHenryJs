function intercambio(objeto) {
    // Devolver un objeto con los pares clave-valor intercambiados.
    // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
    // NOTA: No utilizar métodos de Object (values, keys, entries);
    //
    // Tu código:
    var objetoInvertido = {};
    for(var key in objeto){
        objetoInvertido[objeto[key]] = key;
    }
    return objetoInvertido;
  }
