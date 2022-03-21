var persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
var persona2 = ['comer', 'dormir', 'futbol'];

function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:
  var newArray = [];
  for (let i = 0; i < persona1.length; i++) {
    var actividad1 = persona1[i];
    for (let j = 0; j < persona2.length; j++) {
      var actividad2 = persona2[j];
      if (actividad1 == actividad2) {
        newArray.push(actividad1);
      }
    }
  }
  return newArray
}
console.log(actividadesEnComun(persona1, persona2));