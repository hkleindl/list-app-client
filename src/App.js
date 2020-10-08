import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { Route, Link, withRouter } from 'react-router-dom'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
        <div className="App">
          <Navbar/>
          <div>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>

          </div>
          
        </div> 
    )
  }
  
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
