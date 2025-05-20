const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    diraccion: {
        ciudad: "Qro",
        pais: "MX"
    }
}

// aplica destructuración aquí
const { nombre, edad, diraccion: { ciudad } } = persona;

// imprime el mensaje "Me llamo Ivan Isay, tengo 37 años y vivo en Qro."
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);