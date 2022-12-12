import { employeesDb } from "../../data-access";
import Create from "./create";

const createUseCase = Create({ employeesDb })

export default createService = Object.freeze({ createUseCase })

export { createUseCase }