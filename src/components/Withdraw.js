import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../UserContext';
import Card from './Card';

const Withdraw = () => {
  const [show, setShow]   =   useState(true);
  const [status, setStatus] = useState('');   
  const [deposit, setDeposit] = useState(''); 
  const [buttonStatus, setButtonStatus] = useState('Enter withdraw');
  const [buttonDisabled, setButtonDisabled] = useState('disabled');
  let validation = false;
  let validationMessage = '';

  const {users, updateUsers, balance, makeWithDraw, login, updateBalanceUsers} = useContext(UserContext);

  const clearForm = () => {
    setDeposit('');    
    setShow(true); 
  }

  useEffect(()=>{
    if(login.name === ''){
      setShow(false);
      alert('Your not loged in')
    }else{
      setShow(true)
    }
  }, []

  )

  const validate = (field, label)=>{
    if(!field){
      setStatus('Error: ' + label);
      setTimeout(()=> setStatus(''), 3000);
      validationMessage = 'Enter a valid amount'
      clearForm();
      return false;
    }

    if(Number(field)<0){
      setStatus('Error: ' + label);
      setTimeout(()=> setStatus(''), 3000);
      validationMessage = 'Enter a positive amount'
      clearForm();
      return false;
    }

    if(field>balance){
      setStatus('Not sufficient founds: ' + label);
      setTimeout(()=> setStatus(''), 3000);
      validationMessage = 'Not sufficient founds'
      clearForm();
      return false;
    }
    return true;
  }

  const handleChange = (e)=>{
    console.log(e);
      e.currentTarget.id == 'deposit' ? setDeposit(e.currentTarget.value): null;
      setButtonDisabled ('');
  }

  const handleCreate = () => {
    console.log(deposit);
    if(validate(deposit,      'deposit')){
      validation = true
    }   
    else{
      validation = false;
      alert(validationMessage)
      return;
    } 
    if(validation){
      makeWithDraw(deposit);
      setShow(false);
      setButtonStatus('New WithDraw');
    }
    
  }

  const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
      isMountRef.current = false;
      //setBalance(users[foundIndex].balance);
    }, []);
    return isMountRef.current;
  }

  const isMount = useIsMount();

  useEffect(() =>{
    if(!isMount){
      let currentUser = [{...login, balance:balance}];
      console.log(currentUser);
      updateBalanceUsers(currentUser)
    }
    
  },[balance]);

  return (
    <Card
      title = {`Your Balance is ${balance}`}
      bgcolor="primary"
      txtcolor="black" 
      header="BadBlan Landing Page" 
      status={status}
      body={show ? (
        <>
          Amount to withdraw<br/>
          <input type='number' className='form-control' id='deposit'
          placeholder='Enter Amount to withdraw' value={deposit} onChange={handleChange}/><br/>          
          
          <button type='submit' className='btn btn-light' onClick={handleCreate} disabled = {buttonDisabled}>{buttonStatus}</button><br/>
        </>
        ) : (
        <>
          <h5>Success</h5>
          <button type='submit' className='btn btn-light' onClick={clearForm} >{buttonStatus}</button>
        </>)}
    />
  )
}

export default Withdraw
