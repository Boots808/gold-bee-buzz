const Employee = require('../lib/employee.js');

class Employee {
    constructor(id, name, email, office) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.office = office;
    }

    getId() {
        return.this.id;
    }

    getName() {
        return.this.name;
    }
    getEmail() {
        return this.email;
    }
    getOffice() {
        return this.office
    }
}

//Need to add job title in 

module.exports = Employee;