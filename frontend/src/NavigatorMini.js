import React, {Component} from 'react';
import './Navigator.css';

export class NavigatorMini extends Component
{
	render()
	{
		return (
			<div id="navigatorMini">
				<ul>
					<li>
						<a id="homeLink" href="#homeAnchor">Home</a>
					</li>
					<li>
						<a id="aboutLink" href="#aboutAnchor" >About</a>
					</li>
					<li>
						<a id="careersLink" href="#careersAnchor">Career</a>
					</li>
					<li>
						<a id="contactLink" href="#contactAnchor" >Contact</a>
					</li>
				</ul>
			</div>
		);
	}
}