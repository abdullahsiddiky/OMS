// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import userService from './UserService'
// import UserValidator from './UserValidator'
export default class UsersController {
  // private Validator: UserValidator
  // private Service: userService
  // constructor() {
  //   this.Validator = new UserValidator()
  //   this.Service = new userService()
  // }
  // public async RegisterUser(ctx: HttpContextContract) {
  //   try {
  //     const payload = await this.Validator.RegisterUser(ctx)
  //     return this.Service.RegisterUser(payload)
  //   } catch (error) {
  //     return {
  //       status: 404,
  //     }
  //   }
  // }
  // public async LoginUser({ request, auth }: HttpContextContract) {
  //   try {
  //     const payload = await this.Validator.LoginUser(request)
  //     return this.Service.LoginUser({ auth, payload })
  //   } catch (error) {
  //     return {
  //       status: 404,
  //     }
  //   }
  // }
  // public async Logout({ request, auth }: HttpContextContract) {
  //   try {
  //     return this.Service.Logout({ auth })
  //   } catch (error) {
  //     return {
  //       status: 404,
  //     }
  //   }
  // }
  // public async CreateTodo({ request, auth }: HttpContextContract) {
  //   try {
  //     const payload = await this.Validator.CreatePost(request)
  //     return this.Service.CreatePost({ auth, payload })
  //   } catch (error) {
  //     return {
  //       status: 404,
  //     }
  //   }
  // }

  // public async GetData({ auth }: HttpContextContract) {
  //   try {
  //     const user_id = await auth.use('api').user?.id
  //     if (user_id) {
  //       return this.Service.GetData({ auth })
  //     } else {
  //       return {
  //         status: 405,
  //       }
  //     }
  //   } catch (error) {
  //     return error
  //   }
  // }
  public async check(){
    return "checked api "
  }
}
