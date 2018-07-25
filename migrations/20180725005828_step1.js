exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('milestones', function (table) {
            table.integer('people_id').unsigned()
            table.foreign('people_id').references('famous_people.id')
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('milestones')
    ])  
};
