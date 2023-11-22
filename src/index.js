const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config(); //Con esto, mando llamar las variables de ambiente que definí en el archivo .env
const userRoutes = require("./routes/user"); //importo todas las funciones que definí en el archivo user

const app = express();
const port = process.env.PORT || 9000; //PORT es una variable de ambiente propiedad de express

//middleware
app.use(express.json());
app.use('/api',userRoutes); //Esto del middleare sirve para que en automático se anteponga "api" a la ruta de todos los endPoints

app.get('/', (req, res) => {
    res.send('Welcome to this, my api:' + process.env.MONGODB_URI);

});

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas')) //Con esto, obtengo el resultado de la conexión
.catch((error) => console.error(error)) //Si no se logra la conexión, muestro el error en terminal

app.listen(port, () => console.log(`server listening on port: ${port}`))

//nodemon -D es utilería para que se ejecute y guarde en automático el proyecto
//mongoose es la utilería para conectar con MongoDB
//dotenv es una utilería que permite crear variables de ambiente, una manera de no tener expuestas las variables
