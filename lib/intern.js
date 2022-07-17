const Employee = require('./employee');

//add super command for extension of employee
class Intern extends Employee {
    constructor(id, name, email, office) {
        super (id, name, email);

        this.school = school;
    }

//Show role as manager
    getRole () {
        return "Intern";
    }

//school function
getSchool () {
    return this.school;
    
    }
}

//execute command
module.exports = Intern;