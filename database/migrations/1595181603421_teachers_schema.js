'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeachersSchema extends Schema {
  up () {
    this.table('teachers', (table) => {
      // alter table
      table.integer('image_id').references('id').inTable('images').onUpdate('CASCADE').onDelete('CASCADE')
    })
  }

  down () {
    this.table('teachers', (table) => {
      // reverse alternations
      table.integer('selfie_id')
    })
  }
}

module.exports = TeachersSchema
