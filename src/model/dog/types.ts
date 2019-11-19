import { Document, Model } from 'mongoose'

export interface DogI {
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export interface DogDocumentI extends DogI, Document {
  id: string
}

export type DogModelI = Model<DogDocumentI>

export type DogsFilterT = {
  name?: string
}
