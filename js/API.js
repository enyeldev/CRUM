const url = 'http://localhost:3000/clientes';

// se registra un nuevo lciente
export const nuevoCliente = async (cliente) => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}


//se obtienen todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url)
        const respuesta = await resultado.json()
        return respuesta
    } catch (error) {
        console.log(error);
    }
}

//Eliminar cliente
export const eliminarCliente = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//Editar cliente
export const editarCliente = async (id, cliente) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}