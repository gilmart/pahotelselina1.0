import express from 'express'
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import { ControladorRegistro, ControladorRegistro } from '../Controllers/ControladorRegistro.js'


let controladorHabitacion=new ControladorHabitacion() //instanciando - usando el controlador
let controladorRegistro=new ControladorRegistro()

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelselina/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelselina/habitacion/:id',controladorHabitacion.buscarHabitacionPorID)
rutasPersonalizadas.post('/hotelselina/habitacion', controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelselina/habitacion', controladorHabitacion.editarHabitacion)

rutasPersonalizadas.get('/hotelselina/registros', controladorRegistro.buscarRegistro)
rutasPersonalizadas.get('/hotelselina/registros/:id',controladorRegistro.buscarRegistroPorID)
rutasPersonalizadas.post('/hotelselina/registro', controladorRegistro.realizarrRegistro)
rutasPersonalizadas.put('/hotelselina/registro', controladorRegistro.editarRegistro)