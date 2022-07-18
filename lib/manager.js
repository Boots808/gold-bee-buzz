const Employee = require('./employee');

//add super command for extension of employee
class Manager extends Employee {
    constructor(name, id, email, office) {
        super (name, id, email);

        this.office = office;
    }

//Show role as manager
    getRole () {
        return "Manager";
    }
}

//execute command
module.exports = Manager;