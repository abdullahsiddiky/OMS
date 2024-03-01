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
    } catch (error) {
      return {
        status: 400,
      }
    }
  }
  public async LoginUser({ request }: HttpContext) {
    //422
    try {
      const payload = await this.Validator.LoginUser(request)
      return this.Service.LoginUser(payload)
    } catch (error) {
      return error
    }
  }
  public async Logout({ auth }: HttpContext) {
    try {
      return this.Service.Logout(auth)
    } catch (error) {
      return error.status
    }
  }
  public async AddDept({ request, auth }: HttpContext) {
    try {
      const payload = await this.Validator.AddDept(request)
      return this.Service.AddDept(payload, auth)
    } catch (error) {
      return error
    }
  }
  public async AddExpense({ request, auth }: HttpContext) {
    try {
      return this.Service.AddExpense(await this.Validator.AddExpense(request), auth)
    } catch (error) {
      return error
    }
  }
  public async AddIncome({ request, auth }: HttpContext) {
    console.log('hit income')
    try {
      return this.Service.AddIncome(await this.Validator.AddIncome(request), auth)
    } catch (error) {
      return error
    }
  }
  public async ListDepartments({ auth }: HttpContext) {
    console.log('list hit')
    try {
      return this.Service.ListDepartments(auth)
    } catch (error) {
      return {
        status: 200,
      }
    }
  }
  public async AddEmployee({ request, auth }: HttpContext) {
    try {
      const payload = await this.Validator.AddEmployee(request)
      return this.Service.AddEmployee(payload, auth)
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async ListEmployee({ request}: HttpContext) {
    try {
      const payload = await this.Validator.ListEmployee(request)
      return this.Service.ListEmployee(payload)
    } catch (error) {
      return {
        status:422
      }
    }
  }
}
