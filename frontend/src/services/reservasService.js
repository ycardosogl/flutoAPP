import axios from 'axios';
import clientesService from '../services/clientesService';


var reservasService = {
  getReservas: async () => {
    var reservaAPI = axios.get('http://10.0.2.2:5000/reservas');
    return await reservaAPI;
  },

  getOneReservas: async (id) => {
    var reservaAPI = axios.get('http://10.0.2.2:5000/reservas/'+id);
    return await reservaAPI;
  },
  
  deleteReservas: async (id) => {
    var reservaAPI = axios.delete('http://10.0.2.2:5000/reservas/'+id);
    return await reservaAPI;
  },

  createReservas: async (reserva) => {
    var reservaAPI = axios.post('http://10.0.2.2:5000/reservas', reserva);
    return await reservaAPI;
  },

  updateReservas: async (id, reserva) => {
    var reservaAPI = axios.put('http://10.0.2.2:5000/reservas/'+id, reserva);
    return await reservaAPI;
  },

  
};

export default reservasService;