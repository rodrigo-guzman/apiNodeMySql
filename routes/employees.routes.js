import controller from '../use-cases/employees'
import makeExpressCallback from 'routes/make-callback';



import { Router } from 'express'
//import { getEmployees, updateEmployees, deleteEmployees } from '../controllers/employes.controller.js'
import { createEmployees } from '../controllers/createEmployee.controller.js'
const router = Router()

//router.get('/employees', getEmployees)

//router.put('/employees', updateEmployees)

//router.delete('/employees', deleteEmployees)

//router.post('/employees', createEmployees)
router.post('/employees', makeExpressCallback(controller.createUseCase))

export default router;