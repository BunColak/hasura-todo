import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }
  }, [isAuthenticated])

  return (
    <div className="text-center">
      <h2 className="text-3xl">You need to login son.</h2>
      <button
        className="w-full py-2 mt-4 transition-all duration-100 bg-green-600 rounded-sm hover:shadow-sm active:bg-green-700"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </div>
  )
}

export default Login
