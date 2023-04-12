import React, { useContext } from 'react'
import { UserContext } from '../App';

const AllData = () => {
  const ctx = useContext(UserContext);
  return (
    <h1>AllData
        {JSON.stringify(ctx)}
    </h1>
  )
}

export default AllData
