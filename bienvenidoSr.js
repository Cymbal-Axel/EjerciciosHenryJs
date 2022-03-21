var persona = {
    nombre: 'Lionel',
    apellido: 'Messi',
    invitado: true
};

function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    // {
    //  nombre: 'Lionel
    //  apellido: 'Messi',
    //  invitado: true
    //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    //
    // Tu código:
    if (persona.invitado && persona.nombre && persona.apellido) {
        return `${persona.nombre} ${persona.apellido}, un gusto tenerlo nuevamente! Bienvenido.`;
    };
    if (persona.invitado && !persona.nombre && persona.apellido) {
        return `Bienvenido Sr. ${persona.apellido}.`;
    };
    if (persona.invitado && persona.nombre && !persona.apellido) {
        return `Hola ${persona.nombre}, tu mesa está lista.`;
    };
    if (!persona.invitado) {
        return `Disculpe señor, no está invitado a la fiesta.`
    }

};
console.log(bienvenidoSr(persona))