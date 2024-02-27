
import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/User/UsersController'
import { middleware } from '#start/kernel'


router.group(() => {

  router.post('register',[UsersController, 'RegisterUser'])
  router.post('login',[UsersController, 'LoginUser'])

  router.group(()=>{

    router.post('logout',[UsersController,'Logout'])
  }).use(middleware.auth())
  }).prefix('users')