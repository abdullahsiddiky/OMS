import UserQuery from './UserQuery.ts'

export default class userService {
  private Query: UserQuery

  constructor() {
    this.Query = new UserQuery()
  }
 
  public RegisterUser(payload:any){
    return this.Query.RegisterUser(payload)
  }
  public LoginUser(payload:any){
    return this.Query.Login(payload)
  }
  public Logout(auth:any){
   return this.Query.Logout(auth)
  }
  public AddDept(payload:any, auth:any){
    return this.Query.AddDept(payload, auth)
  }

}

