import React, { Component } from 'react';
import {LoginForm} from "./LoginForm";
import './LoginContainer.css';
import {logIn} from "../../services/authServices";
import toastr from 'toastr';

class LoginContainer extends Component{

  state = {
    isLogged: false
  };

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      this.setState({isLogged:true});
      if (user.role === 'admin') {
        console.log('hay admin');
        this.props.history.push('/admin')
      } else if (user.role === 'user') {
        console.log('hay usuario');
        this.props.history.push('/user')
      }
    } else {
      this.setState({isLogged:false})
    }
  }

  login = (e) => {
    e.preventDefault();
    const auth = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    logIn(auth)
      .then(r => {
        let user = r.user;
        let token = r.access_token;
        toastr.success(`Bienvenido ${user.role}`); //cambiar por username
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('access_token', JSON.stringify(token));
        if(user.role === 'admin') {
          this.props.history.push('/admin');
        } else {
          this.props.history.push('/user');
        }
      })
      .catch(error => {
        toastr.error('Revisa tu correo y/o contraseña');
      })
  };

  render(){
    const {isLogged} = this.state;
    if(isLogged) toastr.success('Bienvenido de vuelta');
    return (
      <div className="container">
        <LoginForm onSubmit={this.login} />
      </div>
    );
  }
}

export default LoginContainer;