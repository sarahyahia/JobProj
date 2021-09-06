import React from 'react'
import "./_app.scss"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import EmployeeRegister from './screens/EmployeeRegister/EmployeeRegister';
import EmployeeScreen from './screens/EmployeeScreen/EmployeeScreen';
import ShowEmp from './screens/ShowEmpProf/ShowEmp';
import ShowJob from './screens/ShowJobProf/ShowJob';
import JobSearch from './screens/HomeScreen/JobSearch';
import EmpSearch from './screens/EmployeeScreen/EmpSearch';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginScreen}></Route>
        <Route path="/search=:name" component={JobSearch}></Route>
        <Route path="/search/:name" component={EmpSearch}></Route>
        <Route path="/job" component={HomeScreen}></Route>
        <Route path="/emp/register" component={EmployeeRegister}></Route>
        <Route path="/emp/:id" component={ShowEmp}></Route>
        <Route path="/job/:id" component={ShowJob}></Route>
        <Route path="/emp" component={EmployeeScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
