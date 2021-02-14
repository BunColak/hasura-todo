import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }
  }, [isAuthenticated])

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl">You need to login son.</h2>
      <button
        className="w-full mt-4 button"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </div>
  )
}

export default Login
