// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from '@adonisjs/core/http'
import UserValidator from './UserValidator.ts'
import userService from './UserService.ts'
import { Console } from 'console'
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
    try {
      return this.Service.AddIncome(await this.Validator.AddIncome(request), auth)
    } catch (error) {
      return error
    }
  }
  public async ListDepartments({ auth }: HttpContext) {
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
  public async ListEmployee({ request }: HttpContext) {
    try {
      const payload = await this.Validator.ListEmployee(request)
      return this.Service.ListEmployee(payload)
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async EmployeeInformation({ request }: HttpContext) {
    try {
      return this.Service.EmployeeInformation(await this.Validator.EmployeeInformation(request))
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async DeleteEmployee({ request }: HttpContext) {
    try {
      return this.Service.DeleteEmployee(await this.Validator.DeleteEmployee(request))
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async UpdateExpense({ request, auth }: HttpContext) {
    try {
      return this.Service.UpdateExpense(await this.Validator.UpdateExpense(request), auth)
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  
}
