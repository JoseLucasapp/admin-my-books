import { Router } from 'express'
import { create, getAll, getOne, remove, update } from './controllers'
import { createValidator } from './validators'

const router = Router()

router.post('/', [createValidator], create)

router.get('/', getAll)
router.get('/:id', getOne)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router
