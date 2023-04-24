import React, { useContext } from 'react'
import Card from './Card';
import imgBank from '../images/bank.png'

const Home = () => {
  
  return (
    <Card 
        bgcolor="primary"
        txtcolor="black" 
        header="BadBlan Landing Page" 
        title="Welcome to Bad Bank" 
        text="You can use this bank, please login in order to use our BadBank" 
        body={(<img src={imgBank} className='img-fluid' alt='Resposive image'/>)}
    />
  )
}

export default Home
