import axios from 'axios';



var clientesService = {
  getClientes: async () => {
    var clienteAPI = axios.get('http://10.0.2.2/clientes');
    return await clienteAPI;
  },

  getoneClientes: async (id) => {
    var clienteAPI = axios.get('http://10.0.2.2/clientes/'+id);
    return await clienteAPI;
  },

  getClienteByCpf: async (clientecpf) => {
    var clienteAPI = axios.get('http://10.0.2.2/clientes/'+clientecpf);
    return await clienteAPI;
  },
  
  deleteClientes: async (id) => {
    var clienteAPI = axios.delete('http://10.0.2.2/clientes/'+id);
    return await clienteAPI;
  },

  createClientes: async (cliente) => {
    var clienteAPI = axios.post('http://10.0.2.2:5000/clientes', cliente);
    return await clienteAPI;
  },

  updateClientes: async (id, cliente) => {
    var clienteAPI = axios.put('http://10.0.2.2:5000/clientes/'+id, cliente);
    return await clienteAPI;
  },

};

export default clientesService;