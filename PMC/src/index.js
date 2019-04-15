const express = require('express');
const morgan = require('morgan');
const path = require('path');
const watson = require('watson-developer-cloud/personality-insights/v3');


const { mongoose } = require('./database'); 
const {profile} = require('./watson');

//Inicializo el servidor express.
const app = express();

//--------------------------------------------Settings----------------------------------------------

app.set('port',process.env.PORT || 8080);

//----------------------Middleware (Ejecuta antes de llegar las rutas)-----------------------------

//Muestr las peticiones a la pagina.
app.use(morgan('dev'));
//Reciba si llega un json y me permite enviar un json.
app.use(express.json());


//----------------------------------------------Routes---------------------------------------------

app.use('/api/task',require('./routes/task.routes'));

//---------------------------------------------Static files---------------------------------------

app.use(express.static(path.join(__dirname,'public')));

//Run server express.
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
})
