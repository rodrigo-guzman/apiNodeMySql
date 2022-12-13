import { createUseCase } from '../use-cases/employees';
import makeExpressCallback from 'routes/make-callback';

import { Router } from 'express'

const router = Router()

//router.get('/employees', getEmployees)

//router.put('/employees', updateEmployees)

//router.delete('/employees', deleteEmployees)

//router.post('/employees', createEmployees)

router.post('/employees', makeExpressCallback(createUseCase))

export default router;