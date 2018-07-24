knex.select('name').from('users')
.where('id', '>', 20)
.andWhere('id', '<', 200)
.limit(10)
.offset(x)
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  knex.select('id').from('nicknames')
    .whereIn('nickname', _.pluck(rows, 'name'))
    .asCallback(function(err, rows) {
      if (err) return console.error(err);
      console.log(rows);
    });
});