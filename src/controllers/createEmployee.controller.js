import { pool } from "../../data-access/db/db.js"

export const createEmployees = async (req, res) => {
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee(name, salary) values (?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}