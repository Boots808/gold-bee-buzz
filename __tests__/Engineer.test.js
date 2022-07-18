// //test prompt not working for me

const Engineer = ('/lib/engineer.js');

//test for object for employee
test("Engineer properties populate", () => {
    const = new Engineer();
    
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.name).toEqual(expect.any(Strng));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.office).toEqual(expect.any(Number));
});

//call for ID
test('gets ID', () => {
    const engineer = new Engineer('Haley', '45', 'Haley45@hotmail.com');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

//call for name
test('get name', () => {
    const engineer = new Engineer('Haley', '45', 'Haley45@hotmail.com');

    expect(engineer.getName()).toEqual(expect.any(String));
});

//call for email
test('get email', () => {
    const engineer = new Engineer('Haley', '45', 'Haley45@hotmail.com');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

//call for office #
test('get office', () => {
    const engineer = new Engineer('Haley', '45', 'Haley45@hotmail.com');

    expect(engineer.getOffice()).toEqual(expect.any(String));
});

//call for role
test('get role', () => {
    const engineer = new Engineer('Haley', '45', 'Haley45@hotmail.com');

    expect(engineer.getRole()).toEqual(expect.any(String));
});