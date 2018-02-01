const contato = [
  { nomecontato: 'a', telefone: '123'},
  { nomecontato: 'b', telefone: '456'},
  { nomecontato: 'c', telefone: '789'}
]

exports.up = knex => knex('contato').insert(contato)

exports.down = knex => knex('contatos').dropTable()
