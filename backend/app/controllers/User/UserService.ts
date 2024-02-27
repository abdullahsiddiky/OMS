import UserQuery from './UserQuery.ts'

export default class userService {
  private Query: UserQuery

  constructor() {
    this.Query = new UserQuery()
  }
  // public async RegisterUser(payload) {
  //   return this.Query.RegisterUser(payload)
  // }
  // public async LoginUser({ auth, payload }) {
  //   return this.Query.LoginUser({ auth, payload })
  // }
  // public async Logout({auth}){
  //   return this.Query.Logout({auth})
  // }
  // public async CreatePost({auth, payload}) {
  //   return this.Query.CreatePost({auth, payload})
  // }
  // public async GetData({auth}){
  //  return  this.Query.GetData({auth})
  // }
  public RegisterUser(payload:any){
    
    return this.Query.RegisterUser(payload)
  }
  public LoginUser(payload:any){
    return this.Query.Login(payload)
  }
  public Logout(auth:any){
   return this.Query.Logout(auth)
  }

}

