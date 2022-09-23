export class ControladorRegistro{

    constructor(){}

    buscarRegistro(request, response){
        
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta",
                 "datos":"AQUI VAN LOS DATOS DE HABITACIONES"
             })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null
            })
        }      
    }

    buscarRegistroPorID(request, response){
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta",
                 "datos":"AQUI VA EL DATOS DE HABITACION POR ID"
             })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta de habitacion por id"+error,
                "datos":null
            })
        }      
    }

    realizarrRegistro(request, response){
        try{
            response.status(200).json({
                "mensaje":"exito registrando la habitacion",
                 "datos":null
             })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null
            })
        }      

    }

    editarRegistro(request, response){
        try{
            response.status(200).json({
                "mensaje":"exito editando la habitacion",
                 "datos":null
             })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null
            })
        }      
    }
}