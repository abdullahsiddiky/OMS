import UserQuery from './UserQuery.ts'

export default class userService {
  private Query: UserQuery

  constructor() {
    this.Query = new UserQuery()
  }

  public RegisterUser(payload: any) {
    return this.Query.RegisterUser(payload)
  }
  public LoginUser(payload: any) {
    return this.Query.Login(payload)
  }
  public Logout(auth: any) {
    return this.Query.Logout(auth)
  }
  public AddDept(payload: any, auth: any) {
    return this.Query.AddDept(payload, auth)
  }
  public AddExpense(payload: any, auth: any) {
    return this.Query.AddExpense(payload, auth)
  }
  public AddIncome(payload: any, auth: any) {
    return this.Query.AddIncome(payload, auth)
  }
  public ListDepartments(auth: any) {
    return this.Query.ListDepartments(auth)
  }
  public AddEmployee(payload: any, auth: any) {
    return this.Query.AddEmployee(payload, auth)
  }
  public ListEmployee(payload: any) {
    return this.Query.ListEmployee(payload)
  }
  public EmployeeInformation(payload: any) {
    return this.Query.EmployeeInformation(payload)
  }
  public DeleteEmployee(payload: any) {
    return this.Query.DeleteEmployee(payload)
  }
  public UpdateExpense(payload:any, auth:any){
    return this.Query.UpdateExpense(payload, auth)
  }
  public UpdateIncome(payload:any, auth:any){
    return this.Query.UpdateIncome(payload, auth)
  }
}
