import React, {Component} from 'react';
// Import the styles applied in this component
import './Header.css';
import {NavigatorMini} from './NavigatorMini.js';

export default class Header extends Component
{
	url_ = "http://localhost:3001";

	constructor()
	{
		super();

		this.state = {email: ""};
	} 

	showNavigatorMini = () => {
		let showNavigatorButton = document.getElementById("showNavigatorMini");
		let showLinksButton = document.getElementById("showLinksMini");
		let navigatorMini = document.getElementById("navigatorMini");

		showNavigatorButton.style.display = "none";
		showLinksButton.style.display = "none";
		navigatorMini.style.display = "block";
		console.log("navigatorMini -", navigatorMini);
	}

	showRequestCv = () => {
		let showNavigatorButton = document.getElementById("showNavigatorMini");
		let showLinksButton = document.getElementById("showLinksMini");
		let emailControls = document.getElementById("email-controls");
		let cvRequestControls = document.getElementById("cvRequest-controls");

		console.log("showNavigatorButton -", showNavigatorButton);

		let requestMedium = document.getElementById("request-medium");
		requestMedium.style.display = "none";

		showNavigatorButton.style.display = "none";
		showLinksButton.style.display = "none";
		emailControls.style.display = "flex";
		cvRequestControls.style.display = "block";
	}

	showLinks = () => {

	}

	sendRequest = e => {
		
		if(this.state.email !== "" || this.state.email !== undefined)
		{
			let init = { method: "GET", headers: { "Content-Type": "application/json" } };
			
			fetch(this.url_.concat('/getcv'), init)
				.then(response => {
					return response.json();
				}).then(data => {
					alert(data);
				}, err => {
					console.error(err);
				})
		}
		else
		{
			alert("Invalid email address.");
		}

	}

	captureEmail = e => {
		this.setState({email: e.target.value});
	}
	
	render()
	{
		return (
			<div className="header">
				<div id="headerStage">
					<article className="navigatorMiniStage">
						<button id="showNavigatorMini" onClick={() => this.showNavigatorMini()}>Menu</button>
						<button id="showLinksMini" onClick={() => this.showLinks}>Links</button>
						<NavigatorMini/>
					</article>
					<div className="social-link">
						{/* Get font-awesome icons for the icon links, and change css to acommodate*/}
						<a id="linkedinIcon" href="#linkedin" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
						<a id="githubIcon" href="#github" target="_blank"><i className="fab fa-github fa-3x"></i></a>
						<a id="twitterIcon" href="#twitter" target="_blank"><i className="fab fa-twitter fa-3x"></i></a>
						<a id="facebookIcon" href="#facebook" target="_blank"><i className="fab fa-facebook fa-3x"></i></a>
						<a id="instagramIcon" href="#instagram" target="_blank"><i className="fab fa-instagram fa-3x"></i></a>
					</div>
					<div className="request">
						<div id="email-controls">
							<label id="emailLabel" htmlFor="email">Email: <input id="email" type="text" requared="true" onChange={(event) => this.captureEmail(event)}></input> </label>
						</div>
						<div id="cvRequest-controls">
							<button id="cvRequest" type="button" onClick={() => this.sendRequest()}>Request CV</button>
						</div>
						<div id="request-medium">
							<button id="showRequest" onClick={() => this.showRequestCv()}>...Request</button>
						</div>					
					</div>
				</div>
			</div>
		);
	}
}