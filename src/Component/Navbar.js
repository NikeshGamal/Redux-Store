import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  //useSelector hook to get access the state so that we can update the state of the store
  //in useSelector  we need to pass the object which we want to subscribe

  //subscribe-->whenever the state is updated or change it will notify us without asking for it i.e. it returns the updated state after re-rendering the content automatically

  //here state whole state is passed insinde the useSelector so of that state-->cart is accessed so for counting the number we may use items.length afterwards so inside cart it is [] initially so after adding it will have some product eventually
    const items = useSelector(state=>state.cart)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                        </ul>
                         <p>Cart Items: {items.length}</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar