function ingredienteEnMalEstado(menu, comida, ingrediente) {
    // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
    // ya que deben estar contaminados también.
    // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
    // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
    // diferencia.
    // Ej:
    /* let menuDelDia = {
        raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
        bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
        tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
    } */
    // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
    // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
    // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
    // NOTA: No utilizar el método "includes".
    //
    // Tu código:
    let nuevoArray = [];
  
    const ingredientes = menu[comida]; // Si la comida no existe, será undefined. Caso contrario, contendrá los ingredientes
  
    if (ingredientes && ingredientes.length) {
      for (let i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i] === ingrediente) {
          if (i === 0) {
            nuevoArray.push(ingredientes[i]);
            nuevoArray.push(ingredientes[i + 1]);
          } else if (i === ingredientes.length - 1) {
            nuevoArray.push(ingredientes[i - 1]);
            nuevoArray.push(ingredientes[i]);
          } else {
            nuevoArray.push(ingredientes[i - 1]);
            nuevoArray.push(ingredientes[i]);
            nuevoArray.push(ingredientes[i + 1]);
          }
          break;
        }
      }
    }
  
    return nuevoArray.length ? nuevoArray : 'El menú está perfecto';
  };

