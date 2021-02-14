import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

const ProtectedRoute = ({ children, ...rest }: RouteProps) => {
  const { isAuthenticated } = useAuth0()

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? children : <Redirect to="/login" />
      }
    />
  )
}

export default ProtectedRoute
