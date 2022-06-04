import { Schema, model } from 'mongoose'

export interface BooksInterface {
  title: string
  author: string
  publisher: string
  pages: number
}

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  cover: {
    type: String,
  },
})

const Model = model<BooksInterface>('books', schema)

export default Model
