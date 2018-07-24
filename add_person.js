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

knex.select(['first_name', 'last_name', 'birthdate']).from('famous_people')
    .where('first_name', '=', process.argv[2])
    .asCallback(function (err, rows) {
        if (err) return console.error(err);
        printrows(rows);
        closeConnection();
    });

    