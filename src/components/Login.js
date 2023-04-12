import React, { useContext } from 'react'
import { UserContext } from '../App';

const Login = () => {
  const ctx = useContext(UserContext);
  return (
    <h1>Login
        {JSON.stringify(ctx)}
    </h1>
  )
}

export default Login
