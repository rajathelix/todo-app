import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js';
class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"rajat",
            password:"",
            hasLoginFailed:false,
            showSuccessMessage:false
        }
    }
    render(){
        return (
            <div className="align-items-center">
                <h1>Login</h1>
                <div className="container align-items-center">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} showSuccessMessage={this.state.showSuccessMessage}></ShowInvalidCredentials> */}
                    {this.state.hasLoginFailed && <div className="alert alert-danger"><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div className="alert alert-success"> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Login Successful</div>}
                    <div className="align-items-center p-3">Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input></div>
                    <div className="align-items-center p-3">Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input></div>
                    <div className="align-items-center p-3"><button className="btn btn-success" onClick={this.loginClicked}>Login</button></div>
                </div>
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
    handleChange=(event)=>{
        this.setState(
            {   //Any variable can be used as attribute of the state use square  brackets [].
                [event.target.name]:event.target.value
            }
        )
    }
    loginClicked=()=>{
        if(this.state.username=='rajat' && this.state.password=='rajat'){
            this.setState({
                showSuccessMessage:true,
                hasLoginFailed:false
            });
            AuthenticationService.registerSuccesfulLogin(this.state.username,this.state.password)
            setTimeout(()=>{this.props.history.push("/welcome/"+sessionStorage.getItem('authenticatedUser'))},2500)
        }
        else{
            this.setState(
                {
                    showSuccessMessage:false,
                    hasLoginFailed:true
                }
            )
        }
        console.log("login");
    }
}
export default  LoginComponent;