// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
export default class UserValidator {
  public async RegisterUser(ctx: HttpContext) {
    const data = ctx.request.all()
    const createUserValidator = vine.compile(
      vine.object({
        fullName: vine.string().trim(),
        email: vine.string().unique(async (db, value) => {
          const user = await db.from('users').where('email', value).first()
          return !user
        }),
        password: vine.string().trim(),
      })
    )
    return await createUserValidator.validate(data)
  }
}
