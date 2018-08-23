import React from 'react';
import {Button, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import photo from '../../assets/logo.png';

export const AdminProfile = () => {

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return(
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
      <Avatar src={photo} size="large" />
      <h2>Nombre de usuario: </h2>
      <p> {user.contactName} </p>
      <h2>Email</h2>
      <p> {user.email} </p>
      <Link to="/">
        <Button type='danger' icon="poweroff" onClick={logOut}> Cerrar Sesión </Button>
      </Link>
    </div>
  )
};