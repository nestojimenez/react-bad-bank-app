import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js'
import Createaccount from './components/Createaccount.js'
import Login from './components/Login.js'
import Deposit from './components/Deposit.js'
import Withdraw from './components/Withdraw.js'
import Balance from './components/Balance.js'
import AllData from './components/AllData.js'
import { createContext } from 'react';

export const UserContext = createContext(null);


function App() {
  return (
    <Router>
        <h1>Welcome to Bad Bank</h1>
        <Navbar/>
        <UserContext.Provider value={{users:[{name:'Abel', email:'abel@mit.edu', password: 'secret', balance: 100}]}}>
            
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/createaccount'>
                    <Createaccount/>
                </Route>
                <Route exact path='/login'>
                    <Login/>
                </Route>
                <Route exact path='/deposit'>
                    <Deposit/>
                </Route>
                <Route exact path='/withdraw'>
                    <Withdraw/>
                </Route>
                <Route exact path='/balance'>
                    <Balance/>
                </Route>
                <Route exact path='/alldata'>
                    <AllData/>
                </Route>
            
        </UserContext.Provider>
        

    </Router>
    
  );
}

export default App;
