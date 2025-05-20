const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
];

// 1. Buscar a la persona con nombre "Luis"
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log(personaLuis);

// 2. Imprimir el nombre de cada persona con su edad
personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

// 3. Sumar todas las edades
const totalEdades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log(`La suma total de las edades es: ${totalEdades}`);