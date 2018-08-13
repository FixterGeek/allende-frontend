import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import {AdminProfile} from "../AdminProfile";
import AdminDashboard from '../AdminDashboard/index';
import AdminDist from '../AdminDist/index';
import AdminPedidos from '../AdminPedidos/index';
import AdminProducts from "../AdminProducts/Products/AdminProducts";
import AdminPromos from "../AdminProducts/Promos/AdminPromos";

class AdminRoutes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/admin' component={AdminDashboard} />
        <Route exact path='/admin/profile' component={AdminProfile} />
        <Route exact path='/admin/dist' component={AdminDist} />
        <Route exact path='/admin/pedidos' component={AdminPedidos} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
        <Route exact path='/admin/products' component={AdminProducts} />
        <Route exact path='/admin/promos' component={AdminPromos} />
      </Switch>
    )
  }
}

export default AdminRoutes;