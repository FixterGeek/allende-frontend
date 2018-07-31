import React, {Component} from 'react';
import AdminPanel from "./AdminPanel";
import AdminRoutes from "./AdminRoutes";

class AdminContainer extends Component{

  componentWillMount() {
    if(!localStorage.getItem('user')) this.props.history.push('/');
  }

  logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    this.props.history.push('/')
  };

  render(){
    return(
      <div style={{ display: 'flex'}}>
        <AdminPanel />
        <AdminRoutes logOut={this.logOut} />
      </div>
    )
  }
}

export default AdminContainer;