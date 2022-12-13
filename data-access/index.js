//import * as models from './models'

import { employeesModel } from '../models/index.model'

import manageEmployees from './db/employees.db'

const employeesDb = manageEmployees(employeesModel)

export {
    employeesDb,
}