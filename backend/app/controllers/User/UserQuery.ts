import User from '#models/user'
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
}
