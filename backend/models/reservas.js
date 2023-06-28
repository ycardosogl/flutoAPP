const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

var Reserva = new Schema ({

    acompanhantes: { type:Number, required: true},
    data        : { type:Date,  required: true},            
    horainicial : { type:Number,  required: true},
    horafinal   : { type:Number,  required: true},    
    valor       : { type:Number,  required: true},
      
})

const ReservaModel = mongoose.model('reservas_colls', Reserva);


module.exports = {ReservaModel}