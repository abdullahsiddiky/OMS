import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/User/UsersController'
import { middleware } from '#start/kernel'

router
  .group(() => {
    router.post('register', [UsersController, 'RegisterUser'])
    router.post('login', [UsersController, 'LoginUser'])

    router
      .group(() => {
        router.post('add_dept', [UsersController, 'AddDept'])
        router.post('add_expense', [UsersController, 'AddExpense'])
        router.post('add_income', [UsersController, 'AddIncome'])
        router.get('list_departments', [UsersController, 'ListDepartments'])
        router.post('add_employee', [UsersController, 'AddEmployee'])
        router.post('list_employee', [UsersController, 'ListEmployee'])
        router.post('employee_information', [UsersController, 'EmployeeInformation'])
        router.post('delete_employee', [UsersController, 'DeleteEmployee'])
        router.post('update_expense',[UsersController,'UpdateExpense'])
        router.post('logout', [UsersController, 'Logout'])
      })
      .use(middleware.auth())
  })
  .prefix('users')
