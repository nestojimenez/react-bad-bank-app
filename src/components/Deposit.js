import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../UserContext';
import Card from './Card';

const Deposit = () => {
  const [show, setShow]   =   useState(true);
  const [status, setStatus] = useState('');   
  const [deposit, setDeposit] = useState(''); 
  const [buttonStatus, setButtonStatus] = useState('Enter Deposit');
  const [buttonDisabled, setButtonDisabled] = useState('disabled');
  let validation = false;

  const {users, updateUsers, balance, setBalance, login, updateBalanceUsers, foundIndex} = useContext(UserContext);

  useEffect(()=>{
    if(login.name === ''){
      setShow(false);
      alert('Your not loged in')
    }else{
      setShow(true)
    }
  }, [])
  

  const clearForm = () => {
    setDeposit('');    
    setShow(true); 
  }

  const validate = (field, label)=>{
    if(!field){
      setStatus('Error: ' + label);
      setTimeout(()=> setStatus(''), 3000);
      return false;
    }

    if(Number(field)<0){
      setStatus('Error: ' + label);
      setTimeout(()=> setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const handleChange = (e)=>{
    console.log(e);
      e.currentTarget.id == 'deposit' ? setDeposit(e.currentTarget.value): null;
      setButtonDisabled ('');
  }

  const handleCreate = async () => {
    console.log(deposit);

    if(validate(deposit,      'deposit')){
      validation = true
    }   
    else{
      validation = false;
      alert('Please enter a valid positive number')
      return;
    } 
    if(validation){
      setBalance((prevbalance) => Number(prevbalance) + Number(deposit));
      
      //makeDeposit(deposit, login);

      setShow(false);
      setButtonStatus('New Deposit');
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
          Deposit<br/>
          <input type='number' className='form-control' id='deposit'
          placeholder='Enter Deposit' value={deposit} onChange={handleChange}/><br/>          
          
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

export default Deposit
