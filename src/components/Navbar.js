import React from 'react'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href='/'>BadBank</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href='/CreateAccount/'>Create Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/login/'>Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/deposit/'>Deposit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/withdraw/'>Withdraw</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/balance/'>Balance</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/alldata/'>AllData</a>
                    </li>
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
