import React, {FC} from 'react'
import {Provider} from 'react-redux'

import {store} from './src/store/store'

import App from './index'

const AppWrapper: FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper