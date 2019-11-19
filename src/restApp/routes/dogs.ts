import { Router, Response, Request } from 'express'
import { getDogs } from '@/controllers/getDogs'

const name = '/dogs'
const router: Router = Router()

router.get('/', async (req: Request, res: Response) => {
  const result = await getDogs({})

  res.send(result)
})

export { name, router }
