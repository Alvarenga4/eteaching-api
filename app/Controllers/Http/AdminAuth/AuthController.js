'use strict'

const Admin = use('App/Models/Admin');
const Database = use('Database')
const User = use('App/Models/User');

class AuthController {
  async store({response, request}) {
    const trx = await Database.beginTransaction();
    try {
      const {email, password, name, last_name, cpf} = request.all();
      const user = await User.create({ email, password }, trx);

      await user.admin().create({
        user_id: user.id,
        name,
        last_name,
        cpf
      }, trx);

      await trx.commit()
      return response.status(200).json({success: 'Cadastrado com sucesso'})
    } catch (err) {
      console.log(err);
      await trx.rollback()
      return response.status(500).json({error: 'Falha interna. Tente novamente.'})
    }
  }
}

module.exports = AuthController
