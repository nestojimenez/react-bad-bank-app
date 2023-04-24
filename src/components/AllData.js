import React, { useContext } from 'react'
import { UserContext } from '../UserContext';
import Card from './Card';

const AllData = () => {
  const {users, updateUsers} = useContext(UserContext);
  console.log(users);
  return (
    <Card
      title = {`All Data`}
      bgcolor="primary"
      txtcolor="black" 
      header="BadBlan Landing Page" 
      body={
         <>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-3'>
                  Name
                  {users.map((item, index)=>{
                    return (
                      <h5 key={index}>{item.name}</h5>

                      )
                  })}
                </div>
                <div className='col-3'>
                    Balance
                    {users.map((item, index)=>{
                      return (
                        <h5 key={index}>{item.balance}</h5>

                        )
                    })}
                </div>
                <div className='col-6'>
                    Email
                    {users.map((item, index)=>{
                      return (
                        <h5 key={index}>{item.email}</h5>

                        )
                    })}
                </div>
              </div>
            </div>
            
            
         
         </>
           
        }
    />
  )
}

export default AllData
