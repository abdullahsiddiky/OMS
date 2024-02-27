// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
export default class UserValidator {
  public async RegisterUser(ctx: HttpContext) {
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
    return await createUserValidator.validate(ctx.request.all())
  }

  public async LoginUser(request:any){
    const loginUserValidator = vine.compile(
      vine.object({
        email:vine.string().unique(async (db, value)=>{
          const user = await db.from('users').where('email', value).first()
          return user
        }),
        password:vine.string().trim()
      })
    )
      return await loginUserValidator.validate(request.all())
  }
}
