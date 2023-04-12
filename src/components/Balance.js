import React, { useContext } from 'react'
import { UserContext } from '../App';

const Balance = () => {
  const ctx = useContext(UserContext);
  return (
    <h1>Balance
        {JSON.stringify(ctx)}
    </h1>
  )
}

export default Balance
