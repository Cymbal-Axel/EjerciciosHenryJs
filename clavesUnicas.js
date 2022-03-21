let obj1 = {
    nombre: "Luciano",
    apellido: "Nicolau"
};
let obj2 = {
    nombre: "Lio",
    segundoNombre: "Gustavo"
};

function clavesUnicas(obj1, obj2) {
    // La funcion recibe dos objetos "obj1" y "obj2".
    // Retornar las keys de las propiedades que sean únicas en cada objeto.
    // Ej:
    // let obj1 = {nombre: "Luciano", apellido: "Nicolau"}
    // let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"}
    // clavesUnicas(obj1, obj2) retorna => ["apellido", "segundoNombre"];
    //
    // Tu código`:
    var resultado = [];
    for (let atributo in obj1) {
        if (!obj2[atributo]) {
            resultado.push(atributo);
        }
    }
    for (let atributo in obj2) {
        if (!obj1[atributo]) {
            resultado.push(atributo)
        }
    }
    return resultado;
};
console.log(clavesUnicas(obj1, obj2))