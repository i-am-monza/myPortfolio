import React, {Component} from 'react';
import './App.css';
// Import queries module
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
	    		<div id="curtain">
	    			<h1>"There are leaders who, in addition to being highly capable, also posses a paradoxial mix of two seemingly conflicting qualities: great ambition for the greater good and personal humility." <i>- anonymous</i></h1>
	    		</div>
			</div>
		 );
	}  
}