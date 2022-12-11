import { Router } from 'express'
import { getEmployees, updateEmployees, deleteEmployees } from '../controllers/employes.controller.js'
import { createEmployees } from '../controllers/createEmployee.controller.js'
const router = Router()

router.get('/employees', getEmployees)

router.post('/employees', createEmployees)

router.put('/employees', updateEmployees)

router.delete('/employees', deleteEmployees)

export default router;