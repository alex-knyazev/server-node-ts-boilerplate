import { Schema, model, HookNextFunction } from 'mongoose'
import { DogDocumentI } from './types'

const dogsSchema: Schema = new Schema({
  id: { type: String, required: true },
  name: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
})

dogsSchema.pre<DogDocumentI>('save', function(next: HookNextFunction) {
  const now = new Date()
  this.createdAt = now
  this.updatedAt = now
  next()
})

// to remain virtual fields in data when toJson method is called
dogsSchema.set('toJSON', { virtuals: true })

const DogsModel = model<DogDocumentI>('Dog', dogsSchema)

export { DogsModel, dogsSchema }
