'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/signUp', 'AuthController.store').middleware(['guest'])
  Route.post('/signIn', 'AuthController.create').middleware(['guest'])
})
  .prefix('v1/teacher')
  .namespace('TeacherAuth')
