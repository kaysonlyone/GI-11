const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get information about all employees
app.get('/employees', (req, res) => {
    // Read the JSON file containing employee data
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const employees = JSON.parse(data);
        res.json(employees);
    });
});

// Endpoint to get information about a specific employee by ID
app.get('/employees/:employeeID', (req, res) => {
    const employeeID = req.params.employeeID;

    // Read the JSON file containing employee data
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const employees = JSON.parse(data);
        const employee = employees.find(emp => emp.employeeID === parseInt(employeeID));

        if (!employee) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }

        res.json(employee);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});