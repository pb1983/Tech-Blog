# Tech-Blog

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Links](#links) 

## Description

 The Tech Blog provides developers with a forum to share their experiences and perspectives within the coding industry through blog posts that can be viewed and commented on by other members of the community. Using the Model View Controller framework, this application retrieves posts made by site members and stores them in a mySQL database. The posts are rendered to the browser using .handlebars templates and also includes an option to comment on each individual entry for those who sign up with a username, e-mail address, and password. Login information is tracked with the express-session middleware module to ensure that only account-holders are able to create and comment on posts.


 ## Installation

- Node.js - To download the latest version of npm, on the command line, run the following command: 
"npm install -g npm". Once installed, the questionnaire can be run by typing "node index.mjs" in the terminal. 

- Express.js - Create a package.json first with the npm init command. Installation is done using the npm install command: $ npm install express

- Sequelize: npm install --save sequelize

    - You'll also have to manually install the driver for your database of choice:

    - One of the following:
       - npm install --save pg pg-hstore # Postgres
       - npm install --save mysql2
       - npm install --save mariadb
       - npm install --save sqlite3
       - npm install --save tedious # Microsoft SQL Server
       - npm install --save oracledb # Oracle Database


- Handlebars: The reference implementation of Handlebars is written in JavaScript. It is most commonly installed using npm or yarn:
    - npm install handlebars
    - yard add handlebars


## Links

[Repository](https://github.com/pb1983/OMR-Ecommerce)

[Heroku Link](https://dashboard.heroku.com/apps/ancient-tundra-72835)

