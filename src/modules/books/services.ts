import { PageOptionsInterface } from 'helpers/types'
import { listsLimit } from 'helpers/utils'
import booksSchema, { BooksInterface } from './model'

export const addNewBook = async (data: BooksInterface) => {
  const book = new booksSchema(data)

  return await book.save()
}

export const getAllBooks = async (queryData: any) => {
  const filter: any = {}

  const pageOptions: PageOptionsInterface = {
    page: parseInt(queryData.page as string) || 0,
    limit: parseInt(queryData.limit as string) || listsLimit,
  }

  if (queryData.title) Object.assign(filter, { title: { $regex: queryData.title, $options: 'i' } })
  if (queryData.publisher) Object.assign(filter, { publisher: { $regex: queryData.publisher, $options: 'i' } })
  if (queryData.author) Object.assign(filter, { author: { $regex: queryData.author, $options: 'i' } })

  const totalEntries = await booksSchema.find(filter).count()
  const books = await booksSchema
    .find(filter)
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)

  const data = {
    books,
    metadata: {
      pageNumber: pageOptions.page,
      pageSize: books.length,
      totalEntries: totalEntries,
      totalPages: Math.ceil(totalEntries / pageOptions.limit),
    },
  }

  return data
}

export const getOneBook = async (id: string) => await booksSchema.findOne({ _id: id })

export const updateBook = async (id: string, data: any) => {
  await booksSchema.updateOne({ _id: id }, { $set: data }).exec((err) => {
    if (err) {
      return err
    }
  })

  return 'Updated.'
}

export const deleteBook = async (id: string) => {
  await booksSchema.deleteOne({ _id: id }).exec((err) => {
    if (err) {
      return err
    }
  })
}
