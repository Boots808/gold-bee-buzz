const inquirer = require('inquirer');
//const path - require('path');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');
//const { isTypedArray } = require('util/types');

//information about and objects for team members
//const teamInfo = [];

// NEED to add job title somewhere

//prompt question list
inquirer 
.prompt([
    {
       type: "input",
       name: "id",
       message: "Please enter the Manager's ID" 
    },
    {
        type: "input",
        name: "name",
        message: "Please enter the Manager's Name"
    },
    {
    type: "input",
    name: "email",
    message: "Please enter the Manager's Email Address",
    },
    {
    type: "input",
    name: "office",
    message: "Please enter the Manager's Office Number",
}

]);

.then(answers => {
    const manager = new ManagerInfo(answers.managerID, answers.managerName, answers.managerEmail, answers.managerOffice)
    teamInfo.push(manager);
    isTypedArray.push(answers.managerID);
    fs.createReadStream();
})











//resource: https://www.youtube.com/watch?v=bJY3KfM77pc
//testing resource: https://threejs.org/docs/#manual/en/buildTools/Testing-with-NPM
//info about Javascript super command: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super