'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/signUp', 'AuthController.store').middleware(['guest'])
})
  .prefix('v1/admin')
  .namespace('AdminAuth')
