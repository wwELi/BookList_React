"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Router, Route,hashHistory,Link} from "react-router";

import {Search} from "./components/Search";
import {Main} from "./components/main";
import {Detail} from "./components/Detail"

import "./main.scss";
import imgurl from "./images/bg.png"

class App extends React.Component{

	render(){
     let  style = {background:"rgb(90, 171, 167)",height:'100%'}
      return (
        <div style={style}>
             <div className="app">
                <Link to="/Search">welcome to Book List</Link>
      	     </div>
        </div>)
    }
}


render((<Router history={hashHistory}>
	    <Route path="/" component={App}/>
      <Route path="/detail:id" component={Detail}/>
      <Route path="/" component={Main}>
          <Route path="/Search" component={Search}/>
       </Route>
	</Router>),
    document.getElementById('app'))

