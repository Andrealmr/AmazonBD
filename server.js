const express = require('express')
const app = express()

//Importar conexion a MongoDB
const archivoBD = require('./conexion')

//Importacion del archivo de rutas y modelo
const rutaresena = require('./rutas/resena')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/resena', rutaresena)

app.get('/', (req, res) => {
    res.end('Servidor en ejecucion')
})

//Configuracion del Server
app.listen(5000, function(){
    console.log('El servidor está corriendo correctamente ')
    
})