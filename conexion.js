const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/amazon', { dbName: 'amazon' });


const objectobd = mongoose.connection

objectobd.on('connected', ()=>{console.log('Conexion correcta a MongoDB')})
objectobd.on('error', ()=>{console.log('Error en la conexion a MongoDB')})

module.exports = mongoose

