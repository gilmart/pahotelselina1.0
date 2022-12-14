export class ControladorHabitacion{

    constructor(){}

    buscarHabitaciones(request, response){
        
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

    buscarHabitacionPorID(request, response){
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

    registrarHabitacion(request, response){
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

    editarHabitacion(request, response){
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