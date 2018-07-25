exports.up = function(knex, Promise) {
    return createMilestoneTable();
  
    function createMilestoneTable() {
      return knex.schema.createTable('milestones', function (table) {
        table.increments('id');
        table.string('description');
        table.date('data_achieved');
        table.timestamps();  
      });
    }
  };

  exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('milestones')
    ])
};  