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

    return await createUserValidator.validate(ctx.request.body())
  }

  public async LoginUser(request: any) {
    const loginUserValidator = vine.compile(
      vine.object({
        email: vine.string().unique(async (db, value) => {
          const user = await db.from('users').where('email', value).first()
          return user
        }),
        password: vine.string().trim(),
      })
    )
    const requestData = request.body
    console.log('validator called', requestData)

    return await loginUserValidator.validate(request.body())
  }
  public async AddDept(request:any){
    const departmentValidator = vine.compile(
      vine.object({
        deptname: vine.string().trim(),
      })
    )
    return await departmentValidator.validate(request.body())
  }
}
