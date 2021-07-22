import React, { Component } from 'react'
import Button from './Button';
import FormInput from './FormInput';
import './SignInStyles.scss'

export class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
      

        }
        handleSubmit = (e) => {
            e.preventDefault();
            this.setState({email: '',password: ''})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={e => this.setState({email: e.target.value})} required label="Email" />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={e => this.setState({password: e.target.value})} required label="Password" />

                    <Button type="submit" value="Submit">SIGN IN</Button>


                    
                </form>
               
                
             </div>
         )
    }
}

export default SignIn
