import React, { useContext } from 'react'
import { UserContext } from '../App';

const Deposit = () => {
  const ctx = useContext(UserContext);
  return (
    <h1>Deposit
        {JSON.stringify(ctx)}
    </h1>
  )
}

export default Deposit
