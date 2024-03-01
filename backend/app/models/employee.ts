import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Department from './department.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare departmentName: string

  @column()
  declare departmentId: number

  @column()
  declare salary: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Department)
  declare department: BelongsTo <typeof Department> 

}
