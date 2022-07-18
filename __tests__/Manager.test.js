//test prompt not working for me 

const manager = ('/lib/manager.js');

//test for object for employee
test("Manager properties populate", () => {
    const = new Manager();
    
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.name).toEqual(expect.any(Strng));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});

//call for ID
test('gets ID', () => {
    const manager = new Manager('Steve', '38', 'Steve38@hotmail.com');

    expect(manager.getId()).toEqual(expect.any(Number));
});

//call for name
test('get name', () => {
    const manager = new ('Steve', '38', 'Steve38@hotmail.com');

    expect(manager.getName()).toEqual(expect.any(String));
});

//call for email
test('get manager', () => {
    const manager = new Manager('Steve', '38', 'Steve38@hotmail.com');

    expect(manager.getEmail()).toEqual(expect.any(String));
});

//call for office #
test('get office', () => {
    const manager = new Manager('Steve', '38', 'Steve38@hotmail.com');

    expect(manager.getOffice()).toEqual(expect.any(String));
});

//call for role
test('get role', () => {
    const manager = new Intern('Steve', '38', 'Steve38@hotmail.com');

    expect(manager.getRole()).toEqual(expect.any(String));
});