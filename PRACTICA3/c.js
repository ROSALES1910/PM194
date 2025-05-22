function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}

// Usa la función async
obtenerDatos();