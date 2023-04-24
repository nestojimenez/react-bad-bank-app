import React, { useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {

    const navigation = [
        {name: 'BadBank', href: '/badbank'},
        {name: 'Create Account', href: '/CreateAccount/'},
        {name: 'Login', href: '/login/'},
        {name: 'Deposit', href: '/deposit'},
        {name: 'Withdraw', href: '/withdraw'},
        {name: 'Balance', href: '/balance'},
        {name: 'AllData', href: '/alldata'},
    ]
    
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
        <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    {navigation.map((item, index) =>{
                        return (
                            <li className="nav-item">
                                <NavLink className={({isActive})=>{
                                    console.log(item.href + ' ' + isActive);
                                    return (
                                        'nav-link ' + (isActive ? 'active' : null)
                                    )
                                }} aria-current="page" to={item.href} data-bs-toggle="tooltip" data-bs-placement="top" title={`Go to ${item.name} Page`} key={index} style={{fontWeight: 'bold'}}>{item.name}</NavLink>
                            </li>
                        )
                    })}
                    
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
            </div>
      </div>
  </nav>
  )
}

export default Navbar
