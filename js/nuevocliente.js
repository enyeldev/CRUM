import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";



(() => {

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);


    function validarCliente(e) {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        //obj de cleinte
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        // Viendo si los inputs estan vacios
        const arrValoresInput = [nombre, email, telefono, empresa];
        const valoresInput = arrValoresInput.some(e => e == '');


        if (valoresInput) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        nuevoCliente(cliente);
    }
})();