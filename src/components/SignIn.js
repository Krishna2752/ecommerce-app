import React, { Component } from 'react'
import Button from './Button';
import FormInput from './FormInput';
import './SignInStyles.scss'
import { auth , signInWithGoogle } from '../firebase/firebase.utils';

export class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
      

        }
        handleSubmit = async e => {
            e.preventDefault();
            const {email,password} = this.state;
            try {
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({ email: '', password:'' })
            }
            catch(error){
                console.error(error);
            }
            this.setState({email: '',password: ''})
    }
    handleChange = event => {
        const { value, name } = event.target;
       
    
        this.setState({ [name]: value });
      };
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} required label="Email" />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} required label="Password" />
                    <div className="buttons">
                    <Button type="submit" value="Submit">SIGN IN</Button>
                    <Button onClick={signInWithGoogle} value="Submit" isGoogleSignIn>
                        {' '}
                        Google Login{' '}
                    </Button>
                    </div>


                    
                </form>
               
                
             </div>
         )
    }
}

export default SignIn
