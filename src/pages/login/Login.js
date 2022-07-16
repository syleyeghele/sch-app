import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Alert from 'alert-alert';
import 'alert-alert/dist/standalone/css/alert-alert.css';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogin: false
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email : event.target.value
        })
    } 

    handlePasswordChange = (event) => {
        this.setState({
            password : event.target.value
        })
    } 
    
    submitLoginForm =  (event) => {
        event.preventDefault()
        let email = this.state.email,
            password = this.state.password

    
        axios.post('https://estyvida-server.herokuapp.com/users/signin', {
            email: email,
            password: password,
          })
          .then( (response) => {

            if (response.data.status === 'success') {
                let type    = 'success';
                let message = response.data.message;
                let config  = { timeout: 2000 };
                
                Alert.alert(type, message, config);
                
                setTimeout(() => {  window.location.href = '/overview'; }, 2000);
                localStorage.setItem('userEmail', email)
                console.log(localStorage.userEmail)

            } else {
                let type    = 'error';
                let message = response.data.message;
                let config  = { timeout: 2000 };
                Alert.alert(type, message, config);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    componentDidMount(){
        
        let type    = 'error';
        let message = 'Sign In to continue...'
        let config  = { timeout: 2000 };
        Alert.alert(type, message, config);
       
    }


    render() { 
        return ( <React.Fragment>
            <div className='container con-width'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6 card signup-card'>
                        <p className='sign-up-text'>Estyvida School Management System Sign In</p>
                        <form onSubmit={this.submitLoginForm}>
                            <div className="form-group">
                                <label for="formGroupExampleInput" className='label-title'>EMAIL</label>
                                <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control placeholder-title" id="formGroupExampleInput" placeholder="Enter Email"/>
                            </div>
                            <div className="form-group">
                                <label for="formGroupExampleInput2" className='label-title'>PASSWORD</label>
                                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control placeholder-title" id="formGroupExampleInput2" placeholder="Enter Password"/>
                            </div>
                            <button type='submit' className='btn btn-primary w-100 signup-btn'>Sign In</button>
                            <div className='row mt-1'>
                                <div className='col-6'>
                                    <div className='box-margin-left'>
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label label-title" for="gridCheck">Remember Me</label>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <p className='label-title text-right'>Forgot Password</p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <p className='label-title'>Don't have an account? <Link to='/' className='colour-orange'>Click to Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default Login;
