const Employee = require('./employee');

//add super command for extension of employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);

        this.github = github;
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