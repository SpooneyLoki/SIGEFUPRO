import axios from "axios";

const URL = "http://localhost:8080/api/usuarios";

class ClienteService {
    listarClientes() {
        return axios.get(URL);
    }

    guardarCliente(cliente) {
        return axios.post(URL, cliente);
    }

    actualizarCliente(id, cliente) {
        return axios.put(`${URL}/${id}`, cliente);
    }

    eliminarCliente(id) {
        return axios.delete(`${URL}/${id}`);
    }
}

export default new ClienteService();