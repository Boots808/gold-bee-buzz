//page links and packages 
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const generateHTML = require('./src/templateHTML');

//team member files
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//array for team members
const compTeamArray = [];

//prompt question list start
const addIntern = () => {
    return inquirer.prompt ([
    {
       type: "user input",
       name: "id",
       message: "Please enter your intern's ID", 
    },
    {
        type: "user input",
        name: "name",
        message: "Please enter your intern's full name",
    },
    {
    type: "user input",
    name: "email",
    message: "Please enter the intern's email address",
    },
    {
    type: "user input",
    name: "office",
    message: "Please enter the interns office number",
},
{
    type: "user list",
    name: "role",
    message: "Please confirm the employee's company role is an Intern?",
    choices: ["true, false"],
},
{
    type: "user input",
    name: "school",
    message: "Please enter attending school name",
}

])
.then(internInput => {
    const {id, name, email, school } = internInput;
    const intern = new Intern (id, name, email, office);

    compTeamArray.push(intern);
    console.log(intern);

})
};

const addEmployee = () => {
    console.log('Added Intern to the Team');

    //const addEngineer = () => {

    return inquirer.prompt ([
        {
            type: "user input",
            name: "id",
            message: "Please enter the Engineer's company ID" 
         },
         {
             type: "user input",
             name: "name",
             message: "Please enter the Engineer's full name"
         },
         {
         type: "user input",
         name: "email",
         message: "Please enter the Engineer's email address",
         },
         {
         type: "user input",
         name: "office",
         message: "Please enter the Engineer's office number",
     },
    ])}

    //.then(engineerInput => {
   // const {id, name, email, github } = engineerInput;
    //const engineer = new Engineer (id, name, email, role, github);

    //compTeamArray.push(engineer);
   // console.log(engineer);

//})

const addMember = () => {
    console.log('Added Engineer to the Team');
}

const addManager = () => {

    return inquirer.prompt ([
        {
            type: "user input",
            name: "nodeid",
            message: "Please enter the Manager's company ID" 
         },
         {
             type: "user input",
             name: "name",
             message: "Please enter the Manager's full name"
         },
         {
         type: "user input",
         name: "email",
         message: "Please enter the Manager's email address",
         },
         {
         type: "user input",
         name: "office",
         message: "Please enter the Manager's office number",
     },
    ])}

//.then(managerInput => {
    const {id, name, email, office } = managerInput;
   // const manager = new Manager (ID, name, email, office);

    compTeamArray.push(manager);
    console.log(manager);

//})

const newMember = () => {
    console.log('Added Manager to the Team');
}

const {id, name, email, office, role } = employeeInfo;
let employee;
//end of questions array

inquirer.prompt(createEmployee).then((ansers) => {
    const newEmployee = new Employee(answer.id, answer.name, answer.email, answer.role)
    employeeTeam.push(newEmployee);

    createEmployeeTeam();
});

// create HTML file
const writeFile = data => {
    fs.writeFile('./dist/index.html');

    }

    addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })

    .then(templateHTML => {
        return writeFile(templateHTML);
    });
    



//function call to initialize app
//init();












//resource: https://www.youtube.com/watch?v=bJY3KfM77pc
//testing resource: https://threejs.org/docs/#manual/en/buildTools/Testing-with-NPM
//info about Javascript super command: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
//Inquirer Prompts: https://www.tabnine.com/code/javascript/functions/inquirer/Inquirer/prompt