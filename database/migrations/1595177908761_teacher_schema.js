'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeacherSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.increments()
      table.string('name', 260).notNullable()
      table.string('last_name', 260).notNullable()
      table.string('cpf', 11).notNullable()
      table.string('birthday').notNullable()
      table.string('address').notNullable()
      table.integer('number').notNullable()
      table.string('complement')
      table.string('district').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('education_area').notNullable()
      table.string('high_scholl_name').notNullable()
      table.string('year_formation').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.boolean('active').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('teachers')
  }
}

module.exports = TeacherSchema
