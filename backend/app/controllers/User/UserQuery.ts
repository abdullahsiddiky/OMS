import Todo from 'App/Models/Todo'
import User from 'App/Models/User'
export default class UserQuery {
  public async RegisterUser(payload) {
    await User.create(payload)
    return {
      status: 200,
    }
  }
  public async LoginUser({ auth, payload }) {
    try {
      const token = await auth.use('api').attempt(payload.email, payload.password)
      return {
        status: 200,
        data: token,
      }
    } catch (error) {
      return {
        status: 405,
      }
    }
  }
  public async Logout({ auth }) {
    await auth.use('api').logout()
    console.log('logout funciton query called')
    return {
      status: 200,
    }
  }
  public async CreatePost({ auth, payload }) {
    const id = auth.use('api').user.id
    console.log(id)
    console.log(payload)
    try {
      if (id) {
        await Todo.create({
          userId: id,
          content: payload.content,
        })
      }
    } catch (error) {
      return error
    }
  }
  public async GetData({ auth }) {
    const user = await auth.use('api').user
    const todo = await Todo.query().where('user_id', user.id).orderBy('created_at', 'desc')
    return todo
  }
}
