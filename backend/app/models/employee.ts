import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import string from '@adonisjs/core/helpers/string'
export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name:string

  @column()
  declare email:string
  
  @column()
  declare departmentId: number
  
  @column()
  declare departmentName:string

  @column()
  declare salary:number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}