// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from '@adonisjs/core/http'
import UserValidator from './UserValidator.ts'
import userService from './UserService.ts'
export default class UsersController {
  private Validator: UserValidator
  private Service: userService
  constructor() {
    this.Validator = new UserValidator()
    this.Service = new userService()
  }
  public async RegisterUser(ctx: HttpContext) {
    try {
      return this.Service.RegisterUser(await this.Validator.RegisterUser(ctx))
    }catch(error){
      return error.status
    }
  }
}
