import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';
import {BrowserRouter as Router,Link,Redirect,Route, Switch} from 'react-router-dom'
class AuthenticatedRoute extends Component {
    render(){
        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props}/>
            //<Route path={this.props.path} component={this.props.component}/>
        }
        else{
            return <Redirect to="/login"/>
        }
    }
}
export default AuthenticatedRoute;