import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Router>
          <div>
            <Link class="btn btn-secondary" to="/signup">Sign Up</Link>
          </div>
          <Route path="/signup">
            <SignUp/>
          </Route>
        </Router>
      </div> 
    )
  }
  
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
