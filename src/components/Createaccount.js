import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext';
import Card from './Card';


const Createaccount = () => {

  const [show, setShow]   =   useState(true);
  const [status, setStatus] = useState('');   
  const [name, setName] = useState('');   
  const [email, setEmail] = useState('');   
  const [password, setPassword] = useState('');
  const [buttonStatus, setButtonStatus] = useState('Create Account');
  const [buttonDisabled, setButtonDisabled] = useState('disabled');
  let validation = false;

  const {users, updateUsers, balance} = useContext(UserContext);
  //const ctx = useContext(UserContext);
 
  const validate = (field, label)=>{
    if(!field){
      setStatus('Error: ' + label);
      setTimeout(()=> setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const handleCreate = () => {
    console.log(name, email, password, balance);
    if(validate(name,      'name')){
      validation = true
    }   
    else{
      validation = false;
      alert('Please enter a valid Name')
      return;
    }  
    
    if(validate(email,     'email')){
      validation = true
    } 
    else{
      validation = false;
      alert('Please enter a valid Email')
      return;
    }    
    if(validate(password,  'password')){
      validation = true
    }
    else{
      validation = false;
      alert('Please enter a valid Password')
      return;
    }

    if(validation){
      
      updateUsers([{name: name, email: email, password: password, balance:balance}]);
      setShow(false);
      setButtonStatus('Create New Account');
    }
    
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    
  }

  const handleChange = (e)=>{
      e.currentTarget.id == 'name' ? setName(e.currentTarget.value): null;
      e.currentTarget.id == 'email' ? setEmail(e.currentTarget.value) : null;
      e.currentTarget.id == 'password' ? setPassword(e.currentTarget.value) : null;
      setButtonDisabled ('');
  }

  return (
    <Card
      bgcolor="primary"
      txtcolor="black" 
      header="BadBlan Landing Page" 
      status={status}
      body={show ? (
        <>
          Name<br/>
          <input type='input' className='form-control' id='name'
          placeholder='Enter name' value={name} onChange={handleChange}/><br/>
          Email addres<br/>
          <input type='input' className='form-control' id='email'
          placeholder='Enter email' value={email} onChange={handleChange}/><br/>
          Password<br/>
          <input type='password' className='form-control' id='password'
          placeholder='Enter password' value={password} onChange={handleChange}/><br/>
          
          <button type='submit' className='btn btn-light' onClick={handleCreate} disabled = {buttonDisabled}>Create Account</button><br/>
        </>
        ) : (
        <>
          <h5>Success</h5>
          <button type='submit' className='btn btn-light' onClick={clearForm} >{buttonStatus}</button>
        </>)}
    />
  )
}

export default Createaccount
