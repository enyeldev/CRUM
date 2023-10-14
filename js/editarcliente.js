import { obtenerClientes , editarCliente} from "./API.js";
import { mostrarAlerta } from "./funciones.js";

(function () {


    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');




    const cliente = {
        nombre,
        email,
        telefono,
        empresa,
        id
    }

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosUrl = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosUrl.get('id'));


        //obtener clientes de api
        const clientes = await obtenerClientes();

        clientes.forEach(e => {

            if (e.id == idCliente) {
                const { nombre, email, telefono, empresa, id } = e

                nombreInput.value = nombre
                emailInput.value = email
                telefonoInput.value = telefono
                empresaInput.value = empresa

                cliente.id = id;

            }

        });
    })

    formulario.addEventListener('submit', guardarCambios);


    async function guardarCambios(e) {
        e.preventDefault()
        const arrValoresInput = [nombreInput.value, emailInput.value, telefonoInput.value, empresaInput.value];

        const inputvacios = arrValoresInput.some(e => e == '');

        if (inputvacios) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }


        //asignamos nuevo valores al objeto
        cliente.nombre = nombreInput.value
        cliente.email = emailInput.value
        cliente.telefono = telefonoInput.value
        cliente.empresa = empresaInput.value
        
        await editarCliente(cliente.id , cliente);
        
    }

})();