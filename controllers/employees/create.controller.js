import { create } from "../../use-cases/employees"

export default Object.freeze({
    create: (httpRequest) => create(httpRequest)
})

import { createUseCase } from "../../use-cases/employees";

// Create and Save a new Employee
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Employee
    const employee = new createUseCase({
        name: req.body.name,
        salary: req.body.salary
    });

    // Save Employee in the database
    createUseCase.Create(employee, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Employee."
            });
        else res.send(data);
    });
};