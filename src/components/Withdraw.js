import React, { useContext } from 'react'
import { UserContext } from '../App';

const Withdraw = () => {
  const ctx = useContext(UserContext);
  return (
    <h1>Withdraw
        {JSON.stringify(ctx)}
    </h1>
  )
}

export default Withdraw
