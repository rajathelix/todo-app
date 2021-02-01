class AuthenticationService{

    registerSuccesfulLogin(username,password){
        console.log('registeredSuccessfully');
        sessionStorage.setItem('authenticatedUser',username);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user==null) return false;
        return true;
    }
}

export default new AuthenticationService();