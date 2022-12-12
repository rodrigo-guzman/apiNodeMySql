export default function Create({ employeesDb }) {
    return async function create({ body }) {
        employeesDb.create({ body })
    }
}