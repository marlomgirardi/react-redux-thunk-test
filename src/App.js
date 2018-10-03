import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'
import Info from './Info'
import UserAgent from './UserAgent'

const store = createStore(reducers, applyMiddleware(thunk, logger))

export default () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Info />
        <UserAgent />
      </div>
    </Provider>
  )
}
