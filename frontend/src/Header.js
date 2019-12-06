import React, { Component } from 'react';
// Import the styles applied in this component
import './Header.css';
import { NavigatorMini } from './NavigatorMini.js';

export default class Header extends Component {
    url_ = "http://localhost:3001";

    constructor() {
        super();

        this.state = { email: "" };
    }

    makeRequest = async (path, init) => {
        console.log("Im here in makerequest", path, init);
    	let request = await fetch(this.url_.concat(path), init);

		let response = await request.json();

		return response;
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

        if (this.state.email !== "" || this.state.email !== undefined) {
            let path = `/getcv/?email=${this.state.email}`;
            let init = { method: "GET", headers: { "Content-Type": "application/json" }};
            console.log("About to make request")
            this.makeRequest(path, init)
                .then(data => {
                    alert(data);
                }, err => {
                    console.error(err);
                });
        } else {
            alert("Invalid email address.");
        }

    }

    captureEmail = e => {
        this.setState({ email: e.target.value });
    }

    render() {
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
						<a id="linkedinIcon" href="https://www.linkedin.com/in/monwabisi-dingane-4287028b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
						<a id="githubIcon" href="https://github.com/i-am-monza/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
						<a id="twitterIcon" href="https://twitter.com/IAmMonza" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
						<a id="facebookIcon" href="https://www.facebook.com/monwabisi.dingane.7" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
						<a id="instagramIcon" href="https://www.instagram.com/iammonza/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
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