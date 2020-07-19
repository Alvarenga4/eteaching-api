'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminSchema extends Schema {
  up () {
    this.create('admins', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('last_name').notNullable()
      table.string('cpf', 14).notNullable().unique()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.boolean('active').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('admins')
  }
}

module.exports = AdminSchema
