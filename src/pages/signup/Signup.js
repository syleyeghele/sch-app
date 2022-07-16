import React, { Component } from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Alert from 'alert-alert';
import 'alert-alert/dist/standalone/css/alert-alert.css';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSignUpForm = this.handleSignUpForm.bind(this);
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    handleSignUpForm(event) {
        event.preventDefault()
        let email = this.state.email,
            password = this.state.password

            axios.post('https://estyvida-server.herokuapp.com/users/signup', {
                email: email,
                password: password
            }).then( (response) => {

                
                if (response.data.status === 'success') {
                    let type    = 'success';
                    let message = response.data.message;
                    let config  = { timeout: 2000 };
                    setTimeout(() => {  window.location.href = '/overview'; }, 2000);
                    Alert.alert(type, message, config);
                } else {
                    let type    = 'error';
                    let message = response.data.message;
                    let config  = { timeout: 2000 };
                    Alert.alert(type, message, config);
                }

            

                console.log(response)
            }).catch((error) => {
                console.log(error);
              });
              
    }




    render() { 
        return ( 
        <React.Fragment>
            <div className='container con-width'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6 card signup-card'>
                        <p className='sign-up-text'>Estyvida School Management System Sign Up</p>
                        <form onSubmit={this.handleSignUpForm}>
                            <div className="form-group">
                                <label for="formGroupExampleInput" className='label-title'>EMAIL</label>
                                <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control placeholder-title" id="formGroupExampleInput" placeholder="Enter Email"/>
                            </div>
                            <div className="form-group">
                                <label for="formGroupExampleInput2" className='label-title'>PASSWORD</label>
                                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control placeholder-title" id="formGroupExampleInput2" placeholder="Enter Password"/>
                            </div>
                            <button type='submit' className='btn btn-primary w-100 signup-btn'>Sign Up</button>
                            <div className='text-center mt-2'>
                                <p className='label-title'>Have an account? <Link to='/signin' className='colour-orange'>Click to Sign In</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default Signup;
