import Joi from 'joi'
import { handleValidation } from '../../helpers/validators'
import { Request, Response, NextFunction } from 'express'

export const createValidator = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object().keys({
    title: Joi.string().required().messages({
      'string.empty': 'Por favor, insira o título.',
    }),
    author: Joi.string().required().max(100).messages({
      'string.empty': 'Por favor, insira o nome do autor.',
      'string.max': 'O nome ultrapassa limite de 100 caracteres.',
    }),
    publisher: Joi.string().required().max(100).messages({
      'string.empty': 'Por favor, insira o nome da editora.',
      'string.max': 'O nome ultrapassa limite de 100 caracteres.',
    }),
    pages: Joi.number().required().messages({
      'string.empty': 'Por favor, insira o número de páginas.',
    }),
  })

  handleValidation(req, res, next, schema)
}
