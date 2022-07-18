//page links and packages 
const inquirer = require('inquirer');
const fs = require('fs');
//const addEmployee = require('./lib/employee');
const templateHTML = require('./src/templateHTML');

//team member files
const Manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

//array for team members
const compTeamArray = [];

//prompt question list start w. Manager
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'user input',
            name: 'name',
            message: 'Enter the Managers name for the team',
        },
        {
            type: 'user input',
            name: 'id',
            message: "Enter the Managers company ID",
        },
        {
            type: 'user input',
            name: 'email',
            message: "Enter the Managers email address",
        },
        {
            type: 'user input',
            name: 'office',
            message: "Enter the Managers office number",
        },

    ])

    .then(managerInput => {
        const { name, id, email, office } = managerInput;
        const manager = new Manager (name, id, email, office);
        compTeamArray.push(manager);
        //console.log(manager);
    })
};

const addEmployee = () => {

return inquirer.prompt ([
    
    {
        name: 'role',
        type: 'list',
        message: "Select the employees role with the Company",
        choices: ['Intern', 'Engineer']
    },
    {
        type: 'user input',
        name: 'name',
        message: "Enter the employees name",
    },
    {
        type: 'user input',
        name: 'email',
        message: "Enter the employees email address",
    },
    {
        type: 'user input',
        name: 'school name',
        message: "Enter the name of school employee attends",
        when: (input) => input.role === "Intern",
    },
    {
        type: 'user input',
        name: 'github',
        message: "Enter the employees github username",
        when: (input) => input.role === "Engineer",
    },
    // {
    //     type: 'check',
    //     name: 'checkMemberAdded',
    //     message: "Do you need to any more employees to your team?",
    //     default: false
    // }
])

.then( employeeInfo => {
    let { name, id, email, role, school, github, confirmAddEmployee } = employeeInfo;
    let employee;

    if (role === "Engineer") {
        employeeInfo = new engineer (name, id, email, github);
        console.log(employee);

    } else if (role === "Intern") {
        employeeInfo = new intern (name, id, email, school);

        console.log(employee);
    }

    compTeamArray.push(employee);

    if (confirmAddEmployee) {
        return addEmployee(compTeamArray);
    } else {
        return compTeamArray;
        }
    })
};

// const writeFile = (data) => {
//     fs.writeFile('./dist/index.html'), 
//     console.log("Your team has been successfully created!");
// };

addManager()
.then(addEmployee)
.then(compTeamArray => {
    return templateHTML(compTeamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
});


//resource: https://www.youtube.com/watch?v=bJY3KfM77pc
//testing resource: https://threejs.org/docs/#manual/en/buildTools/Testing-with-NPM
//info about Javascript super command: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
//Inquirer Prompts: https://www.tabnine.com/code/javascript/functions/inquirer/Inquirer/prompt