
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.office = office;
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }
    
    getOffice() {
        return this.office
    }
}

module.exports = Employee;