const Employee = require('./employee');

//add super command for extension of employee
class Engineer extends Employee {
    constructor(id, name, email, office) {
        super (id, name, email);

        this.office = office;
    }

//Show role as manager
    getRole () {
        return "Engineer";
    }

//add github
    getGithub () {
        return this.getGithub;
    }
}

//execute command
module.exports = Engineer;