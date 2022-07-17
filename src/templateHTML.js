const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
    <div ckass="card h-100">
    <div class ="card-header">
        <h3>${intern.name}</h3>
        <h4>Intern</h4><i class="NEED">NEED</i>
    </div>
    
    <div class="card-body">
        <p class="id">Employee ID: {intern.id}</p>
        <p class="email">Email Address: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="office">Office Number: ${intern.office}</p>
    </div>
</div>
</div>
`;
}

//Engineer Card Layout
const generateEngineer = function (engineer) {
    return `
    <div class="card h-100">
    <div class="card-header">
    <h3>${engineer.name}</h3>
    <h4>Engineer</h4><i class="NEED">NEED</i>
</div>

<div class="card-body">
    <p class="id">Employee ID: ${engineer.id}</p>
    <p class="email">Email Address: <a href="mailto:${engineer.email}">${enigineer.email}</a></p>
    <p class="office">Office Number: ${engineer.office}<p>
        </div>
    </div>
</div>
`
}

//Manager Card Layout
const generateManager = function (manager) {
    return `
    <div class="card h-100">
    <div class="card-header">
    <h3>${manager.name}</h3>
    <h4>Team Manager</h4><i class="Need">NEED</i>
</div>

<div class="card-body">
    <p class="id">Employee ID: ${manager.id}</p>
    <p class="email">Email Address: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="office">Office Number: ${manager.office}<p>
        </div>
    </div>
</div>
`
}

templateHTML = (data) => {
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole();
    

    //functions for each role
    if (role === 'Intern') {
        const cardIntern = generateIntern(employee);

        cardArray.push(cardIntern);
    }

    if (role === 'Engineer') {
        const cardEngineer = generateEngineer(employee);

        cardArray.push(cardEngineer);
    }

    if (role === 'Manager') {
        const cardManager = generateManager(employee);

        cardArray.push(cardManager);
    }
}

//join cards and array (strings)
const teamCards = pageArray.join('')

//return
const generateTeamMembers = generatePage(teamCards);
return generateTeamMembers;

}

//create HTML page
const generatePage = function (teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team-Profile</title>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="navbar" id="nav">
            <span class="navbar-brand mb-o h1 w-100 text-center" id="navbar-text">Team Profile Chart</span>
        </nav>
    </header>
    <section>
        <div class="container">
            <div class="row justify-content-center" id="cards">
            ${teamCards}
        </div>
    </div>
</section>
</body>
</html>

`;
}


module.exports = templateHTML;