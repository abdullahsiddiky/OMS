import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import Department from './department.ts'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Expense from './expense.ts'
import Income from './income.ts'
const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  serializeExtras = true
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(()=> Department)
  declare departments: HasMany<typeof Department>

  @hasMany (()=> Expense)
  declare expenses: HasMany <typeof Expense>

  @hasMany (()=> Income)
  declare incomes: HasMany <typeof Income> 

  static accessTokens = DbAccessTokensProvider.forModel(User)
  currentAccessToken?: AccessToken
}
