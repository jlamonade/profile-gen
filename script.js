// Dependencies

const inquirer = require("inquirer");
const fs = require("fs");

// Starting Data
const questions = [
  {
    type: "input",
    message: "Enter Name: ",
    name: "userName",
  },
  {
    type: "input",
    message: "Enter location: ",
    name: "userLocation",
  },
  {
    type: "input",
    message: "Enter bio: ",
    name: "userBio",
  },
  {
    type: "input",
    message: "Enter Github link: ",
    name: "userGithub",
  },
  {
    type: "input",
    message: "Enter Linkedin link: ",
    name: "userLinkedin",
  },
];

// Functions

const askQuestions = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    renderHTML(answers);
  });
};

const renderHTML = ({
  userName,
  userLocation,
  userBio,
  userGithub,
  userLinkedin,
}) => {
  const templateHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <title>Porfolio Gen</title>
    </head>
    <body>
      <div class="jumbotron">
        <h1 class="display-4">${userName}</h1>
        <p class="lead">${userLocation}</p>
        <p class="lead">
          ${userBio}
        </p>
        <hr class="my-4" />
        <p>
          <a class="btn btn-primary" href="${userGithub}" target="_blank">Github</a>
          <a class="btn btn-primary" href="${userLinkedin}" target="_blank">Linkedin</a>
        </p>
      </div>
    </body>
  </html>
  `;
  fs.writeFile("index.html", templateHTML, "utf-8", (err) =>
    err ? console.log(err) : console.log("Successfully generated profile")
  );
};

// Init

askQuestions(questions);
