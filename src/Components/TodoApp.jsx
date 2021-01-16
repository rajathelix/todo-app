import React, {Component} from 'react'
import './TodoApp.css'
export default class TodoApp extends Component {
    render(){
        return (
            <div>
                <h1>Login page</h1>
                <LoginComponent></LoginComponent>
            </div>
            );
    }
}
class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"in28minutes",
            password:""
        }
    }
    render(){
        return (
            <div>
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}></input>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
            <button className="button"><span>Login</span></button>
            </div>
            );
    }
    //event here is synthetic event
    handleUsernameChange=(event)=>{
        this.setState(
            {
                username: event.target.value
            }
        )
    }
    handlePasswordChange=(event)=>{
        this.setState({
            password: event.target.value
        })
    }
}
