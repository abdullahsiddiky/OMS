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
    return await loginUserValidator.validate(request.body())
  }
  public async AddDept(request: any) {
    const departmentValidator = vine.compile(
      vine.object({
        deptname: vine.string().trim(),
      })
    )
    return await departmentValidator.validate(request.body())
  }
  public async AddExpense(request: any) {
    const expenseValidator = vine.compile(
      vine.object({
        title: vine.string().trim(),
        expense: vine.string().trim(),
        amount: vine.number(),
      })
    )
    return await expenseValidator.validate(request.body())
  }
  public async AddIncome(request: any) {
    const incomeValidator = vine.compile(
      vine.object({
        title: vine.string().trim(),
        amount: vine.number(),
      })
    )
    return await incomeValidator.validate(request.body())
  }
  public async AddEmployee(request: any) {
    const employeeValidator = vine.compile(
      vine.object({
        name: vine.string().trim(),
        email: vine.string().unique(async (db, value) => {
          const employee = await db.from('employees').where('email', value).first()
          return !employee
        }),
        departmentId: vine.number(),
        salary: vine.number(),
      })
    )
    return employeeValidator.validate(request.body())
  }
  public async ListEmployee(request: any) {
    const listEmployeeValidator = vine.compile(
      vine.object({
        deptId: vine.number(),
      })
    )
    return listEmployeeValidator.validate(request.body())
  }
  public async EmployeeInformation(request: any) {
    const EmployeeInformationValidator = vine.compile(
      vine.object({
        employeeId: vine.number(),
      })
    )
    return EmployeeInformationValidator.validate(request.body())
  }
  public async DeleteEmployee(request: any) {
    const DeleteEmployeeValidator = vine.compile(
      vine.object({
        employeeId: vine.number(),
      })
    )
    return DeleteEmployeeValidator.validate(request.body())
  }
  public async UpdateExpense(request:any){
    const UpdateExpenseValidator = vine.compile(
      vine.object({
        startDate: vine.date(),
        endDate: vine.date(),
      })
    )
    return UpdateExpenseValidator.validate(request.body())
  }
}
