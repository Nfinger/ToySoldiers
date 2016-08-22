import React, { PropTypes as T} from 'react';
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Rebase from 're-base'
import MainContainer from "./containers/MainContainer"
import HomeContainer from "./containers/HomeContainer"
import SoldierContainer from "./containers/SoldierContainer"
import AboutContainer from "./containers/AboutContainer"
import ShoppingCartContainer from "./containers/ShoppingCartContainer"
import AdminLogin from "./containers/AdminLoginContainer"
import Admin from "./containers/AdminContainer"
import AdminMain from "./containers/AdminMain"
import PolicyContainer from "./containers/PolicyContainer"
import ProductContainer from "./containers/ProductContainer"
import AdvancedSearchComponent from './components/AdvancedSearchComponent'

const base = Rebase.createClass("https://fingersoldiers.firebaseio.com")

const authData = base.getAuth();

const authDataCallback = (authData, nextState, replace) => {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
      } else {
        replace({pathname: '/login'})
      }
    

    var ref = new Firebase("fingersoldiers.firebaseapp.com");
    ref.onAuth(authDataCallback);
}


class App extends React.Component {

    render(){
      return (
        <Router history={hashHistory}>
          <Route path="/" state={{working : "true"}} component={MainContainer}>
            <IndexRoute component={HomeContainer}></IndexRoute>
            <Route path="/soldiers/:type/:filter" component={SoldierContainer}></Route>
            <Route path="/about" component={AboutContainer}></Route>
            <Route path="/cart" component={ShoppingCartContainer}></Route>
            <Route path="/login" component={AdminLogin}></Route>
            <Route path="/admin" component={AdminMain}></Route>
            <Route path="/policy" component={PolicyContainer}></Route>
            <Route path="/product/:item" component={ProductContainer}></Route>
            <Route path="/advanced" component={AdvancedSearchComponent}></Route>
          </Route>
        </Router>
      )
    }
}



export default App;
