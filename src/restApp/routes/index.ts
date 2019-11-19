import { Express, Router } from 'express'
import { name as dogsName, router as dogsRouter } from './dogs'

type RoutesVocabularyT = {
  [key: string]: Router
}

const routesVocabulary: RoutesVocabularyT = {
  [dogsName]: dogsRouter,
}

function applyRoutesToApp(appInstance: Express): void {
  Object.keys(routesVocabulary).map((routePath) => {
    const router: Router = routesVocabulary[routePath]
    appInstance.use(routePath, router)
  })
}

export { routesVocabulary, applyRoutesToApp }
