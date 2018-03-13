import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import rootReducer from './reducers'

export const rootEpic = combineEpics({})

const epicMiddleware = createEpicMiddleware(rootEpic)

export default function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, applyMiddleware(epicMiddleware))
}
