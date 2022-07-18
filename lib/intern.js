const Employee = require('./employee');

//add super command for extension of employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

//Show role as intern
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