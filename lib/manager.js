const Employee = require('./employee');

//add super command for extension of employee
class Manager extends Employee {
    constructor(id, name, email, office) {
        super (id, name, email);

        this.office = office;
    }

//Show role as manager
    getRole () {
        return "Manager";
    }
}

//execute command
module.exports = Manager;