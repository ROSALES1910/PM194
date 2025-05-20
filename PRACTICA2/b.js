const productos = [
    {nombre: "Laptop", precio: 12000 },
    {nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 700 },
    { nombre: "Monitor", precio: 3000 }
];

// Filtrar productos con precio > 1000 y obtener solo los nombres
const nombres = productos
    .filter(producto => producto.precio > 1000)
    .map(producto => producto.nombre);

console.log(nombres); // ["Laptop", "Monitor"]