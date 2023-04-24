import './App.css';
import { BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js'
import Createaccount from './components/Createaccount.js'
import Login from './components/Login.js'
import Deposit from './components/Deposit.js'
import Withdraw from './components/Withdraw.js'
import Balance from './components/Balance.js'
import AllData from './components/AllData.js'
import { useState } from 'react';

import { UserContext } from './UserContext';
import useLogin from './hooks/useLogin';
import { queryAllByPlaceholderText } from '@testing-library/react';
import Intro from './components/Intro';
//export const UserContext = createContext();

//{users:[{name:'Abel', email:'abel@mit.edu', password: 'secret', balance: 100}]}


function App() {
  
  const [users, setUsers] = useState([{name:'cesar', email:'abel@mit.edu', password: '1234', balance: 100},{name:'yair', email:'abel@mit.edu', password: '1234', balance: 100}]);

  const [login, setLogOn, setLogOut, foundIndex] = useLogin(users);

  const updateUsers = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, ...newUser])
  }

  const updateBalanceUsers = (users) =>{

    setUsers((prevUsers) =>{
      console.log(prevUsers)
      prevUsers.splice(foundIndex, 1);
      //prevUsers[foundIndex] = users[0];
      prevUsers = [...prevUsers, ...users]
      console.log(prevUsers)
      return prevUsers;
    });
  }

  const [balance, setBalance] = useState(100);

  /*const makeDeposit = (deposit, login)=>{
    setBalance((prevbalance) => Number(prevbalance) + Number(deposit));
    let updatedUser = login;
    console.log(login);
    updatedUser = {...login, balance:balance};
    console.log(updatedUser);
    
    setUsers((prevUsers)=> [...prevUsers,updatedUser]);
  }*/

  const makeWithDraw = (withDraw, login) =>{
    setBalance((prevbalance) => Number(prevbalance) - Number(withDraw))
  }
  
  return (
    <HashRouter>
        <h1>Welcome to Bad Bank</h1>
        <Navbar/>
        <UserContext.Provider value={{users, setUsers, updateUsers, balance, setBalance, makeWithDraw, login, setLogOn, setLogOut, foundIndex, updateBalanceUsers}}>
            <Switch>

                <Route exact path ='/' component={Intro}/>

                <Route path='/badbank' component={Home}/>
                    
                <Route path='/createaccount' component={Createaccount}/>
                    
                
                <Route path='/login'component={Login}/>
                
                <Route path='/deposit'component={Deposit}/>
                    
                <Route path='/withdraw'component={Withdraw}/>
                    
                <Route path='/balance'component={Balance}/>
                    
                <Route path='/alldata'component={AllData}/>
                    
            </Switch>
        </UserContext.Provider>
        

    </HashRouter>
    
  );
}

export default App;
