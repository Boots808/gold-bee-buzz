//test prompt not working for me

const Employee = require("../lib/employee.js");


//test for object for employee
test("Employee properties populate", () => {
    const = new Employee();
    
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.name).toEqual(expect.any(Strng));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.office).toEqual(expect.any(Number));
});

//call for ID
test('gets ID', () => {
    const employee = new Employee('Leah', '30', 'leah30@hotmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//call for name
test('get name', () => {
    const employee = new Employee('Leah', '30', 'leah30@hotmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//call for email
test('get email', () => {
    const employee = new Employee('Leah', '30', 'leah30@hotmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

//call for office #
test('get office', () => {
    const employee = new Employee('Leah', '30', 'leah30@hotmail.com');

    expect(employee.getOffice()).toEqual(expect.any(String));
});

//call for role
test('get role', () = > {
    const employee = new Employee('Leah', '30', 'leah30@hotmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});



