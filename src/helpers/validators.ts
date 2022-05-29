import { Request, Response, NextFunction } from 'express'

export const handleValidation = (req: Request, res: Response, next: NextFunction, schema: any) => {
  const { error } = schema.validate(req.body, { abortEarly: false })
  if (error) {
    const errors = error.details.map((item: any) => ({
      field: item.path[0],
      message: item.message,
    }))

    return res.status(422).json({
      error: {
        message: 'INVALID_PAYLOAD',
        content: errors,
      },
    })
  }
  next()
}
