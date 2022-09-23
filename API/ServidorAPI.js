import express from 'express'
import { rutasPersonalizadas } from '../Routes/rutas.js'

export class ServidorAPI{

    constructor(){
        this.app = express()
        this.atenderPeticiones()
    }

    //METODOS DE LA CLASE ServidorAPI
    despertarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log("EXITO ENCENDIENDO SERVIDOR: "+process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutasPersonalizadas)
    }

    conectarConBD(){}
}