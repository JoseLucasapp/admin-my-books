import { Request, Response } from 'express'
import { addNewBook, deleteBook, getAllBooks, getOneBook, updateBook } from './services'

export const create = async (req: Request, res: Response) => {
  try {
    const book = await addNewBook(req.body)
    res.status(200).json(book)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const getAll = async (req: Request, res: Response) => {
  try {
    const book = await getAllBooks(req.query)
    res.status(200).json(book)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const getOne = async (req: Request, res: Response) => {
  try {
    const book = await getOneBook(req.params.id)
    res.status(200).json(book)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const book = await updateBook(req.params.id, req.body)
    res.status(200).json(book)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const book = await deleteBook(req.params.id)
    res.status(200).json(book)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
