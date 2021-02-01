import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';
import {BrowserRouter as Router,Link,Redirect,Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent';
class RedirectRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
            console.log("username: "+ sessionStorage.getItem("authenticatedUser"))
            return <Redirect to={"/welcome/"+sessionStorage.getItem('authenticatedUser')}/>
        }
        else{
            return <Route path="/login" component={LoginComponent}/>
        }
    }
}
export default RedirectRoute;