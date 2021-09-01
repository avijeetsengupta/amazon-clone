import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import fire from './config/fire';
import Login from './config/Login';
import Hero from './Hero';

 const App = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, serEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
  
    const clearInputs = () => {
      setEmail('');
      setPassword('');
    }
  
    const clearErrors = () => {
      serEmailError('');
      setPasswordError('');
    }
  
    const handleLogin = () => {
      clearErrors();
      fire
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch(err => {
            switch(err.code){
              case "auth/invalid-email":
              case "auth/user-disabled":
              case "auth/user-not-found":
                serEmailError(err.message);
                break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break;    
            }
          })
    };
  
    const handleSignup =  () => {
      clearErrors();
      fire
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(err => {
            switch(err.code){
              case "auth/email-already-in-use":
              case "auth/invalid-email":
                serEmailError(err.message);
                break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;    
            }
          })
    };
  
    const handleLogout = () => {
      fire.auth().signOut();
    };
  
    const authListner = () =>{
      fire.auth().onAuthStateChanged(user => {
        if(user){
          clearInputs();
          setUser(user);
        }else{
          setUser("");
        }
      })
    };
  
    useEffect(() =>{
      authListner();
    }, [])


  return (

    <Router>
      <div className="App">
      {user ? (
      <Hero 
      handleLogout={handleLogout}
    />
    ):(
      <Login email={email} 
    setEmail={setEmail} 
    password={password}
    setPassword={setPassword}
    handleLogin={handleLogin}
    handleSignup={handleSignup}
    hasAccount={hasAccount}
    setHasAccount={setHasAccount}
    emailError={emailError}
    passwordError={passwordError}
    />
    )}
      </div>
    </Router>
  );
}

export default App;
