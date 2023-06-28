import axios from 'axios';



var flutuantesService = {
  getFlutuantes: async () => {
    var flutuanteAPI = axios.get('http://localhost:5000/flutuantes');
    return await flutuanteAPI;
  },

  getOneFlutuantes: async (id) => {
    var flutuanteAPI = axios.get('http://localhost:5000/flutuantes/'+id);
    return await flutuanteAPI;
  },
  
  deleteFlutuantes: async (id) => {
    var flutuanteAPI = axios.delete('http://localhost:5000/flutuantes/'+id);
    return await flutuanteAPI;
  },

  createFlutuantes: async (flutuante) => {
    var flutuanteAPI = axios.post('http://localhost:5000/flutuantes', flutuante);
    return await flutuanteAPI;
  },

  updateFlutuantes: async (id, flutuante) => {
    var flutuanteAPI = axios.put('http://localhost:5000/flutuantes/'+id, flutuante);
    return await flutuanteAPI;
  },

};

export default flutuantesService;