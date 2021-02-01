import React, {Component} from 'react'

import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import HearderComponent from './HearderComponent'
import ListTodoComponent from './ListToDoComponent'
import RedirectRoute from './RedirectRoute'
export default class TodoApp extends Component {
    render(){
        return (
            <div className="TodoApp">
            <Router>
            <HearderComponent></HearderComponent>
            <Switch>
                <RedirectRoute path="/" exact component={LoginComponent}/>
                <RedirectRoute path="/login" component={LoginComponent}/>
                <AuthenticatedRoute path="/welcome/:username" component={WelcomeComponent}/>
                <AuthenticatedRoute path="/todos" component={ListTodoComponent}/>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent></FooterComponent>
            </Router>
            </div>
            );
    }
}

//function component
function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null
}
class WelcomeComponent extends Component{
    render(){
        //parameter in url is also part of props
        return(
            <div>
                Welcome to {sessionStorage.getItem('authenticatedUser')}. You can manage your todos <Link to="/todos">here</Link>
            </div>
        );
        //Use <Link> instead of <a> because when we use anchor tag the whole page gets refreshed.
    }
}



class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="text-muted">All Rights reserved 2021 @rajathelix</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render(){
        return(
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our Application.
                </div>
            </>
        )
    }
}

function ErrorComponent(){
    return <div>An Error Occured. I don't know what to do! Contact support at rajathelix@gmail.com</div>
}

