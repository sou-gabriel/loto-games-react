import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import store from 'store'
import { GlobalStyle } from 'styles/GlobalStyle'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
)
