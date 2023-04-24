import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext';
import Card from './Card';

const Login = () => {
  const {users, updateUsers, login, setLogOn, setLogOut, setBalance} = useContext(UserContext);
  const [show, setShow]   =   useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');   
  const [email, setEmail] = useState('');   
  const [password, setPassword] = useState('');
  const [buttonStatus, setButtonStatus] = useState('Create Account');
  const [buttonDisabled, setButtonDisabled] = useState('disabled');
  let validation = false;

  const handleChange = (e)=>{
    console.log(e)
    e.currentTarget.id == 'name' ? setName(e.currentTarget.value): null;
    e.currentTarget.id == 'password' ? setPassword(e.currentTarget.value) : null;
    setButtonDisabled ('');
  }

  const handleLogin = () =>{
    console.log('handle');
    const found = setLogOn(name, password);
    console.log('User found ' + (found === undefined ? false : true));

    if(found === undefined){
      alert('Name or NIP not found')
    } else{
      
      setName(found.name);
      clearForm();
      alert('You login sucessfully')
      
    }

  }

  const clearForm = ()=>{
    setName('');
    setPassword('');
    setShow(false);
  }


  return (
    <Card
      bgcolor="primary"
      txtcolor="black" 
      header="BadBlan Landing Page" 
      status={status}
      body={show ? (
        <>
          Please enter your Name<br/>
          <input type='input' className='form-control' id='name'
          placeholder='Enter Name' value={name} onChange={handleChange}/><br/>

          Please enter your NIP<br/>
          <input type='number' className='form-control' id='password'
          placeholder='Enter NIP' value={password} onChange={handleChange}/><br/>
                    
          <button type='submit' className='btn btn-light' onClick={handleLogin} disabled = {buttonDisabled}>Log In</button><br/>
        </>
        ) : (
        <>
          <h5>Your are login now, please continue with your transaction</h5>
          
        </>)}
    />
    
  )
}

export default Login
