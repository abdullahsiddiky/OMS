/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import '#controllers/User/User'
router.get('/', async () => {
  return {
    hello: 'world',
  }
})
