const Employee = require('./employee');

//add super command for extension of employee
class intern extends Employee {
    constructor(id, name, email, office, role) {
        super (id, name, email);

        this.office = office;
    }

//Show role as manager
    get role () {
        return "Intern";
    }
}

//execute command
module.exports = Intern;