import Department from '#models/department'
import Employee from '#models/employee'
import Expense from '#models/expense'
import Income from '#models/income'
import User from '#models/user'
import { format } from 'date-fns'
import { emit } from 'process'
export default class UserQuery {
  public async RegisterUser(payload: any) {
    if (await User.create(payload)) {
      return {
        status: 200,
      }
    }
  }
  public async Login(payload: any) {
    try {
      const user = await User.verifyCredentials(payload.email, payload.password)
      const token = await User.accessTokens.create(user)
      return {
        status: 200,
        token: token,
      }
    } catch (error) {
      return error.status
    }
  }
  public async Logout(auth: any) {
    try {
      const user = await auth.authenticate()
      if (await User.accessTokens.delete(user, user.currentAccessToken.identifier)) {
        return {
          status: 200,
        }
      }
    } catch (error) {
      return {
        status: 401,
      }
    }
  }
  public async AddDept(payload: any, auth: any) {
    try {
      const user = await auth.authenticate()
      await Department.create({
        deptName: payload.deptname,
        userId: user.id,
      })
      return {
        status: 200,
      }
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async AddExpense(payload: any, auth: any) {
    try {
      const user = await auth.authenticate()
      await Expense.create({
        title: payload.title,
        category: payload.expense,
        amount: payload.amount,
        userId: user.id,
      })
      return {
        status: 200,
      }
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async AddIncome(payload: any, auth: any) {
    try {
      const user = await auth.authenticate()
      await Income.create({
        title: payload.title,
        amount: payload.amount,
        userId: user.id,
      })
      return {
        status: 200,
      }
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async ListDepartments(auth: any) {
    try {
      const user = await auth.authenticate()
      const listDepartments = await User.query().where('id', user.id).preload('departments')
      return listDepartments
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async AddEmployee(payload: any, auth: any) {
    try {
      const dept = await Department.query().where('id', payload.departmentId).first()
      await Employee.create({
        name: payload.name,
        email: payload.email,
        departmentName: dept?.deptName,
        departmentId: payload.departmentId,
        salary: payload.salary,
      })
      return {
        status: 200,
      }
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async ListEmployee(payload: any) {
    try {
      const department = await Department.query().where('id', payload.deptId).preload('employees')
      return {
        status: 200,
        department,
      }
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async EmployeeInformation(payload: any) {
    const employee = await Employee.query().where('id', payload.employeeId).first()
    return {
      status: 200,
      employee,
    }
  }
  public async DeleteEmployee(payload: any) {
    try {
      await Employee.query().where('id', payload.employeeId).delete()
      return {
        status: 200,
      }
    } catch (error) {
      return {
        status: 422,
      }
    }
  }
  public async UpdateExpense(payload: any, auth: any) {
    const formatDate = (date: any) => {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }
    const user = await auth.authenticate()
    const startDate = formatDate(payload.startDate).toString()
    const endDate = formatDate(payload.endDate).toString()
    const expense = await User.query()
      .where('id', user.id)
      .select( ['id','full_name'])
      .preload('expenses', (query) => {
        query
          .whereRaw('DATE(created_at) BETWEEN ? AND ?', [startDate, endDate])
          .select('category')
          .sum('amount as total')
          .groupBy('category').orderBy('total','desc')
      }
      )
      .withAggregate('expenses',(q)=>{
        q.sum('amount').as('net_total')
      })
     
      console.log(expense)
    return expense
  }
}
