// USAGE - node add_person.js Barack Obama 1961-08-04

const pg = require("pg");

const settings = require("./settings"); // settings.json

var knex = require('knex')({
    client: 'pg',
    connection: {
        host: settings.hostname,
        user: settings.user,
        password: settings.password,
        database: settings.database
    }
});

function printrows(result) {
    result.forEach(element => {
        var ind = result.indexOf(element) + 1;
        console.log("- " + ind, element.first_name, element.last_name + "," + "born " + "'" + element.birthdate.toISOString().substring(0, 10 + '') + "'");
    });
}

function closeConnection() {
    knex.destroy();
}

knex('famous_people')
    .insert({ first_name: process.argv[2] ,
              last_name: process.argv[3] ,
              birthdate :   process.argv[4]    
})
.then( function (result) {
    closeConnection();
    // res.json({ success: true, message: 'ok' });     // respond back to request
 })