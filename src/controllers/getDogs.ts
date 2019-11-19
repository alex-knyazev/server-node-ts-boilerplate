type ArgsT = {
  filter?: {
    name: string
  }
}
type DogT = {
  id: string
  name: string
}

type ResultT = Array<DogT>

import { wrapToControllerHandler } from './wrapToControllerHandler'
import { DogsModel } from '@/model/dog'
import { DogsFilterT } from '@/model/dog/types'

const getDogs = wrapToControllerHandler<ArgsT, ResultT>(
  async (args: ArgsT): Promise<ResultT> => {
    const filter: DogsFilterT = {}
    if (args.filter) {
      if (args.filter.name) {
        filter.name = args.filter.name
      }
    }

    const dogs = await DogsModel.find(filter)

    return dogs
  },
)

export { getDogs }
