import React, { useContext } from 'react'
import { UserContext } from '../App';

const Createaccount = () => {
  const ctx = useContext(UserContext);
  return (
    <h1>Create Account
        {JSON.stringify(ctx)}
    </h1>
  )
}

export default Createaccount
