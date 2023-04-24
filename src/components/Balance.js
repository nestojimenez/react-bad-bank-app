import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext';
import Card from './Card';

const Balance = () => {
  const [show, setShow]   =   useState(true);
  
  const {users, updateUsers, balance, setBalance, login, updateBalanceUsers, foundIndex} = useContext(UserContext);


  return (
    <Card
      title = {`Hi ${users[foundIndex].name} here is your balance`}
      bgcolor="primary"
      txtcolor="black" 
      header="BadBlan Landing Page" 
      
      body={show ? (
        <>
          Balance {balance}<br/>
          
        </>
        ) : (
        <>
          <h5>Success</h5>
          
        </>)}
    />
  )

}

export default Balance
