//test prompt not working for me

const intern = ('/lib/intern.js');

//test for object for employee
test("Intern properties populate", () => {
    const = new Intern();
    
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.name).toEqual(expect.any(Strng));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.office).toEqual(expect.any(Number));
});

//call for ID
test('gets ID', () => {
    const intern = new Intern('Clyde', '18', 'Clyde18@hotmail.com');

    expect(intern.getId()).toEqual(expect.any(Number));
});

//call for name
test('get name', () => {
    const intern = new Intern('Clyde', '18', 'Clyde18@hotmail.com');

    expect(intern.getName()).toEqual(expect.any(String));
});

//call for email
test('get email', () => {
    const intern = new Intern('Clyde', '18', 'Clyde18@hotmail.com');

    expect(intern.getEmail()).toEqual(expect.any(String));
});

//call for office #
test('get office', () => {
    const intern = new Intern('Clyde', '18', 'Clyde18@hotmail.com');

    expect(intern.getOffice()).toEqual(expect.any(String));
});

//call for role
test('get role', () => {
    const intern = new Intern('Clyde', '18', 'Clyde18@hotmail.com');

    expect(intern.getRole()).toEqual(expect.any(String));
});