import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { LocalStorage } from './client/storage/LocalStorage'
import LoginPage from './pages/login/LoginPage'
import RafflesPage from './pages/raffles/RafflesPage'
import UsersPage from './pages/users/UsersPage'
import BartolosPage from './pages/bartolos/BartolosPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import Auth from './components/security'

class App extends Component {

  render() {
      const storage = new LocalStorage()
      const login = storage.get('login')
      const token = login ? login.token : login

      const Secured = Auth(LoginPage)(token)
//              <Route exact path='/' render={Secured(DashboardPage)} />
      return (
          <Switch>
              <Route exact path='/' component={DashboardPage} />
              <Route path='/raffles' component={RafflesPage} />
              <Route path='/users' component={UsersPage} />
              <Route path='/bartolos' component={BartolosPage} />
              <Route path='/login' component={LoginPage} />
          </Switch>
      );
  }
}

export default App;
