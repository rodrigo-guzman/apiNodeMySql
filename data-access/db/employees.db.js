import { pool } from "./db.js"

// constructor
const Employee = function (employee) {
    this.name = employee.name;
    this.salary = employee.salary;
};

Employee.create = async (req, res) => {
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee(name, salary) values (?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}