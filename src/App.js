import React, {Component} from 'react';
//import update from 'react-addons-update';
import './App.css';
import './queries/queries.js'
// Import the Header component to be rendered in this app component
import Header from './Header.js';
import Navigator from './Navigator.js';
import Home from './Home.js';

export default class App extends Component 
{
	render()
	{
		return (
	    	<div id="app" className="container">
	    		<Header />
	    		<div className="sub-content">
	    			<Navigator />
	    			<Home />
	    		</div>
			</div>
		 );
	}  
}