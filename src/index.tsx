import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import 'normalize.css'

import registerServiceWorker from './registerServiceWorker'
import { App } from './modules/core/views'
import client from './apolloClient'
import './index.css'

const rootEl = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  rootEl,
)

// hot reloading
if (module.hot) {
  module.hot.accept('./modules/core/views', () => {
    const NextApp = require('./modules/core/views').App
    ReactDOM.render(
      <ApolloProvider client={client}>
        <Router>
          <NextApp />
        </Router>
      </ApolloProvider>,
      rootEl,
    )
  })
}

registerServiceWorker()
