import express from 'express'
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion() //instanciando - usando el controlador

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelselina/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelselina/habitacion/:id',controladorHabitacion.buscarHabitacionPorID)
rutasPersonalizadas.post('/hotelselina/habitacion', controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelselina/habitacion', controladorHabitacion.editarHabitacion)