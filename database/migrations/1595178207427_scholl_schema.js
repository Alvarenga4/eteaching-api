'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchollSchema extends Schema {
  up () {
    this.create('scholls', (table) => {
      table.increments()
      table.string('name')
      table.string('address').notNullable()
      table.integer('number').notNullable()
      table.string('complement')
      table.string('district').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('image_url')
      table.timestamps()
    })
  }

  down () {
    this.drop('scholls')
  }
}

module.exports = SchollSchema
