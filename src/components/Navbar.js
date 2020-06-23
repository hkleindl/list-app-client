import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import UserMenu from "./UserMenu.js"
import NavLinks from "./NavLinks.js"

const Navbar = ({ currentUser }) => {
    
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <a class="navbar-brand" href="#">List App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarsExample04">
                    
                    { currentUser ? 
                            <NavLinks /> :       
                            null
                    }

                    <ul class="navbar-nav ml-auto">
                        { currentUser ?
                            <UserMenu /> :
                            <Login />
                        }
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