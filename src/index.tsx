import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import 'normalize.css'

import registerServiceWorker from './registerServiceWorker'
import { App } from './views'
import client from './apolloClient'
import './index.css'

const rootEl = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <ApolloProvider client={client}>
    <LocaleProvider locale={enUS}>
      <Router>
        <App />
      </Router>
    </LocaleProvider>
  </ApolloProvider>,
  rootEl,
)

// hot reloading
if (module.hot) {
  module.hot.accept('./views', () => {
    const NextApp = require('./views').App
    ReactDOM.render(
      <ApolloProvider client={client}>
        <LocaleProvider locale={enUS}>
          <Router>
            <NextApp />
          </Router>
        </LocaleProvider>
      </ApolloProvider>,
      rootEl,
    )
  })
}

registerServiceWorker()
