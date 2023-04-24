import React, { useEffect } from 'react'
import BankIntro from '../images/bank.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Intro = () => {
  
    const history = useHistory();

    const moveToHome = () =>{
      history.push('/badbank')
    }
  
    useEffect(() => {
      setTimeout(
      moveToHome
      , 3000)
    }, []);
  
    return (
      <div className="container-fluid bg-dark intro" style = {{height:"100vh"}}>
          <div className='row justify-content-center'>
              <div className="col-6">
                  <h1 className="text-uppercase text-bg-dark text-center mt-5">Welcome to Bad Bank</h1>  
                  {/*mx-auto and d-block to center on column*/}          
                  <img className="mx-auto d-block mt-5" src={BankIntro} alt="" />
                  
              </div>        
          </div>
      </div>
      
    )
}

export default Intro
