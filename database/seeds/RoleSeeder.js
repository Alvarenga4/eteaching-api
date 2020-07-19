'use strict'

const Role = use('Role')

class RoleSeeder {
  async run() {
    await Role.create({
      name: 'Admin',
      slug: 'admin',
      description: 'Administrador/Cordenador'
    })

    await Role.create({
      name: 'Teacher',
      slug: 'teacher',
      description: 'Professor'
    })

    await Role.create({
      name: 'Default',
      slug: 'default',
      description: 'Aluno da plataforma'
    })
  }
}

module.exports = RoleSeeder
