import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/auth'

export const TokenContext = createContext(null)

function Router(){

  const TOKEN = 'd26712fb4cb944b475abf030960028e78c27fe14'

  return(
    <React.StrictMode>
      <TokenContext.Provider value={TOKEN}>
        <BrowserRouter>
          <Route exact path = '/' component={Auth}></Route>
          <Route exact path = '/movies' component={App}></Route>
        </BrowserRouter>
      </TokenContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Router></Router>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();