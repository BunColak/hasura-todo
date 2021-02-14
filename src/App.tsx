import { ApolloProvider } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import generateClient from './apolloClient'
import Home from './containers/home/Home'
import Login from './containers/login/Login'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  const { getAccessTokenSilently } = useAuth0()

  return (
    <ApolloProvider client={generateClient(getAccessTokenSilently)}>
      <BrowserRouter>
        <div className="min-h-screen p-4 text-white bg-indigo-700">
          <div className="grid h-1 min-h-screen place-items-center">
            <Switch>
              <ProtectedRoute exact path="/">
                <Home />
              </ProtectedRoute>
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
