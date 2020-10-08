import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import UserMenu from "./UserMenu.js"
import NavLinks from "./NavLinks.js"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = ({ currentUser }) => {
    let location = useLocation()
    console.log(location.pathname)

    let navBarContent = () => {
        if (currentUser) {
            return <UserMenu />
        } else if (location.pathname === '/signup') {
            return null
        } else {
            return <Login />
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">List App</Link>
                {/* <a class="navbar-brand" href="#">List App</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    
                    { currentUser ? 
                            <NavLinks /> :       
                            null
                    }

                    <ul className="navbar-nav ml-auto">
                        {navBarContent()}
                    </ul>

                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Navbar)