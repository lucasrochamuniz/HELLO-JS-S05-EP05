

exports.up = knex => knex.schema.table('contato', t => {
    t.string('telefone')
})

exports.down = function(knex, Promise){
    return knex.schema.dropTable('contato')
}




